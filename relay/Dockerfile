FROM registry.access.redhat.com/ubi8/ubi as builder

# Install rust
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs -o ./rust-install.sh && chmod +x ./rust-install.sh
RUN ./rust-install.sh -y && rm -f ./rust-install.sh

RUN yum update -y && yum clean all

RUN yum install -y \
    make \
    git \
    gcc \
    openssl-devel \
    cmake \
    gcc-c++

ENV RELAY_VERSION 20.11.1
RUN mkdir -p /usr/src/sentry && \
    cd /usr/src/sentry && \
    git clone https://github.com/getsentry/relay.git && \
    cd relay && \
    git checkout ${RELAY_VERSION}

WORKDIR /usr/src/sentry/relay

ARG RELAY_FEATURES=ssl,processing
ENV RELAY_FEATURES=${RELAY_FEATURES}
ENV BUILD_TARGET=x86_64-unknown-linux-gnu

RUN source $HOME/.cargo/env && make build-linux-release TARGET=${BUILD_TARGET} RELAY_FEATURES=${RELAY_FEATURES}
RUN cp ./target/${BUILD_TARGET}/release/relay /bin/relay



FROM registry.access.redhat.com/ubi8/ubi

# add our user and group first to make sure their IDs get assigned consistently
RUN groupadd -r relay && useradd -r -m -g relay relay

RUN yum update -y && yum clean all

# grab gosu for easy step-down from root
ENV GOSU_VERSION 1.11
RUN set -x \
    && yum install -y wget \
    && wget -O /usr/local/bin/gosu "https://github.com/tianon/gosu/releases/download/$GOSU_VERSION/gosu-$(if [ `arch` = 'x86_64' ]; then echo 'amd64'; else echo `arch`; fi)" \
    && chmod +x /usr/local/bin/gosu \
    && gosu nobody true \
    && yum remove -y wget && yum clean all

ENV DATA_DIR=/work \
    CONFIG_DIR=/etc/relay

RUN mkdir $DATA_DIR $CONFIG_DIR && chown relay:relay $DATA_DIR $CONFIG_DIR

VOLUME ["/work", "/etc/relay"]
WORKDIR /work

EXPOSE 3000

COPY --from=builder /bin/relay /bin/relay
COPY ./docker-entrypoint.sh /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
