import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Form,
  Col,
  CardColumns,
  Button,
} from "react-bootstrap";
import { stateList, levelList } from "../utils/constants";
import "../styles/pages.css";
import booksImg from "../assets/booksImg.png";
import { SchoolsType } from "../components/TypeWriter";
import SingleSchool from "../components/SingleSchool";
import { getSavedSchoolIds, saveSchoolIds } from "../utils/localStorage";
import { SAVE_SCHOOL } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

const styles = {
  jumbotron: {
    backgroundImage: `url(${booksImg})`,
    backgroundSize: "fill",
    backgroundPosition: "center",
  },
  font:{
    fontFamily: 'Crushed, cursive',
    fontSize: "1.75rem",
  },
  fontView:{
    fontFamily: 'Crushed, cursive',
    fontSize: "1.25rem",
  },
  fontSearch:{
    fontFamily: 'Crushed, cursive',
    fontSize: ".75rem",
  },
  formstyle: {
    border: ".5rem dotted #264653 ",
    borderRadius: "1rem",
    margin: "1rem",
    backgroundColor: "#f7ede2",
    width: "100%",
  },
  buttonSearch: {
    display: "flex",
    justifyContent: "center",
  },
};

// A component that renders a form to search for schools
// and a list of schools that match the search
function Schools() {
  const [text] = useState("Search for Schools!");
  // set initial form state
  const [formState, setFormState] = useState({
    searchCity: "",
    searchState: "CA",
    searchZip: "",
    searchLevel: "",
  });
  //  set state for schools returned from API
  const [searchedSchools, setSearchedSchools] = useState([]);
  // set state to hold saved schoolId values
  const [savedSchoolIds, setSavedSchoolIds] = useState(getSavedSchoolIds());
  // set up mutation for saving a school to user's account
  const [saveSchool] = useMutation(SAVE_SCHOOL);

  // set up useEffect hook to save `savedSchoolIds` list to localStorage on component unmount
  useEffect(() => {
    return () => saveSchoolIds(savedSchoolIds);
  });

  // create handler for serach submit
  // (1) search for schools using API
  // (2) set state for schools returned from API
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

    fetch(apiURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // handle empty fields and store the school data in a new array
        const schoolData = data.schoolList.map((school) => ({
          schoolId: school.schoolid || "",
          schoolName: school.schoolName || "",
          phone: school.phone || "",
          street: school.address?.street || "",
          city: school.address?.city || "",
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
          rank: school.rankHistory?.[0].rank || null,
          rankOf: school.rankHistory?.[0].rankOf || null,
          rankStars: school.rankHistory?.[0].rankStars || null,
          rankStatewidePercentage:
            school.rankHistory?.[0]?.rankStatewidePercentage || null,
          averageStandardScore:
            school.rankHistory?.[0]?.averageStandardScore || null,
          numberOfStudents:
            school.schoolYearlyDetails?.[0]?.numberOfStudents || null,
          pupilTeacherRatio:
            school.schoolYearlyDetails?.[0]?.pupilTeacherRatio || null,
        }));
        // set the state of searched schools with the new array
        setSearchedSchools(schoolData);
      })
      .catch((err) => console.error(err));

      // reset form values after search
      setFormState({
        searchCity: "",
        searchState: "CA",
        searchZip: "",
        searchLevel: "",
    });
  };

  // create handler for setting formState based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // create function to handle saving a school to our database
  const handleSaveSchool = async (schoolId) => {
    // find the school in `searchedSchools` state by the matching id
    const schoolToSave = searchedSchools.find(
      (school) => school.schoolId === schoolId
    );
    // do nothing if user is not logged in  
    if (!Auth.loggedIn()) {
      return false;
    }
    // try to update database and localStorage
    try {
      // update database
      await saveSchool({
        variables: { ...schoolToSave },
      });
      // update localStorage
      setSavedSchoolIds([...savedSchoolIds, schoolToSave.schoolId]);
    } catch (err) {
      console.error(err);
    }
  };

  // render JSX
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
        <Container
          className="searchposts d-flex flex-column align-items-center"
          style={styles.font}
        >
          {" "}
          SCHOOLS
          <h2 style={styles.fontView}>
            {searchedSchools.length
              ? `Viewing ${searchedSchools.length} results:`
              : ""}
          </h2>
          <CardColumns style={styles.fontSearch}>
            {searchedSchools.map((school) => {
              return (
                <SingleSchool
                  school={school}
                  key={school.schoolId}
                  handleSaveSchool={handleSaveSchool}
                  savedSchoolIds={savedSchoolIds}
                />
              );
            })}
          </CardColumns>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Schools;
