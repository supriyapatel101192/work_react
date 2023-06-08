import React from 'react';
import {
  CardImg,
  Col,
  Container, Row,
} from 'reactstrap';
import './know-cc.scss';

export const KnowEazeHire: React.FC = () => (
  <Container className="know-cc-bg">
    <div className="squares-cc square3" />
    <div className="squares-cc square2" />
    <Row className="justify-content-between align-items-center text-left">
      <Col lg="7" md="6">
        <h4 className="display-4 text-aqua-cc mx-2">
          Get Exposure{' '} <br />
          <span className="display-3 text-aqua-cc ">to Industry</span>
        </h4>
        <h4 className=" mx-1 text-wrap pt-3 text-white-cc">
          CampusConnect program will groom future leaders, for tomorrow who will be value-driven individuals with a deep passion for humanity.
        </h4>
      </Col>
      <Col lg="5" md="6">
        <CardImg
          alt="..."
          style={{ opacity: '.90' }}
          src="images/campusconnect/know-cc.png"
          className="pt-4"
          top
        />
      </Col>
    </Row>
  </Container>
);

export default KnowEazeHire;
