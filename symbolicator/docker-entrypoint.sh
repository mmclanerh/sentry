#!/bin/bash

set -e

if [ "$(id -u)" == "0" ]; then
  # Prepare default data directory
  chown symbolicator:symbolicator /data

  exec gosu symbolicator /bin/symbolicator "$@"
else
  exec /bin/symbolicator "$@"
fi
