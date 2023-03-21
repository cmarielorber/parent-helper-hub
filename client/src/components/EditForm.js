import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
// import { Form, Button, Alert } from "react-bootstrap";
import Auth from "../utils/auth";
// refractor to use Apollo GraphQL API instead of RESTful API
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_USER, SAVE_USER } from "../utils/mutations";
import { saveUserId } from "../utils/localStorage";
import Colors from "../utils/Colors";
import { QUERY_ME } from "../utils/queries";
// import { QUERY_USER, QUERY_ME } from '../utils/queries';
// create QUERY for child

// lines 12-15 testing -
// import React, { useState, useEffect } from 'react';
// import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
// import { saveEditFormIds, getEditFormIds } from '../utils/localStorage';
// import {SAVE_USER} from '../utils/mutations';


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


const EditForm = () => {
  
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    email: "",
    zipcode: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const { loading, data } = useQuery(QUERY_ME);

  const [show, setShow] = useState(false);
  // const [savedUserIds, setSavedUserIds] = useState(getSavedUserIds());
  const [saveUser] = useMutation(SAVE_USER);
  // get a function 'addUser' returned by useMutation hook
  // to execute the ADD_USER mutation in the functions below
  // const [addUser, { loading }] = useMutation(ADD_USER);

  if (loading) {
    return <div>Loading...</div>;
    
  }

  const user = data?.me || {};

  console.log(user)


  // async function handleUpdateForm(email, zipcode) {

  //   try {
  //     await saveUser({
  //       variables: {
  //         email: email,
  //         zipcode: zipcode,
          
  //       }
  //     });

  //   } catch (err) {
  //     console.error(err);
  //   }
  // }


  // keep this code lines 33-37
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleShow = () => setShow(true);
  const  handleSave = async () => {
    setShow(false);
    // save edit input to database
    try {
      console.log("user input:", userFormData);
      const { data } = await saveUser({
        variables: userFormData,
      });
      //Auth.login(data.saveUser.token);
    } catch (err) {
      console.log(err);
      setShow(true);
    }

    setUserFormData({
      email: "",
      zipcode: "",
    });
    
    // save user input in database
  }
  const handleClose = () => setShow(false);


  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   // check if form has everything (as per react-bootstrap docs)
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   try {
  //     const { data } = await saveUser({
  //       variables: userFormData,
  //     });
  //     Auth.login(data.saveUser.token);
  //   } catch (err) {
  //     console.log(err);
  //     setShow(true);
  //   }

  //   setUserFormData({
  //     username: "",
  //     email: "",
  //     password: "",
  //     zipcode: "",
  //   });
  // };

 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (

    <>
      <div

      >
        <Button style={styles.buttonIn} variant="primary" onClick={handleShow}>
          Edit Profile
        </Button>
        <Modal
          show={show}
          onHide={handleClose}

        >
          <Modal.Dialog show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                {" "}
                Update items that need to be edited, ensure to hit 'Save Changes'
              </p>
              <Form.Group>
                <Form.Label style={styles.formLabel} htmlFor="zipcode"> Update Zipcode</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Your zipcode"
                  name="zipcode"
                  onChange={handleInputChange}
                  value={userFormData.zipcode}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label style={styles.formLabel} htmlFor="email">Change Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your email address"
                  name="email"
                  onChange={handleInputChange}
                  value={userFormData.email}
                  required
                />
              </Form.Group>

            </Modal.Body>

            <Modal.Footer>
              {/* 
 // create state to hold saved saveUserId values */}

              <Button
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>

              <Button style={styles.buttonIn}
                variant="primary"
                onClick={() => handleSave()}
                
              >

                Save changes
              </Button>


            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    </>
  );

  // return (
  //   <>
  //     {/* This is needed for the validation functionality above */}
  //     <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
  //       {/* show alert if server response is bad */}
  //       <Alert
  //         dismissible
  //         onClose={() => setShowAlert(false)}
  //         show={showAlert}
  //         variant="danger"
  //       >
  //         Something went wrong with your signup!
  //       </Alert>

  //       <Form.Group>
  //         <Form.Label htmlFor="username">Username</Form.Label>
  //         <Form.Control
  //           type="text"
  //           placeholder="Your username"
  //           name="username"
  //           onChange={handleInputChange}
  //           value={userFormData.username}
  //           required
  //         />
  //         <Form.Control.Feedback type="invalid">
  //           Username is required!
  //         </Form.Control.Feedback>
  //       </Form.Group>
  //       <Form.Group>
  //         <Form.Label htmlFor="ageGroup">
  //           Child's Age Group
  //         </Form.Label>
  //         <Form.Control i
  //           id="ageGroup"
  //           as="select"
  //           type='string'
  //           placeholder='Child Age Group'
  //           name='ageGroup'
  //           onChange={handleInputChange}
  //           value={userFormData.ageGroup}
  //           required
  //         >
  //          <option value="0-5">0-5</option>
  //          <option value="6-18">6-18</option>
  //          <option value="18+">18+</option>
  //         </Form.Control>
  //       </Form.Group>
  //       <Form.Group>
  //         <Form.Label htmlFor="childCount">
  //           Number of Children
  //         </Form.Label>
  //         <Form.Control i

  //           id="childCount"

  //           as="select"
  //           type='number'
  //           placeholder='Number of Children'
  //           name='childCount'
  //           onChange={handleInputChange}
  //           value={userFormData.childCount}
  //           required
  //         >
  //          <option value="1">1</option>
  //          <option value="2">2</option>
  //          <option value="3">3</option>
  //          <option value="4">4</option>
  //          <option value="5">5</option>
  //          <option value="6">6</option>
  //          <option value="7">7</option>
  //         </Form.Control>
  //       </Form.Group>
  //       <Form.Group>
  //         <Form.Label htmlFor="child">Child's Full Name</Form.Label>
  //         {
  //           renderNameForm()
  //         }
  //       </Form.Group>
  //       <Form.Label htmlFor="zipcode">Zipcode</Form.Label>
  //       <Form.Control
  //         type="string"
  //         placeholder="Your zipcode"
  //         name="zipcode"
  //         onChange={handleInputChange}
  //         value={userFormData.zipcode}
  //         required
  //       />

  //       <Form.Group>
  //         <Form.Label htmlFor="email">Email</Form.Label>
  //         <Form.Control
  //           type="email"
  //           placeholder="Your email address"
  //           name="email"
  //           onChange={handleInputChange}
  //           value={userFormData.email}
  //           required
  //         />
  //         <Form.Control.Feedback type="invalid">
  //           Email is required!
  //         </Form.Control.Feedback>
  //       </Form.Group>

  //       <Form.Group>
  //         <Form.Label htmlFor="password">Password</Form.Label>
  //         <Form.Control
  //           type="password"
  //           placeholder="Your password"
  //           name="password"
  //           onChange={handleInputChange}
  //           value={userFormData.password}
  //           required
  //         />
  //         <Form.Control.Feedback type="invalid">
  //           Password is required!
  //         </Form.Control.Feedback>
  //       </Form.Group>
  //       <Button
  //         disabled={
  //           !(
  //             userFormData.username &&
  //             userFormData.email &&
  //             userFormData.password
  //           )
  //         }
  //         type="submit"
  //         variant="success"
  //       >
  //         Submit
  //       </Button>
  //     </Form>
  //   </>
  // );
};

export default EditForm;
