FROM registry.access.redhat.com/ubi8/ubi

# add our user and group first to make sure their IDs get assigned consistently
RUN groupadd -r symbolicator && useradd -r -m -g symbolicator symbolicator

RUN yum update -y && yum clean all

# grab gosu for easy step-down from root
ENV GOSU_VERSION 1.11
RUN set -x \
    && yum install -y wget \
    && wget -O /usr/local/bin/gosu "https://github.com/tianon/gosu/releases/download/$GOSU_VERSION/gosu-$(if [ `arch` = 'x86_64' ]; then echo 'amd64'; else echo `arch`; fi)" \
    && chmod +x /usr/local/bin/gosu \
    && gosu nobody true \
    && yum remove -y wget && yum clean all

ENV SYMBOLICATOR_VERSION 0.3.2
RUN set -x \
    && yum install -y wget \
    && mkdir -p /usr/src/sentry \
    && wget -O /usr/src/sentry/symbolicator "https://github.com/getsentry/symbolicator/releases/download/${SYMBOLICATOR_VERSION}/symbolicator-Linux-x86_64" \
    && cp /usr/src/sentry/symbolicator /bin/symbolicator \
    && chmod +x /bin/symbolicator \
    && yum remove -y wget && yum clean all

ENV DATA_DIR=/data \
    CONFIG_DIR=/etc/symbolicator

RUN mkdir -p $DATA_DIR $CONFIG_DIR && chown symbolicator:symbolicator $DATA_DIR $CONFIG_DIR

VOLUME ["/data"]

EXPOSE 3021

COPY ./docker-entrypoint.sh /docker-entrypoint.sh
COPY ./config.yml /etc/symbolicator

ENTRYPOINT ["/docker-entrypoint.sh"]
