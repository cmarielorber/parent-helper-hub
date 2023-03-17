import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Auth from "../utils/auth";
// refractor to use Apollo GraphQL API instead of RESTful API
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
    childCount: 1,
    // child: [],
    zipcode: "",
    // ageGroup: ""
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

  const handleChildNameChange = (event) => {
    const index = event.target.id.split("-")[1];

    const newChild = event.target.value;

    let currentChild = userFormData.child;

    currentChild[index] = newChild;

    setUserFormData({ ...userFormData, child: currentChild });
  }

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
      childCount: 1,
      // child: [],
      zipcode: "",
      // ageGroup: ""
    });
  };

  // function renderNameForm () {
  //   console.log(userFormData.childCount)
  //   return (
  //     <>
  //       {
  //         Array.from({ length: userFormData.childCount }).map((child, index) => {
  //           return <Form.Control
  //           type="string"
  //           placeholder={`Child #${index+1} Full Name`}
  //           name="child"
  //           onChange={handleChildNameChange}
  //           value={userFormData.child[index]}
  //           id={`child-${index}`}
           
  //         />
  //         })
  //       }

  //       </>
  //   )
  // }
  //   function renderAgeGroupForm () {
  //   console.log(userFormData.childCount)
  //   return (
  //     <>
  //       {
  //         Array.from({ length: userFormData.childCount }).map((ageGroup, index) => {
  //           return <Form.Control 
  //           id={`child-${index}`}
  //           as="select"
  //           type='string'
  //           placeholder={`Child #${index+1} Age Group`}
  //           name='ageGroup'
            // onChange={handleInputChange}
            // value={userFormData.child[index]}
//             value={userFormData.ageGroup[index]}
//           >
//            <option value="0-5">0-5</option>
//            <option value="6-18">6-18</option>
//            <option value="18+">18+</option>
//           </Form.Control>
//           }
//     )
//   }

//   </>
//     )
// }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
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
          <Form.Label htmlFor="username">Username</Form.Label>
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
          <Form.Label htmlFor="childCount">
            Number of Children
          </Form.Label>
          <Form.Control i
            // id="childCount" 
            as="select"
            type='number'
            placeholder='Number of Children'
            name='childCount'
            onChange={handleInputChange}
            value={userFormData.childCount}
           
          >
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
           <option value="6">6</option>
           <option value="7">7</option>
          </Form.Control>
        </Form.Group>
        {/* <Form.Group>
          <Form.Label htmlFor="child">Child's Full Name</Form.Label>
          {
            renderNameForm()
          }
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="ageGroup">
            Child's Age Group
          </Form.Label>
           {
            renderAgeGroupForm()
          }
        </Form.Group> */}


        <Form.Label htmlFor="zipcode">Zipcode</Form.Label>
        <Form.Control
          type="string"
          placeholder="Your zipcode"
          name="zipcode"
          onChange={handleInputChange}
          value={userFormData.zipcode}
          required
        />

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
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
          <Form.Label htmlFor="password">Password</Form.Label>
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
        <Button
          disabled={
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password 
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;