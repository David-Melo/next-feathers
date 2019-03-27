import React from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import PropTypes from 'prop-types';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <React.Fragment>
                <Navbar color="white" light expand="md">
                    <Container>
                        <NavbarBrand href="/">
                            {this.props.title && !this.props.logo &&
                                <span>{this.props.title}</span>
                            }
                            {this.props.logo &&
                                <img className="img-fluid" src={`https://s3.amazonaws.com/spectre-uploads/${this.props.logo}`} alt={this.props.title} height="50" />
                            }
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {this.props.collection && this.props.collection.pages.map((i,k)=>(
                                    <NavItem key={k}>
                                        <NavLink href={i.slug} title={i.title} >{i.title}</NavLink>
                                    </NavItem>
                                ))}
                            </Nav>
                            <Nav className="nav-cta-wrapper ml-4" navbar>
                                <NavItem>
                                    <NavLink href="tel:3052227171" title="Click To Call" className="nav-cta">305-222-7171</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}

Navigation.propTypes = {
    title: PropTypes.string.isRequired,
    logo: PropTypes.string,
    collection: PropTypes.object
};

export default Navigation;
