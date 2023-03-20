import React, { useState } from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./Footerstyles";
import "../styles/pages.css";
import { GithubIcon } from "./icons";

const Footer = () => {

  return (
    <Box>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </Column>

          <Column>
            <FooterLink href="https://github.com/cmarielorber/parent-helper-hub/" style={{ display: "inline-block" }}>
            <GithubIcon />
            </FooterLink>
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
