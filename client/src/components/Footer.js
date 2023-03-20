import { Container, Row, Col } from "react-bootstrap";
import "../styles/pages.css";
import DonationForm from "./Donation";
import { GithubIcon } from "./icons";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Our Team</h5>
            <div className="team">
              <div className="team-member">
                <a className="githublink" href="https://github.com/hannybear88">
                  <p className="first-name">Hannah</p>
                  <p className="last-name">Chung</p>
                </a>
              </div>
              <div className="team-member">
                <a className="githublink" href="https://github.com/TrianaD">
                  <p className="first-name">Triana</p>
                  <p className="last-name">Deguzman</p>
                </a>
              </div>
              <div className="team-member">
                <a className="githublink" href="https://github.com/cmarielorber">
                  <p className="first-name">Christen</p>
                  <p className="last-name">Lorber</p>
                </a>
              </div>
              <div className="team-member">
                <a className="githublink" href="https://github.com/fmaldmed">
                  <p className="first-name">Fernando</p>
                  <p className="last-name">Maldonado</p>
                </a>
              </div>
              <div className="team-member">
                <a className="githublink" href="https://github.com/heidiwu3388">
                  <p className="first-name">Heidi</p>
                  <p className="last-name">Wu</p>
                </a>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <h5>Connect</h5>
            <a href="https://github.com/cmarielorber/">
              <GithubIcon className="github-icon" />
            </a>
          </Col>
          <Col md={4}>
            <h5>Donations Accepted</h5>
            <DonationForm />
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col>
              <p>© 2023 Parent Helper Hub</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
