const withSourceMaps = require('@zeit/next-source-maps')();
const SentryCliPlugin = require('@sentry/webpack-plugin');

module.exports = withSourceMaps({
  env: {
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    release: process.env.VERCEL_GITHUB_COMMIT_SHA
  },
  webpack(config, options) {
    // https://github.com/getsentry/sentry-javascript/issues/2378
    if (!options.isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser'
    }

    // SentryCliPlugin - Use only when running the production app. This will keep generating and uploading source maps
    // on every render if used in dev.

    config.plugins.push(
      new SentryCliPlugin({
        include: '.next',
        ignore: ['node_modules'],
        urlPrefix: '~/_next',
        release: process.env.VERCEL_GITHUB_COMMIT_SHA
      })
    )
    return config
  }
});

