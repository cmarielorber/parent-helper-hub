import React, { useState } from "react";
import { Jumbotron, Container, Form, Col, CardColumns, Button } from "react-bootstrap";
import { stateList, levelList } from "../utils/constants";
import "../styles/pages.css";
import booksImg from "../assets/booksImg.png";
import { SchoolsType } from "../components/TypeWriter";
import SingleSchool from "../components/SingleSchool";
// import Colors from "../utils/Colors";

const styles = {
  jumbotron: {
    backgroundImage: `url(${booksImg})`,
    backgroundSize: "fill",
    backgroundPosition: "center",
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
};

function Schools() {
  const [text] = useState("Search for Schools!");

  const [formState, setFormState] = useState({
    searchCity: "",
    searchState: "CA",
    searchZip: "",
    searchLevel: "",
  });

  const [searchedSchools, setSearchedSchools] = useState([]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formatedCity = formState.searchCity.trim().replace(/ /g, "%20");

    // let apiURL = `https://cors-anywhere.herokuapp.com/https://api.schooldigger.com/v2.0/schools`;
    let apiURL = `https://api.schooldigger.com/v2.0/schools`;
    apiURL += `?st=${formState.searchState.trim()}`;
    apiURL += `&city=${formatedCity}`;
    apiURL += `&zip=${formState.searchZip.trim()}`;
    apiURL += `&level=${formState.searchLevel.trim()}`;
    apiURL += `&appID=${process.env.REACT_APP_API_ID}`;
    apiURL += `&appKey=${process.env.REACT_APP_API_KEY}`;
    console.log("***********apiURL", apiURL);

    fetch(apiURL)
      .then((response) => {
        console.log("***********response", response);
        return response.json();
      })
      .then((data) => {
        console.log("***********data", data);
        const schoolData = data.schoolList.map((school) => ({
            schoolId: school.schoolid || "",
            schoolName: school.schoolName || "",
            phone: school.phone || "",
            latitude: school.address?.latitude || "",
            longtitude: school.address?.longitude || "",
            street: school.address?.street || "",
            city: school.address?.city  || "",
            state: school.address?.state || "",
            zip: school.address?.zip || "",
            zip4: school.address?.zip4 || "",
            lowGrade: school.lowGrade || "",
            highGrade: school.highGrade || "",
            schoolLevel: school.schoolLevel || "",
            isCharterSchool: school.isCharterSchool || "",
            isMagnateSchool: school.isMagnetSchool || "",
            isVirtualSchool: school.isVirtualSchool || "",
            isTitleISchool: school.isTitleISchool || "",
            isTitleISchoolwideSchool: school.isTitleISchoolwideSchool || "",
            districtName: school.district?.districtName || "",
            rank: school.rankHistory?.[0].rank || "",
            rankOf: school.rankHistory?.[0].rankOf || "",
            rankStars: school.rankHistory?.[0].rankStars || "",
            rankStatewidePercentage: school.rankHistory?.[0]?.rankStatewidePercentage || "",
            averageStandardScore: school.rankHistory?.[0]?.averageStandardScore || "",
            numberOfStudents: school.schoolYearlyDetails?.[0]?.numberOfStudents || "",
            pupilTeacherRatio: school.schoolYearlyDetails?.[0]?.pupilTeacherRatio || "",
          }));
          setSearchedSchools(schoolData);
      })
      .catch((err) => console.error(err));
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
    <>
    <Jumbotron fluid className="jumbo pt-2" style={styles.jumbotron}>
      <Container
        className="searchresource d-flex flex-column justify-content-center align-items-center"
        style={{ width: "60%" }}
      >
        <SchoolsType text={text} />
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
              <Form.Group>
                <Form.Label>Level</Form.Label>
                <Form.Control
                  as="select"
                  name="searchLevel"
                  value={formState.searchLevel}
                  onChange={handleChange}
                  size="sm"
                >
                  {levelList.map((level) => (
                    <option key={level.id} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </Form.Control>
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
      <Container className="searchposts d-flex flex-column justify-content-center align-items-center"> SCHOOLS
      <h2>
          {searchedSchools.length
            ? `Viewing ${searchedSchools.length} results:`
            : ''}
        </h2>
        <CardColumns>
          {searchedSchools.map((school) => {
            return (
              <SingleSchool school={school} key={school.schoolId} />
            );
          })}
        </CardColumns>
      </Container>
    </Jumbotron>
    </>
  );
}

export default Schools;
