import React, { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import Auth from "../utils/auth";

// refactored to use GraphQL API instead of RESTful API
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Colors from "../utils/Colors";

const styles = {
  formLabel: {
    color: Colors.DARK_ORANGE,
    fontSize: "1.5rem",
    fontFamily: "Crushed, sans-serif",
  },
  buttonIn: {
    backgroundColor: Colors.TEAL,
    borderColor: Colors.TEAL,
    alignItems: "center",
    textAlign: "center",
  },
};

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({
    username: " ",
    email: "",
    password: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // refactored to use GraphQL API instead of RESTful API
  const [login, { loading }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Form
        style={{
          border: "8px double #264653",
          borderRadius: "5px",
          padding: "20px",
        }}
        noValidate
        validated={validated}
        onSubmit={handleFormSubmit}
      >
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label style={styles.formLabel} htmlFor="email">
            Email
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label style={styles.formLabel} htmlFor="password">
            Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Container style={{textAlign: "center"}}>
          <Button
            style={styles.buttonIn}
            disabled={!(userFormData.email && userFormData.password)}
            type="submit"
          >
            Submit
          </Button>
          </Container>
        </Form.Group>
      </Form>
    </>
  );
};

export default LoginForm;
