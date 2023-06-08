import React from 'react';
import {
  Col, Container, Row,
} from 'reactstrap';
import './about-me.scss';

export const AboutMe: React.FC = () => (
  <Container>
    <Row>
      <Col lg="12" className="ww-abtme-title">
        About Me
      </Col>
      <Col lg="12" className="ww-abtme-content">
        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence was created for the bliss of souls like mine.I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.

        A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.
      </Col>
    </Row>
    <Row>
      <Col lg="12" className="ww-abtme-title">
        Skills
      </Col>
      <Col lg="12" className="ww-skill-margin">
        <span className="ww-abtme-skils">Java</span>
        <span className="ww-abtme-skils">React</span>
        <span className="ww-abtme-skils">AWS</span>
        <span className="ww-abtme-skils">Kubernetes</span>
        <span className="ww-abtme-skils">Jenkins</span>
      </Col>
    </Row>

    <Row className="ww-shared-posts">
      <Col lg="12" className="ww-abtme-title">
        Language
      </Col>
      <Col lg="2" className="ww-abtme-content">
        English
      </Col>
      <Col lg="2" className="ww-abtme-content">
        French
      </Col>
      <Col lg="2" className="ww-abtme-content">
        Hindi
      </Col>
    </Row>
    <Row className="ww-shared-posts">
      <Col lg="12" className="ww-abtme-title">
        Personal Information
      </Col>
      <Col lg="3" className="ww-abtme-pi">
        <Row>
          <Col lg="12">
            Name
          </Col>
          <Col lg="12">
            Email
          </Col>
          <Col lg="12">
            Availability
          </Col>
          <Col lg="12">
            Age
          </Col>
          <Col lg="12">
            Location
          </Col>
          <Col lg="12">
            Year Experience
          </Col>
        </Row>
      </Col>
      <Col lg="1" className="ww-abtme-pi">
        <Row>
          <Col lg="12">
            :
          </Col>
          <Col lg="12">
            :
          </Col>
          <Col lg="12">
            :
          </Col>
          <Col lg="12">
            :
          </Col>
          <Col lg="12">
            :
          </Col>
          <Col lg="12">
            :
          </Col>
        </Row>
      </Col>
      <Col className="ww-abtme-content">
        <Row>
          <Col lg="12">
            Mitchell C.Shay
          </Col>
          <Col lg="12">
            example@examplel.com
          </Col>
          <Col lg="12">
            Full Time (Free Lancer)
          </Col>
          <Col lg="12">
            28
          </Col>
          <Col lg="12">
            MiddleTown Avenue, California
          </Col>
          <Col lg="12">
            5 Year Experiences
          </Col>
        </Row>
      </Col>
    </Row>

  </Container>
);
