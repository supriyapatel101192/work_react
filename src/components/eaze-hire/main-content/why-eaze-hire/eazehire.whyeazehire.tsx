import React from 'react';
import {
  CardImg,
  Col, Container, Row,
} from 'reactstrap';
import './why-eaze.scss';

export const WhyEazeHire: React.FC = () => (
  <Container className="pt-5">
    <Row className="pt-5">
      <Col lg={{ size: 5, order: 1 }} md={{ size: 6, order: 2 }} xs={{ order: 2 }} className="align-center-login-eh pt-5">
        <div className="squares-eh square5" />
        <CardImg
          alt="..."
          src="images/eazehire/why-eh.png"
          top
        />
      </Col>
      <Col lg={{ size: 7, order: 2 }} md={{ size: 6, order: 1 }} xs={{ order: 1 }}>
        <div className="px-md-5">
          <h4 className="display-4 text-orange-eh">
            Why EazeHire
          </h4>
          <h3 className="mx-2 pt-3">
            EazeHire is our cloud-based intelligent recruitment software with augmented
            intelligence to hire faster and hire better. The platform aims to remove human
            bias and provide the best matched skilled profiles for every open opportunity.
          </h3>
        </div>
      </Col>
    </Row>
  </Container>
);

export default WhyEazeHire;
