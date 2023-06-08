import React from 'react';
import {
  CardImg,
  Col, Container, Row,
} from 'reactstrap';
import './why-cc.scss';

export const CCWhyCC: React.FC = () => (
  <Container className="pt-5">
    <Row className="pt-5">
      <Col lg={{ size: 5, order: 1 }} md={{ size: 6, order: 2 }} xs={{ order: 2 }} className="align-center-login-eh pt-5">
        <div className="squares-cc square5" />
        <CardImg
          alt="..."
          src="images/campusconnect/why-cc.png"
          top
        />
      </Col>
      <Col lg={{ size: 7, order: 2 }} md={{ size: 6, order: 1 }} xs={{ order: 1 }}>
        <div className="px-md- pt-5">
          <h4 className="display-5 text-orange-cc">
            Why CampusConnect
          </h4>
          <h4 className="mx-2 pt-3">
            We are the shapers of great minds and honorable values.
          </h4>
          <h5 className="mx-2 pt-3">
            <span className="text-live-session">Trainings &amp; Live Advice :</span> It will help students to build capabilities to anticipate and manage change through practical exposure.
            It will enable students to make decisions under dynamic and uncertain situations.
          </h5>
        </div>
      </Col>
    </Row>
  </Container>
);

export default CCWhyCC;
