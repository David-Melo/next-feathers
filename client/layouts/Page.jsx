import React, { Fragment } from "react";

import Meta from '../components/Meta';
import Footer from '../components/Footer';

class Main extends React.Component {
    render() {
        return (
            <Fragment>
                <Meta />
                <main>
                    { this.props.children }
                </main>
            </Fragment>
        )
    }
}

export default Main;
