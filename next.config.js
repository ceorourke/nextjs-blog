const withSourceMaps = require('@zeit/next-source-maps')();
const { execSync } = require("child_process");
const SentryCliPlugin = require('@sentry/webpack-plugin');

module.exports = withSourceMaps({
  env: {
    dsn: "https://fcc41a1fbc214647a0d72fdc2384b526@o139230.ingest.sentry.io/5316454",
    release: execSync('git rev-parse HEAD').toString()
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
        release: execSync('git rev-parse HEAD').toString()
      })
    )
    return config
  }
});

