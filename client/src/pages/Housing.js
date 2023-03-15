import React, { useEffect, useState } from "react";
import { Jumbotron, Container, Form, Col, Button } from "react-bootstrap";
import { stateList } from "../utils/constants";
import "../styles/pages.css";
import housesImg from "../assets/housesImg.png";
import { HouseType } from "../components/TypeWriter";
// import Colors from "../utils/Colors";

const styles = {
  jumbotron: {
    backgroundImage: `url(${housesImg})`,
    Image: "cover",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overFlow: "hidden",
  },
  formstyle: {
    border: "5px dotted #264653 ",
    borderRadius: "10px",
    margin: "10px",
    backgroundColor: "#f7ede2",
    width: "100%",
  },
  buttonSearch: {
    display: "flex",
    justifyContent: "center",
  },
  resourceLink: {
    backgroundColor: "#e76f51",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "bold",
    margin: "10px",
    decoration: "none",
  },
};

function Housing() {
  const [text] = useState("Search for Housing Programs");

  const [formState, setFormState] = useState({
    searchCity: "",
    searchState: "CA",
    searchZip: "",
    searchLevel: "",
  });

  useEffect(() => {}, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setFormState({
      searchCity: "",
      searchState: "",
      searchZip: "",
      searchLevel: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Jumbotron fluid className="jumbo pt-2" style={styles.jumbotron}>
      <Container
        className="searchschool d-flex flex-column justify-content-center align-items-center"
        style={{ width: "60%" }}
      >
        <HouseType text={text} />
        <Form
          className="searchform"
          style={styles.formstyle}
          onSubmit={handleFormSubmit}
        >
          <Form.Row className="formRow">
            <Col sm={12} md={12}>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="searchCity"
                  value={formState.searchCity}
                  onChange={handleChange}
                  type="text"
                  size="sm"
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col xs={12} md={6}>
              <Form.Group>
                <Form.Label>State</Form.Label>
                <Form.Control
                  as="select"
                  name="searchState"
                  value={formState.searchState}
                  onChange={handleChange}
                  size="sm"
                >
                  {stateList.map((usState) => (
                    <option key={usState.id} value={usState.value}>
                      {usState.label}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group>
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  name="searchZip"
                  value={formState.searchZip}
                  onChange={handleChange}
                  type="text"
                  size="sm"
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col xs={12} md={12}>
              <Form.Group style={styles.buttonSearch}>
                <Button className="searchButton" type="submit" size="md">
                  Submit Search
                </Button>
              </Form.Group>
            </Col>
          </Form.Row>
        </Form>
      </Container>
      <Container className=" schoolposts d-flex flex-column justify-content-center align-items-center">
        <h2>Check back soon for a list of housing resources in your area.</h2>
        <a
          href="https://www.cdss.ca.gov/benefits-services/more-services/housing-programs"
          style={styles.resourceLink}
        >
          Click for Housing Resource
        </a>{" "}
      </Container>
    </Jumbotron>
  );
}

export default Housing;
