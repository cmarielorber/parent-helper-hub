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
  
  const [saveUser] = useMutation(SAVE_USER);
  // get a function 'addUser' returned by useMutation hook
  // to execute the ADD_USER mutation in the functions below
  // const [addUser, { loading }] = useMutation(ADD_USER);

  if (loading) {
    return <div>Loading...</div>;
    
  }

  const user = data?.me || {};

  console.log(user)



  // keep this code lines 33-37
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleShow = () => setShow(true);

  // ==== FUTURE ENHANCEMENT ====//
  // const  handleSave = async () => {
  //   setShow(false);
  //   // save edit input to database
  //   try {
  //     console.log("user input:", userFormData);
  //     const { data } = await saveUser({
  //       variables: userFormData,
  //     });
  //     //Auth.login(data.saveUser.token);
  //   } catch (err) {
  //     console.log(err);
  //     setShow(true);
  //   }

  //   setUserFormData({
  //     email: "",
  //     zipcode: "",
  //   });
    
  // save user input in database
  
  const handleClose = () => setShow(false);


 

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
                onClick={() => handleClose()}
                
              >

                Save changes
              </Button>


            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    </>
  );

 
};

export default EditForm;
