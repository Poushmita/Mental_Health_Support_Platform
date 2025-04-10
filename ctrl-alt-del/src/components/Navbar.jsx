import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_up.jpg";
import "../styles/navbar.css";

const MentalHealthNavbar = () => {
  const location = useLocation();

  // Background colors for different pages
  const pageBackgrounds = {
    "/": "#fcfeed",
    "/signup": "linear-gradient(to right, #F1DDD2, #EDF6F9)", 
    "/about": "#EDF6F9",
    "/contact": "#F1DDD2",
    "/mood-tracker": "#83C5BE ",
    "/journal": "#FFF5E1",
    "/blogs": "#FAF3E0",
    "/analysis": "#EAE2B7",
    "/rewards": "#F7CAC9",
  };

  const currentBgColor = pageBackgrounds[location.pathname] || "transparent";

  return (
    <Navbar expand="lg" className="px-3 navbar" style={{ backgroundColor: currentBgColor }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-container">
          <div className="logo-wrapper">
            <img src={logo} alt="Logo" className="app-logo" />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto font-pacifico font-bold text-black">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/login">Login / Signup</Nav.Link>

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
