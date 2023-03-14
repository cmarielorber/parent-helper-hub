import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Colors from "../utils/Colors";
import logo2 from "../assets/logo2.svg";
import healthIcon from "../assets/healthIcon.svg";
import houseIcon from "../assets/houseIcon.svg";
import userIcon from "../assets/userIcon.svg";
import legalIcon from "../assets/legalIcon.svg";

import Auth from "../utils/auth";
import "../styles/navbar.css";

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
            <img id="logo2" src={logo2} alt="Parent Helper Hub Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              <Nav.Link 
              //  style={styles.link}
                as={Link}
                to="/schools"
                className="nav-link"
                >
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                <p> Schools</p>
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/housing">
              <img src={houseIcon} alt="house icon" />
              <p> Housing</p>
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/legal">
              <img src={legalIcon} alt="legal icon" />
              <p> Legal</p>
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/healthcare">
              <img src={healthIcon} alt="healthcare icon" />
              <p>Healthcare</p>
              </Nav.Link>
              {/* if user is logged in show 'Profile' and 'Logout' */}
              {/* otherwise, show 'Login/Sign Up'*/}
              {Auth.loggedIn() ? (
                <>
                <img src={userIcon} alt="user icon" />
                  <Nav.Link className="nav-link" as={Link} to="/profile">
                    Profile
                  </Nav.Link>
                  <Nav.Link className="nav-link"  onClick={Auth.logout}>
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link
                  className="nav-link" 
                  onClick={() => setShowModal(true)}
                >
                  <img src={userIcon} alt="user icon" />
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