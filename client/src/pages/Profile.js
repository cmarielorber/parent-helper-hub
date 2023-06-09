import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Container, CardColumns, Jumbotron, Card } from "react-bootstrap";
import { QUERY_ME } from "../utils/queries";
import { REMOVE_SCHOOL } from "../utils/mutations";
import SingleSavedSchool from "../components/SingleSavedSchool";
import { removeSchoolId } from "../utils/localStorage";
import profileImg from "../assets/profileImg.png";
import { ProfileIcon } from "../components/icons";
import "../styles/pages.css";
import EditForm from "../components/EditForm";

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
      borderRadius: ".5rem",
      border: ".3rem solid #000",
    },
    card:{
      backgroundColor: "#f7ede2",
      border: ".5rem double #264653 ",
      borderRadius: "1rem",
    },
    cardHeader:{
      borderBottom: ".5rem double #264653 ",
      textAlign: "center",
      color: "#e76f51",
      fontSize: "1.25rem",
      fontWeight: "bold",
      fontFamily: 'Crushed, cursive',
    },
    cardBody:{
      textAlign: "start",
      color: "#e76f51",
      fontSize: "1rem",
      fontFamily: 'Crushed, sans-serif',
    },
    cardBorder:{
      borderBottom: ".2rem dotted #264653 ",
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
        <Container className="welcomeUser d-flex flex-column container" style={{ width: "60%"}}>
          <Container
            className="welcomeUser d-flex flex-column container"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
            <ProfileIcon style={styles.profileicon} />
            <Card style={{ ...styles.card,  minWidth: "300px" }}>
              <Card.Header style={styles.cardHeader} className="cardHeader">
                Welcome, {`${user.username}`}
              </Card.Header>
              <Card.Body style={styles.cardBody} className="cardBody">
                <p className="prouser" style={styles.cardBorder}>
                  {" "}
                  Username: {`${user.username}`}
                </p>
                <p style={styles.cardBorder} className="proemail">
                  {" "}
                  Email: {`${user.email}`}
                </p>
                <p style={styles.cardBorder} className="zip">
                  {" "}
                  Zipcode: {`${user.zipcode}`}
                </p>
                <Container style={{ textAlign: "center" }}>
                <EditForm /> 
                </Container>
              </Card.Body>
            </Card>
          </Container>
          
          <Container className="searchposts d-flex flex-column justify-content-center align-items-center" >
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
        </Container>
      </Jumbotron>
    </>
  );
};

export default Profile;
