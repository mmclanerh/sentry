#!/bin/bash

set -e

# first check if we're passing flags, if so
# prepend with sentry
if [ "${1:0:1}" = '-' ]; then
	set -- sentry "$@"
fi

if [[ $1 =~ ^[[:alnum:]]+$ ]] && grep -Fxq "$1" /sentry-commands.txt; then
	set -- sentry "$@";
fi

if [ "$1" = 'sentry' ]; then
	set -- tini -- "$@"
	if [ "$(id -u)" = '0' ]; then
		mkdir -p "$SENTRY_FILESTORE_DIR/files"
		sentry_uid=$(id -u sentry)
		if [ "$(stat -c %u $SENTRY_FILESTORE_DIR)" != "$sentry_uid" ] || [ "$(stat -c %u $SENTRY_FILESTORE_DIR/files)" != "$sentry_uid" ]; then
			find $SENTRY_FILESTORE_DIR ! -user sentry -exec chown sentry {} \;
		fi
		set -- gosu sentry "$@"
	fi
fi

exec "$@"
