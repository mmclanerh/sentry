FROM registry.access.redhat.com/ubi8/ubi

# add our user and group first to make sure their IDs get assigned consistently
RUN groupadd -r sentry && useradd -r -m -g sentry sentry

RUN yum update -y && yum clean all

RUN yum install -y \
        gcc \
        python2-devel \
        python2-pip \
        redhat-rpm-config \
    && yum clean all

# Sane defaults for pip
ENV PIP_NO_CACHE_DIR off
ENV PIP_DISABLE_PIP_VERSION_CHECK on

# grab gosu for easy step-down from root
ENV GOSU_VERSION 1.11
RUN set -x \
    && yum install -y wget && yum clean all \
    && wget -O /usr/local/bin/gosu "https://github.com/tianon/gosu/releases/download/$GOSU_VERSION/gosu-$(if [ `arch` = 'x86_64' ]; then echo 'amd64'; else echo `arch`; fi)" \
    && chmod +x /usr/local/bin/gosu \
    && gosu nobody true \
    && yum remove -y wget

# grab tini for signal processing and zombie killing
ENV TINI_VERSION v0.18.0
RUN set -x \
    && yum update -y && yum install -y wget && yum clean all \
    && wget -O /usr/local/bin/tini "https://github.com/krallin/tini/releases/download/$TINI_VERSION/tini" \
    && chmod +x /usr/local/bin/tini \
    && tini -h \
    && yum remove -y wget

# Support for RabbitMQ
RUN set -x \
    && yum update -y && yum install -y make && yum clean all \
    && pip2 install librabbitmq \
    && python2 -c 'import librabbitmq' \
    && yum remove -y make

ENV SENTRY_VERSION 9.1.2

RUN set -x \
    && yum update -y && yum install -y wget gcc-c++ && yum clean all \
    && mkdir -p /usr/src/sentry \
    && wget -O /usr/src/sentry/sentry-${SENTRY_VERSION}-py27-none-any.whl "https://github.com/getsentry/sentry/releases/download/${SENTRY_VERSION}/sentry-${SENTRY_VERSION}-py27-none-any.whl" \
    && wget -O /usr/src/sentry/sentry_plugins-${SENTRY_VERSION}-py2.py3-none-any.whl "https://github.com/getsentry/sentry/releases/download/${SENTRY_VERSION}/sentry_plugins-${SENTRY_VERSION}-py2.py3-none-any.whl" \
    && pip2 install \
        /usr/src/sentry/sentry-${SENTRY_VERSION}-py27-none-any.whl \
        /usr/src/sentry/sentry_plugins-${SENTRY_VERSION}-py2.py3-none-any.whl \
        https://github.com/getsentry/sentry-auth-github/archive/master.zip\
    && sentry --help \
    && sentry plugins list

ENV SENTRY_CONF=/etc/sentry \
    SENTRY_FILESTORE_DIR=/var/lib/sentry/files

RUN mkdir -p $SENTRY_CONF && mkdir -p $SENTRY_FILESTORE_DIR

COPY sentry.conf.py /etc/sentry/
COPY config.yml /etc/sentry/

COPY docker-entrypoint.sh /entrypoint.sh

EXPOSE 9000
VOLUME /var/lib/sentry/files

ENTRYPOINT ["/entrypoint.sh"]
