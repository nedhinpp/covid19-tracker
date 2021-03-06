import React, { Component } from 'react';

import {Navbar, Nav} from 'react-bootstrap';

import {Link} from 'react-router-dom';

class Header extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/India">Covid 19</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/India">India</Link>
                        <Link className="nav-link" to="/World">World</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}


export default Header;