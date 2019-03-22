import React from "react";
import {graphql} from "react-apollo";

import Page from '../layouts/Page';
import { SplashView } from "../components/SplashView";

import GetAppByDomainQuery from "../gql/GetAppByDomain";

class Index extends React.Component {
    render() {
        const { error, data } = this.props;
        if (error) return <div>Error Loading</div>;
        return (
            <Page>
                <SplashView view={data.app.splashview}/>
            </Page>
        );
    }
}

export default graphql(GetAppByDomainQuery, {
    options: (props) => ({ variables: { domain: props.domain } })
})(Index);
