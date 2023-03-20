import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Container, CardColumns, Jumbotron, Card } from "react-bootstrap";
import { QUERY_ME } from "../utils/queries";
import { REMOVE_SCHOOL } from "../utils/mutations";
import SingleSavedSchool from "../components/SingleSavedSchool";
import { removeSchoolId } from "../utils/localStorage";
import profileImg from "../assets/profileImg.png";
import {
  UserIcon,
} from "../components/icons";
import "../styles/pages.css";

const styles = {
    bg: {
      backgroundImage: `url(${profileImg}`,
      Image: "cover",
      backgroundSize: "cover",
      backgroundPosition: "center",
      overFlow: "hidden",
    },
    profileicon: {
      width: 150,
      height: 150,
      borderRadius: "50%",
      border: "3px solid #000",
    },
    card:{
      backgroundColor: "#f7ede2",
      border: "5px double #264653 ",
      borderRadius: "10px",
    },
    cardHeader:{
      borderBottom: "5px double #264653 ",
      textAlign: "center",
      color: "#e76f51",
      fontSize: "25px",
      fontWeight: "bold",
      fontFamily: 'Crushed, cursive',
    },
    cardBody:{
      textAlign: "start",
      color: "#e76f51",
      fontSize: "20px",
      fontFamily: 'Crushed, sans-serif',
    },
    cardBorder:{
      borderBottom: "2px dotted #264653 ",
    }
  };

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const [removeSchool] = useMutation(REMOVE_SCHOOL);
  const user = data?.me || {};

  async function handleDeleteSchool(schoolId) {
    try {
      await removeSchool({
        variables: { schoolId: schoolId },
      });
      removeSchoolId(schoolId);
    } catch (err) {
      console.error(err);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Jumbotron fluid className="jumbo pt-2" style={styles.bg}>
        <Container 
        className="welcomeUser d-flex flex-column justify-content-center align-items-center">  </Container>
         <UserIcon style={styles.profileicon}/>
         <Card style={{ width: "25%", ...styles.card }}>
            <Card.Header  style={styles.cardHeader}className="cardHeader">Welcome, {`${user.username}`}</Card.Header>
            <Card.Body style={styles.cardBody}className="cardBody">
            <p className="prouser" style={styles.cardBorder}> Username: {`${user.username}`}</p>
            <p style={styles.cardBorder} className="proemail"> Email: {`${user.email}`}</p>
            <p style={styles.cardBorder} className="childnum"> Number of Children: {`${user.childCount}`}</p>
            <p style={styles.cardBorder} className="zip"> Zipcode: {`${user.zipcode}`}</p>
            </Card.Body>
          </Card>
     
        <Container className="searchposts d-flex flex-column justify-content-center align-items-center ml-auto">
          {`${user.username}'s`} SCHOOLS
          <CardColumns>
            {user.savedSchools.map((school) => {
              return (
                <SingleSavedSchool
                  school={school}
                  key={school.schoolId}
                  handleDeleteSchool={handleDeleteSchool}
                />
              );
            })}
          </CardColumns>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Profile;
