import React, { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import Auth from "../utils/auth";
// refractor to use Apollo GraphQL API instead of RESTful API
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
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
  },
};

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
    zipcode: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  // get a function 'addUser' returned by useMutation hook
  // to execute the ADD_USER mutation in the functions below
  const [addUser, { loading }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: userFormData,
      });
      Auth.login(data.addUser.token);
    } catch (err) {
      console.log(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
      zipcode: "",
    });
  };




  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>

      {/* This is needed for the validation functionality above */}
      <Form style={{ border: "8px double #264653", borderRadius: "5px", padding: "20px" }} noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label style={styles.formLabel} htmlFor="username">
            Username
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label style={styles.formLabel} htmlFor="zipcode">
            Zipcode
          </Form.Label>
          <Form.Control
            type="string"
            placeholder="Your zipcode"
            name="zipcode"
            onChange={handleInputChange}
            value={userFormData.zipcode}
            required
          />
          <Form.Control.Feedback type="invalid">
            Zipcode is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label style={styles.formLabel} htmlFor="email">
            Email
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
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
        <Container style={{ textAlign: "center" }}>
          <Button style={styles.buttonIn}
            disabled={
              !(
                userFormData.username &&
                userFormData.email &&
                userFormData.password
              )
            }
            type="submit"
          >
            Submit
          </Button>
        </Container>
      </Form>
    </>
  );
};

export default SignupForm;
