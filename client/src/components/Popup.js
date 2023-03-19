import React, {useState} from "react";
import { Jumbotron, Container} from "react-bootstrap";
import "../styles/pages.css";


const styles = {
    jumbotron: {
      backgroundPosition: "center",
      overFlow: "hidden",
      width: "100%",

    },
    divstyle: {
      border: "5px dotted #264653 ",
        width: "60%",
        color: "#e76f51",
      },
    welcometext: {
        display: "flex",
        justifyContent: "center",
    }
  }

function Popup() {
    const [buttonPopup, setButtonPopup] = useState(false);

  return (
  <Jumbotron fluid className="jumbo pt-2" style={styles.jumbotron}>
      <Container className="welcomecontainer d-flex flex-column justify-content-center align-items-center" style={styles.welcomecontainer}>
    <div><button onClick={() => setButtonPopup(true)}>Contact Us</button><br /><br /></div>
    <div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Email Address:</h3>
          <p>parenthelpersupport@bhhsupport.com</p>
          <br /><br />
          <h3>Phone Number:</h3>
          <p>1-800-000-0000</p>
        </Popup>
      </div>
    </Container>
    </Jumbotron>
  )
};

export default Popup;