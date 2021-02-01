SENTRY_VERSION=9.1.2

wget -O sentry-${SENTRY_VERSION}-py27-none-any.whl "https://github.com/getsentry/sentry/releases/download/${SENTRY_VERSION}/sentry-${SENTRY_VERSION}-py27-none-any.whl"
wget -O sentry_plugins-${SENTRY_VERSION}-py2.py3-none-any.whl "https://github.com/getsentry/sentry/releases/download/${SENTRY_VERSION}/sentry_plugins-${SENTRY_VERSION}-py2.py3-none-any.whl"
wget -O sentry-src-${SENTRY_VERSION}.tar.gz "https://github.com/getsentry/sentry/releases/download/${SENTRY_VERSION}/sentry-${SENTRY_VERSION}.tar.gz"
wget -O sentry-auth-github.zip https://github.com/getsentry/sentry-auth-github/archive/master.zip
# pip2 install \
#        /usr/src/sentry/sentry-${SENTRY_VERSION}-py27-none-any.whl \
#        /usr/src/sentry/sentry_plugins-${SENTRY_VERSION}-py2.py3-none-any.whl \
#        https://github.com/getsentry/sentry-auth-github/archive/master.zip\
#        sentry --help \
