import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Colors from "../utils/Colors";
import '../index.css';
import logo from "../assets/logo.svg";
import Auth from "../utils/auth";
import NavDropdown from "react-bootstrap/NavDropdown";

const styles = {
  navbar: {
    backgroundColor: Colors.DARK,
  },
  link: {
    color: Colors.YELLOW,
  },
  logo: {
    color: Colors.DARK_ORANGE,
  },
  button: {
    backgroundColor: Colors.DARK,
    border: "2px solid #e9c46a",
    margin: "5px",
    color: Colors.YELLOW,  
  },
  search: {
    margin: "5px",
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
      <Navbar style={styles.navbar} expand="lg">
        <Container fluid>
          <Navbar.Brand style={styles.logo} as={Link} to="/">
          <img src={logo} alt="Parent Helper Hub Logo" />
          The Parent Helper Hub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
          <Form className="d-flex">
            <Form.Control
            style={styles.search}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button style={styles.button}>Search</Button>
          </Form>
              <NavDropdown style={styles.navdrop} title="Parent Resources" id="basic-nav-dropdown">
              <NavDropdown.Item style={styles.link} as={Link} to="/schools">Schools</NavDropdown.Item>
              <NavDropdown.Item style={styles.link} as={Link} to="/housing">Housing</NavDropdown.Item>
              <NavDropdown.Item style={styles.link} as={Link} to="/legal">Legal</NavDropdown.Item>
              <NavDropdown.Item style={styles.link} as={Link} to="/Healthcare">Healthcare</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item style={styles.link} >
                Resources Coming Soon!
              </NavDropdown.Item>
            </NavDropdown>
            <Nav className="ml-auto">
              {/* <Nav.Link style={styles.link} as={Link} to="/schools">
                Schools
              </Nav.Link>
              <Nav.Link style={styles.link} as={Link} to="/housing">
                Housing
              </Nav.Link>
              <Nav.Link style={styles.link} as={Link} to="/legal">
                Legal
              </Nav.Link> */}
              {/* if user is logged in show 'Profile' and 'Logout' */}
              {/* otherwise, show 'Login/Sign Up'*/}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link style={styles.link} as={Link} to="/profile">
                    Profile
                  </Nav.Link>
                  <Nav.Link style={styles.link} onClick={Auth.logout}>
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link
                  style={styles.link}
                  onClick={() => setShowModal(true)}
                >
                  Login/Sign Up
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
