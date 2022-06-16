import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import {Link, useLinkClickHandler} from 'react-router-dom'
const NavBarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>Picture Gallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Photos</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='signup'>Sign Up</Nav.Link>
            <Nav.Link  as={Link} to='login'>LogIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;

