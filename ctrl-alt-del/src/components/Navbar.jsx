import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from React Router
import logo from "../assets/logo_up.jpg";
import "../styles/navbar.css";

const MentalHealthNavbar = () => {
  return (
    <Navbar expand="lg" className="px-3 navbar" style={{ backgroundColor: '#84a160' }}>
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="brand-container">
          <div className="logo-wrapper">
            <img src={logo} alt="Logo" className="app-logo" />
          </div>
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto font-pacifico font-bold text-black">
            {/* Main Links */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/login">Login / Signup</Nav.Link>

            {/* Additional Links in Dropdown */}
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/journal">Write Your Journal 📝</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blogs">Read Blogs 📰</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mood-tracker">Track Your Mood 🧐</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/analysis">Analyze Your Journey 📊</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/rewards">Badges Earned 🏆</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MentalHealthNavbar;
