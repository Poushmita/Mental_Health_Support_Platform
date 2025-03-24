import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo3.jpg";
import "../styles/navbar.css";

const MentalHealthNavbar = () => {
  return (
    <Navbar expand="lg"  className="px-3 navbar" style={{backgroundColor: '#84a160'}}>
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home" className="brand-container">
          <div className="logo-wrapper">
            <img src={logo} alt="Logo" className="app-logo" />
            {/* <span className="app-name">Ctrl+Alt+Del</span> */}
          </div>
        </Navbar.Brand>


        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto font-pacifico font-bold text-black">
            {/* Main Links */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#login">Login / Signup</Nav.Link>

            {/* Additional Links in Dropdown */}
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#journal">Write Your Journal 📝 </NavDropdown.Item>
              <NavDropdown.Item href="#blogs">Read Blogs 📰 </NavDropdown.Item>
              <NavDropdown.Item href="#track mood">Track your mood 🧐 </NavDropdown.Item>
              <NavDropdown.Item href="#analysis">Analyze your journey 📊 </NavDropdown.Item>
              <NavDropdown.Item href="#rewards">Badges earned 🏆</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MentalHealthNavbar;

