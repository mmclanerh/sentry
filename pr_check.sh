#!/bin/bash

oc process --local -f sentry.yaml | oc apply --dry-run -f -
rc=$?
if [ $rc -ne 0 ]
then
  exit $rc
fi

oc process --local -f init-db.yaml | oc apply --dry-run -f -
