import React from "react";
import {Container} from "reactstrap";

import Page from '../layouts/Page';

import Editor from "../components/Editor";

class Home extends React.Component {
    render() {
        return (
            <Page>
                <Container>
                    <Editor/>
                </Container>
            </Page>
        );
    }
}

export default Home
