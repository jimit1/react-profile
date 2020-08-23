import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from "./teamBox";
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/person01.png";
import Person02 from "../../assets/about/person02.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="EDUCATION & SKILLS" />
      <p className="font12">
        Skilled in ABM, Marketing, Sales, Entrepreneurship, Javascript and
        Organic Chemistry
      </p>
      <Row>
        <Col md={12} lg={4}>
          <TeamBox
            avatar={Person01}
            name="UC BERKELEY EXTENSION"
            job="Computer Science Engineering"
          />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox
            avatar={Person02}
            name="VIRGINIA TECH"
            job="MS, Organic Chemistry
"
          />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
