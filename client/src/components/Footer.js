import React, { useState } from "react";
import Colors from "../utils/Colors";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./Footerstyles";



  const Footer = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <Box>
            <h1 style= {{   color: Colors.DARK_ORANGE,
                            textAlign: "center",
                            marginTop: "-50px"
                            }}>
                Parent Helper Hub
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                    <Heading>About Us</Heading>
                    <FooterLink href="#">Vision</FooterLink>
                    <FooterLink href="#">Contact Us</FooterLink>
                    </Column>
                    
                    <Column>
                    <Heading>Social Media</Heading>
                    <FooterLink href="#">
                        <i className="fab fa-Facebook">
                        <span style={{ marginLeft: "10px" }}>Facebook</span>
                        </i></FooterLink>
                    <FooterLink href="#"><i className="fab fa-instagram">
                        <span style={{ marginLeft: "10px" }}>Instagram</span>
                        </i></FooterLink>
                    <FooterLink href="#"><i className="fab fa-Twitter">
                        <span style={{ marginLeft: "10px" }}>Twitter</span>
                        </i></FooterLink>
                    </Column>
                    <Column>
                    <Heading>Donations are Welcome!</Heading>
                    <FooterLink href="#">Click Here To Donate!</FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
  };
  export default Footer;