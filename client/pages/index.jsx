import React from "react";
import {graphql} from "react-apollo";

import Meta from '../components/Meta'
import Page from '../layouts/Page';

import GetAppByDomainQuery from "../gql/GetAppByDomain";

import Navigation from "../components/Navigation";
import Renderer from "../components/Renderer";

class Index extends React.Component {
    render() {
        const { error, data } = this.props;
        if (error) return <div>Error Loading</div>;
        return (
            <Page>
                <Meta title={data.app.name} tagline={data.app.tagline} description={data.app.description}/>
                <Navigation title={data.app.name} logo={data.app.logo_image} collection={data.app.navcollection}/>
                <Renderer data={data.app.homeview.page.data}/>
            </Page>
        );
    }
}

export default graphql(GetAppByDomainQuery, {
    options: (props) => ({ variables: { domain: props.domain } })
})(Index);
