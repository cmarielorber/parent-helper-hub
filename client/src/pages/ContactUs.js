import React, { useEffect, useState } from "react";
import { Jumbotron, Container, Form, Col, Button } from "react-bootstrap";
import { stateList } from "../utils/constants";
import "../styles/pages.css";
import { ContactUstype } from "../components/TypeWriter";
import {
    Heading,
  } from "../components/Footerstyles";

const styles = {
    jumbotron: {
      backgroundImage: `url(${Welcomehands})`,
      Image: "cover",
      backgroundSize: "cover",
      backgroundPosition: "center",
      overFlow: "hidden",
      width: "100%",
    },
    divstyle: {
      border: "5px dotted #264653 ",
      borderRadius: "10px",
      margin: "10px",
      backgroundColor: "#f7ede2",
      width: "100%",
    },
    welcomecontainer: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f7ede2",
        padding: "10px 20px",
        borderRadius: "5px",
        textDecoration: "bold",
        margin: "auto",
        decoration: "none",
        width: "60%",
        color: "#e76f51",
      },
    welcometext: {
        display: "flex",
        justifyContent: "center",
        margin: "10px",
        padding: "10px 20px"
    }
  };

  function ContactUs() {
    const [text] = useState("Need to contact us?");
  return (
    <Jumbotron fluid className="jumbo pt-2" style={styles.jumbotron}>
    <container className="welcomecontainer d-flex flex-column justify-content-center align-items-center" style={styles.welcomecontainer}>
        <div 
        className="welcomediv d-flex flex-column justify-content-center align-items-center"
        style={styles.divstyle}
        >
            <ContactUstype text={text} />
            <div className="welcometext d-flex flex-column justify-content-center align-items-center"
            style={styles.welcometext}>
                <Heading></Heading>
            
            </div>
        </div>
    </container>
    </Jumbotron>
  );
}

export default Welcome;
