#!/bin/bash

set -ex

QUAY="quay.io/app-sre"
TAG=$(shell git rev-parse --short=7 HEAD)
TARGET="${QUAY}/sentry:${TAG}"

docker build --pull -t ${TARGET} .
docker push ${TARGET}

exit 0
