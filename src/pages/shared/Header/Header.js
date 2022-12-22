import React, { useContext, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser, FaFlagCheckered } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import ReactTooltip from "react-tooltip";
import Button from "react-bootstrap/Button";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const [currentState, setCurrentState] = useState("");
  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.clear("token");
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    setCurrentState(location.pathname);
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
        <Navbar.Brand className="brand-color">
          <Link className="me-3 brand-color" to="/">
            {<FaFlagCheckered size={30}></FaFlagCheckered>}
          </Link>
          <Link className="brand-color fw-bold" to="/">
            Immigration and Consultancy
          </Link>
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
            <>
              {user?.uid ? (
                <Nav.Item>
                  <Nav.Link eventKey="/my-reviews">
                    <Link className=" text-dark" to="/my-reviews">
                      My Reviews
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              ) : (
                ""
              )}
            </>
            <>
              {user?.uid ? (
                <Nav.Item>
                  <Nav.Link eventKey="/add-service">
                    <Link className=" text-dark" to="/add-service">
                      Add service
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              ) : (
                ""
              )}
            </>

            <Nav.Item>
              <Nav.Link eventKey="/blog">
                <Link className=" text-dark" to="/blog">
                  Blog
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <>
              {user?.uid ? (
                <>
                  <Link to="/" className="me-2">
                    {user?.photoURL ? (
                      <Image
                        style={{ height: "30px" }}
                        data-tip={user?.displayName}
                        roundedCircle
                        src={user?.photoURL}
                      ></Image>
                    ) : (
                      <FaUser></FaUser>
                    )}
                  </Link>
                  <ReactTooltip />
                  <Button variant="light" onClick={handleLogOut}>
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    className={`me-2 ${
                      currentState === "/login" ? "d-none" : ""
                    }`}
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className={`${currentState === "/login" ? "" : "d-none"}`}
                    to="/register"
                  >
                    Register
                  </Link>
                </>
              )}
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
