# Sentry Basic Functional Testing

## Setup python

```shell
python3 -m venv venv
source venv/bin/activate
pip3 install sentry_sdk
```

## Run the error generator

First, find the DSN for the project that is to receive the error event.  This can be easily done by logging into the sentry instance, goto Settings->Projects->internal.  Look for the `Client Keys(DSN)` option from the list of settings and copy the value for DSN.  Pass this value as is to the error_generator.py as an argument.

```shell
python test/error_generator/error_generator.py $DSN
```

To see the error, navigate to Projects->interal in the sentry UI.

## On Openshift Cluster

1. Create a pull-secret to pull from quay.io

1. Create a postgres db
```shell
oc new-app --image-stream=openshift/postgresql:9.6-el8 -e POSTGRESQL_USER=sentry -e POSTGRESQL_PASSWORD=secret POSTGRESQL_ADMIN_PASSWORD=admin POSTGRESQL_DATABASE=sentry
```

1. Generate a set of credentials for relay

```shell
export RELAY_CREDS=`docker run -ti --mount type=bind,source=$(PWD)/test/config/relay/config.yml,target=/etc/relay/config.yml quay.io/app-sre/relay:latest -c /etc/relay credentials generate --stdout`
```

1. Generate a secret key for sentry

```shell
export SENTRY_KEY=`docker run --rm -it quay.io/app-sre/sentry:latest sentry config generate-secret-key`
```

1. Deploy the prereqs

```shell
oc process --local -f test/deploy/sentry-deps.yaml -p RELAY_CREDENTIALS=$RELAY_CREDS -p SENTRY_SECRET_KEY="$SENTRY_KEY" | oc create -f -
```

1. Deploy clickhouse

```shell
oc process --local -f clickhouse.yaml | oc create -f -
```

1. Initialize the prereqs

```shell
oc process --local -f sentry-init.yaml -p IMAGE=quay.io/rrati/sentry -p IMAGE_TAG=test -p SNUBA_IMAGE=quay.io/rrati/snuba -p SNUBA_IMAGE_TAG=test | oc create -f -
```
