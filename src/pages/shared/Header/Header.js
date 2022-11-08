import React, { useContext, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser, FaFlagCheckered } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [currentState, setCurrentState] = useState("");

  useEffect(() => {
    setCurrentState(location.pathname);
    console.log({ currentState });
  });
  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link className="me-3" to="/">
            {<FaFlagCheckered size={30}></FaFlagCheckered>}
          </Link>
          <Link to="/">Immigration and Consultancy</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="pills" className="me-auto m-auto">
            <Nav.Item>
              <Nav.Link eventKey="/services">
                <Link className=" text-dark" to="/services">
                  Services
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/my-reviews">
                <Link className=" text-dark" to="/my-reviews">
                  My Reviews
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/blog">
                <Link className=" text-dark" to="/blog">
                  Blog
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <></>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
