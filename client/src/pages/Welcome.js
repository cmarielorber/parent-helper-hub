import React, { useState } from "react";
import { Jumbotron, Container} from "react-bootstrap";
import "../styles/pages.css";
import welcomeImg from "../assets/welcomeImg.png";
import { Welcomeheader } from "../components/TypeWriter";
// import Popup from "../components/Popup";

const styles = {
  jumbotron: {
    backgroundImage: `url(${welcomeImg})`,
    Image: "cover",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overFlow: "hidden",
    maxHeight: "auto",
  },
  divstyle: {
    border: ".5rem dotted #264653 ",
    borderRadius: "1rem",
    margin: "1rem",
    backgroundColor: "#f7ede2",
    width: "100%",
    height: "100%",
  },
  welcomecontainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f7ede2",
    padding: "1rem 2rem",
    borderRadius: ".5rem",
    textDecoration: "bold",
    decoration: "none",
    width: "60%",
    color: "#e76f51",
  },
  welcometext: {
    display: "flex",
    justifyContent: "center",
    margin: "1rem",
    padding: "1rem 2rem",
  },
};

function Welcome() {
  const [text] = useState("Welcome to Parent Helper Hub");


  return (
    <>
    <Jumbotron fluid className="jumbo pt-2" style={styles.jumbotron}>
      <Container
        className="welcomeContainer d-flex flex-column justify-content-center align-items-center"
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
        </div>
      </Container>
    </Jumbotron>
    </>
  );
}

export default Welcome;
