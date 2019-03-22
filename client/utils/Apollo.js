// lib/withApollo.js
import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache }  from 'apollo-boost';

import getConfig from 'next/config';
const {publicRuntimeConfig} = getConfig();

export default withApollo(({ ctx, headers, initialState }) => (
    new ApolloClient({
        uri: publicRuntimeConfig.GRAPHQL_URL,
        cache: new InMemoryCache().restore(initialState || {})
    })
))
