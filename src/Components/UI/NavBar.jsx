import 'bootstrap/dist/css/bootstrap.min.css'; import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        {/* <Nav.Link as={Link} to="about">About</Nav.Link> */}
                        <Nav.Link as={Link} to="country">Country</Nav.Link>
                        <Nav.Link as={Link} to="contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;