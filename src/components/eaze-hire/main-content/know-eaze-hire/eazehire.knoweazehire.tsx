import React from 'react';
import {
  CardImg,
  Col,
  Container, Row,
} from 'reactstrap';
import './know-eaze.scss';

export const KnowEazeHire: React.FC = () => (
  <Container>
    <div className="squares-eh square3" />
    <div className="squares-eh square2" />
    <Row className="justify-content-between align-items-center text-left">
      <Col lg="7" md="6">
        <h4 className="display-4 text-orange-eh">
          HIRE Faster{' '} <br />
          <span className="display-3 text-orange-eh">hire better</span>
        </h4>
        <h2 className=" mx-0 text-wrap pt-3">
          EazeHire is an intelligent technology platform which is transforming the way talent hiring happens in India,
          eliminating the time lags and adding science to the art of recruitment.
        </h2>
      </Col>
      <Col lg="5" md="6">
        <CardImg
          alt="..."
          style={{ opacity: '.90', width: '80%' }}
          src="images/common/filter-AI.png"
          top
        />
      </Col>
    </Row>
  </Container>
);

export default KnowEazeHire;
