const withSass = require('@zeit/next-sass');

module.exports = withSass({
    publicRuntimeConfig: {
        GRAPHQL_URL: 'http://laravel.test:8080/graphql/public'
    }
});
