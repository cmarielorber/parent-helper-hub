import React, { useEffect, useState } from "react";
import { Jumbotron, Container, Form, Col, Button } from "react-bootstrap";
import { stateList } from "../utils/constants";
import "../styles/pages.css";
import welcomeImg from "../assets/welcomeImg.png";
import { Welcomeheader } from "../components/TypeWriter";
import Popup from "../components/Popup";

const styles = {
  jumbotron: {
    backgroundImage: `url(${welcomeImg})`,
    Image: "cover",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overFlow: "hidden",
  },
  divstyle: {
    border: "5px dotted #264653 ",
    borderRadius: "10px",
    margin: "10px",
    backgroundColor: "#f7ede2",
    width: "100%",
    height: "100%",
  },
  welcomecontainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f7ede2",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "bold",
    decoration: "none",
    width: "60%",
    color: "#e76f51",
  },
  welcometext: {
    display: "flex",
    justifyContent: "center",
    margin: "10px",
    padding: "10px 20px",
  },
};

function Welcome() {
  const [text] = useState("Welcome to Parent Helper Hub");
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <Jumbotron fluid className="jumbo pt-2" style={styles.jumbotron}>
      <Container
        className="welcomecontainer d-flex flex-column justify-content-center align-items-center"
        style={styles.welcomecontainer}
      >
        <div
          className="welcomediv d-flex flex-column justify-content-center align-items-center"
          style={styles.divstyle}
        >
          <Welcomeheader text={text} />
          <div
            className="welcometext d-flex flex-column justify-content-center align-items-center"
            style={styles.welcometext}
          >
            <p>
              This project began with a newly single parent suddenly having to
              fend for themselves.
            </p>
            <p>
              Often times after a separation, divorce, or tragic passing,
              parents are faced with a sudden
            </p>
            <p>struggle to identify what resources are available to them. </p>
            <p>
              Parent Helper Hub sees that need and lends a hand and space for
              our parent community.
            </p>
            <p> The Hub offers resources such as: </p>
            <p>
              {" "}
              <li>Schools</li>
              <li>Housing</li>
              <li>Legal</li>
              <li>Healthcare</li>
            </p>
          </div>
          <div>
          <button onClick={() => setButtonPopup(true)}>Contact Us</button>
            <br/><br/>
            <div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3>Email Address:</h3>
                <p>parenthelpersupport@bhhsupport.com</p>
                <br/><br/>
              <h3>Phone Number:</h3>
                <p>1-800-000-0000</p>
            </Popup>
            </div>
            </div>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default Welcome;
