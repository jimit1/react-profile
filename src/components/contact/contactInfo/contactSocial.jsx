import React from "react";
import { Col, Row } from "react-flexbox-grid";

import GithubIcon from "../../../assets/contact/github.svg";
import LinkedInIcon from "../../../assets/contact/linkedin.svg";
import TwitterIcon from "../../../assets/contact/twitter.svg";

import "./contactSocial.scss";

const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://www.linkedin.com/in/jimmehta/" target="_blank">
            <img src={LinkedInIcon} alt="Linkedin" className="img" />
          </a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://github.com/jimit1" target="_blank">
            <img src={GithubIcon} alt="Github" className="img" />
          </a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://twitter.com/jimitmehta" target="_blank">
            <img src={TwitterIcon} alt="Twitter" className="img" />
          </a>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
