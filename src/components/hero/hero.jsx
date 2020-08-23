import React from "react";
import { Col, Row } from "react-flexbox-grid";

//Assets
import HeroImage from "../../assets/hero/profile.jpg";
import ContactSocial from "../contact/contactInfo/contactSocial";
//Components
import Button from "../ui-components/button/button";

// SCSS
import "./hero.scss";

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">Jim Mehta</h1>
            <h4 className="weight200 font20">
              1630 BROADWAY · ALAMEDA · CA 94501 · (317) 993-2160 ·
              JIMIT1@GMAIL.COM
            </h4>
            <p className="font12">
              Experienced leader with more than 10 years of experience working
              in sales, sales development, marketing and business development
              with 2.5 years in highly technical SaaS products. Specialized in
              consultative, value-based selling and Account Based Marketing
              (ABM) strategies. Marketed & sold technical products in mid-market
              & enterprise segment. Hired, coached, managed and grew teams of
              SDR’s and BDR’s helping the team overachieve targets every
              quarter.<br></br> Highly motivated, tough negotiator with
              excellent verbal and written skills. Proven ability to handle
              full-cycle sales right from prospecting to closing. Sold technical
              SaaS products of combined value greater than $600K with ACV
              greater than $50K. Bringing creativity, complex problem-solving
              skills, entrepreneurial drive, and unceasing spirit to all
              endeavors.
            </p>
            <ContactSocial />
            {/* <Button label="SEND MESSAGE" target={"contact"} /> */}
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
