import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Colors from "../utils/Colors";
import Auth from "../utils/auth";
import "../styles/navbar.css";
import {
  HealthIcon,
  HouseIcon,
  LegalIcon,
  LogoutIcon,
  UserIcon,
  SchoolIcon,
} from "./icons";
import { Logo } from "./images";

const styles = {
  navbar: {
    backgroundColor: Colors.DARK,
  },
  link: {
    color: Colors.YELLOW,
  },
  logo: {
    innerWidth: "100px",
    innerHeight: "100px",
  },
  navdrop: {
    backgroundColor: Colors.DARK,
    color: Colors.YELLOW,
  },
};

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar style={styles.navbar} expand="md">
        <Container fluid>
          <Navbar.Brand style={styles.logo} as={Link} to="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/schools" className="nav-link">
                <SchoolIcon />
                <p>Schools</p>
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/housing">
                <HouseIcon />
                <p>Housing</p>
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/legal">
                <LegalIcon />
                <p>Legal</p>
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/healthcare">
                <HealthIcon />
                <p>Healthcare</p>
              </Nav.Link>
              {/* if user is logged in show 'Profile' and 'Logout' */}
              {/* otherwise, show 'Login/Sign Up'*/}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link className="nav-link" as={Link} to="/profile">
                    <UserIcon />
                    <p>Profile</p>
                  </Nav.Link>
                  <Nav.Link className="nav-link" onClick={Auth.logout}>
                    <LogoutIcon />
                    <p>Logout</p>
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link
                  className="nav-link"
                  onClick={() => setShowModal(true)}
                >
                  <UserIcon />
                  <p>Login/Sign Up</p>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
