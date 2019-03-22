import React, { Fragment } from "react";

import Meta from '../components/Meta';
import Footer from '../components/Footer';

class Main extends React.Component {
    render() {
        return (
            <Fragment>
                <Meta />
                <Fragment>
                    { this.props.children }
                </Fragment>
            </Fragment>
        )
    }
}

export default Main;
