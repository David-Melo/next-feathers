import React from "react";
import {graphql} from "react-apollo";
import { Container, Button, Row, Col } from 'reactstrap';

import Page from '../layouts/Page';

import GetAppByDomainQuery from "../gql/GetAppByDomain";
import Navigation from "../components/Navigation";

class Index extends React.Component {
    render() {
        const { error, data } = this.props;
        if (error) return <div>Error Loading</div>;
        return (
            <Page>

                <Navigation title="Mr. Clusia" logo="https://s3.amazonaws.com/spectre-uploads/qsHJWt27sZdjJG2HuhY4HA1NILJV94Ek7rTqKG9m.png" />

                <section className="bg-primary primary-section" style={{backgroundImage: "url('https://s3.amazonaws.com/spectre-uploads/ZhRB0FRAoBVKleLpOESiiMN1pH1XJGqwpS9Dpxm8.png')"}}>

                    <h1 className="text-center styled">
                        <span className="text-secondary">Best Hedges, </span>
                        <span className="text-white">Best Prices</span>
                    </h1>

                    <Container className="my-4">
                        <Row>
                            <Col md="4">
                                <div className="boxed">
                                    <img className="img-fluid" src="https://s3.amazonaws.com/spectre-uploads/Clusia.jpg" alt="Mr. Clusia" />
                                    <div className="h4 text-center text-primary bg-secondary py-2 med-typed text-uppercase">Clusia</div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="boxed">
                                    <img className="img-fluid" src="https://s3.amazonaws.com/spectre-uploads/Podocarpus.jpg" alt="Mr. Clusia" />
                                    <div className="h4 text-center text-primary bg-secondary py-2 med-typed text-uppercase">Podocarpus</div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="boxed">
                                    <img className="img-fluid" src="https://s3.amazonaws.com/spectre-uploads/Buttonwood.jpg" alt="Mr. Clusia" />
                                    <div className="h4 text-center text-primary bg-secondary py-2 med-typed text-uppercase">Buttonwood</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <h2 className="text-center text-white med-typed">Decorative & Privacy Hedges <br/> Clusia, Podocarpus, & More</h2>

                </section>

                <section>

                    <Container>

                        <div className="text-center h2">
                            Locally Owned & Grown <br/>
                            Delivery & Installation Available <br/>
                            Wholesale & Retail <br/>
                        </div>

                    </Container>

                </section>

                <section className="bg-secondary">

                    <Container>

                        <img className="img-fluid" src="https://via.placeholder.com/1200x400" alt="Mr. Clusia" />

                    </Container>

                </section>

            </Page>
        );
    }
}

export default graphql(GetAppByDomainQuery, {
    options: (props) => ({ variables: { domain: props.domain } })
})(Index);
