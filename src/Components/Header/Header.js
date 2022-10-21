import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { IoMdCart } from "react-icons/io";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-4">
            <Container>
                <Navbar.Brand href="#home">Amaxon</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link className="fs-5">Login</Nav.Link>
                        <Nav.Link ><IoMdCart color="white" fontSize="25px"></IoMdCart></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;