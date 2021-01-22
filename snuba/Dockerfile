# Build snuba since there are not binary releases
FROM registry.access.redhat.com/ubi8/ubi
ENV SNUBA_VERSION 20.11.1

RUN yum -y update; \
    yum install -y \
        expat \
        libffi \
        lz4-libs \
        pcre \
        python38 \
        python38-devel \
        python38-pip \
    ; \
    yum clean all

RUN set -x \
    && yum install -y wget \
    && mkdir -p /usr/src/sentry \
    && wget -O /usr/src/sentry/snuba.tar.gz "https://github.com/getsentry/snuba/archive/${SNUBA_VERSION}.tar.gz"

RUN cd /usr/src/sentry && tar -zxf snuba.tar.gz

WORKDIR /usr/src/sentry/snuba-${SNUBA_VERSION}

ENV PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on

# Install snuba
RUN set -ex; \
    \
    buildDeps=' \
        gcc \
        glibc-devel \
        lz4-devel \
        pcre-devel \
    '; \
    yum install -y $buildDeps; \
    \
    pip3 install -e .; \
    yum erase -y $buildDeps

# add our user and group first to make sure their IDs get assigned consistently
RUN groupadd -r snuba && useradd -r -m -g snuba snuba

# grab gosu for easy step-down from root
ENV GOSU_VERSION 1.11
RUN set -x \
    && yum install -y wget \
    && wget -O /usr/local/bin/gosu "https://github.com/tianon/gosu/releases/download/$GOSU_VERSION/gosu-$(if [ `arch` = 'x86_64' ]; then echo 'amd64'; else echo `arch`; fi)" \
    && chmod +x /usr/local/bin/gosu \
    && gosu nobody true \
    && yum remove -y wget && yum clean all

COPY ./docker-entrypoint.sh /docker-entrypoint.sh

EXPOSE 1218

ENTRYPOINT ["/docker-entrypoint.sh"]
