const withSass = require('@zeit/next-sass');

module.exports = withSass({
    publicRuntimeConfig: {
        GRAPHQL_URL: 'https://nativepress.org/graphql/public'
    }
});
