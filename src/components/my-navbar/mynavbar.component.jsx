import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from "../../assets/icons/logow.webp";

import "./mynavbar.style.css";

const Mynavbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="md"  variant="dark" fixed="top" className="animate-navbar nav-theme justify-content-between">
  <Navbar.Brand href="#home">
      <img className="logo" src={Logo} alt="My Portfolio logo" width="45px" height="45px" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
      <Nav.Link href="#experience">Experience</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contact">Contacts</Nav.Link>
      </Nav>

    
  </Navbar.Collapse>
</Navbar> 
        </div>
    )
}

export default Mynavbar
