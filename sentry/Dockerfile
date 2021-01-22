FROM registry.access.redhat.com/ubi8/ubi

# add our user and group first to make sure their IDs get assigned consistently
RUN groupadd -r sentry && useradd -r -m -g sentry sentry

# Install rust
# Solves https://github.com/getsentry/sentry/issues/9969
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs -o ./rust-install.sh && chmod +x ./rust-install.sh
RUN ./rust-install.sh -y && rm -f ./rust-install.sh

RUN yum update -y && yum clean all

RUN yum install -y \
        gcc \
        python2-devel \
        python2-pip \
        redhat-rpm-config \
        pkgconf \
        xmlsec1 \
        xmlsec1-openssl \
        libyaml-devel \
        libxslt-devel \
        libffi-devel \
    && yum clean all

# Sane defaults for pip
ENV PIP_NO_CACHE_DIR off
ENV PIP_DISABLE_PIP_VERSION_CHECK on

# Disable uWSGI features not used
ENV UWSGI_PROFILE_OVERRIDE=ssl=false;xml=false;routing=false

# Install Centos 8 repos for missing deps
#RUN curl http://mirror.centos.org/centos/8/BaseOS/x86_64/os/Packages/centos-linux-repos-8-2.el8.noarch.rpm -o ./centos-linux-repos-8-2.el8.noarch.rpm
#RUN curl http://mirror.centos.org/centos/8/BaseOS/x86_64/os/Packages/centos-gpg-keys-8-2.el8.noarch.rpm -o ./centos-gpg-keys-8-2.el8.noarch.rpm
#RUN yum install -y ./*.rpm && rm -f *.rpm
RUN yum install -y http://mirror.centos.org/centos/8/BaseOS/x86_64/os/Packages/centos-linux-repos-8-2.el8.noarch.rpm \
                   http://mirror.centos.org/centos/8/BaseOS/x86_64/os/Packages/centos-gpg-keys-8-2.el8.noarch.rpm

# Install additional deps
RUN yum --enablerepo powertools --disablerepo baseos,appstream install -y xmlsec1-devel
RUN yum --enablerepo powertools --disablerepo baseos install -y libtool-ltdl-devel

# grab gosu for easy step-down from root
ENV GOSU_VERSION 1.11
RUN set -x \
    && yum install -y wget \
    && wget -O /usr/local/bin/gosu "https://github.com/tianon/gosu/releases/download/$GOSU_VERSION/gosu-$(if [ `arch` = 'x86_64' ]; then echo 'amd64'; else echo `arch`; fi)" \
    && chmod +x /usr/local/bin/gosu \
    && gosu nobody true \
    && yum remove -y wget && yum clean all

# grab tini for signal processing and zombie killing
ENV TINI_VERSION v0.18.0
RUN set -x \
    && yum install -y wget \
    && wget -O /usr/local/bin/tini "https://github.com/krallin/tini/releases/download/$TINI_VERSION/tini" \
    && chmod +x /usr/local/bin/tini \
    && tini -h \
    && yum remove -y wget && yum clean all

ENV SENTRY_VERSION 20.11.1
RUN set -x \
    && yum install -y wget gcc-c++ \
    && mkdir -p /usr/src/sentry \
    && wget -O /usr/src/sentry/sentry-${SENTRY_VERSION}-0-py2.py3-none-any.whl "https://github.com/getsentry/sentry/releases/download/${SENTRY_VERSION}/sentry-${SENTRY_VERSION}-0-py2.py3-none-any.whl" \
    && source $HOME/.cargo/env \
    && pip2 install /usr/src/sentry/sentry-${SENTRY_VERSION}-0-py2.py3-none-any.whl \
    && pip2 check \
    && sentry help | sed '1,/Commands:/d' | awk '{print $1}' >  /sentry-commands.txt \
    && rm -f /usr/src/sentry/sentry-${SENTRY_VERSION}-py27-none-any.whl \
    && yum remove -y wget && yum clean all

# Remove build deps
RUN yum erase -y \
        gcc \
        python2-devel \
        pkgconf \
        libtool-ltdl-devel \
    && yum clean all

ENV SENTRY_CONF=/etc/sentry \
    SENTRY_FILESTORE_DIR=/data

RUN mkdir -p $SENTRY_CONF && mkdir -p $SENTRY_FILESTORE_DIR

COPY sentry.conf.py /etc/sentry/
COPY config.yml /etc/sentry/

COPY docker-entrypoint.sh /entrypoint.sh

EXPOSE 9000
VOLUME /data

ENTRYPOINT ["/entrypoint.sh"]
