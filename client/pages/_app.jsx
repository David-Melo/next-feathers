import React from "react";
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo';

import withApollo from '../utils/Apollo';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        const isServer = !!ctx.req;
        const domain = isServer ? ctx.req.hostname : window.location.hostname;
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        pageProps.domain = domain;
        return { isServer, pageProps };
    }
    render () {
        const { apollo, Component, pageProps } = this.props;
        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <Component {...pageProps} />
                </ApolloProvider>
            </Container>
        )
    }
}

export default withApollo(MyApp)
