import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';


class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="*" bg="light" variant="light">
                <Navbar.Brand>
                    <i className="fas fa-cat"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer exact to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer exact to="/contact">
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
}

export default NavBar;