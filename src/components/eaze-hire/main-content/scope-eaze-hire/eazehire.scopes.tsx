import React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';
import './scope.scss';

export const EHScopes: React.FC = () => (
  <section className="pt-5">
    <div className="eh-why-outer pt-5">
      <div className="eh-why-inner pt-5">
        <img
          alt="..."
          height="auto"
          width="100%"
          src="images/common/communicate.png"
        />
      </div>
    </div>
    <Container className="align-items-center">
      <div className="px-md-1 text-left my-lg">
        <h4 className="display-5 text-orange-eh">
          Key Features to choose<br /> EazeHire
        </h4>
      </div>
      <Row>
        <Col className="ml-auto mr-auto wenex-prod-mar-bottom pt-1" lg="6" md="10" sm="12">
          <h5 className="eh-text-on-back why-wenex-num pt-5">01</h5>
          <h4 className="pt-1 mx-5 text-wrap text-default">
            Provides regular status updates through Dashboards via messages and emails to internal &amp; external stakeholders.
          </h4>
        </Col>
        <Col className="ml-auto mr-auto wenex-prod-mar-bottom pt-5" lg="6" md="10" sm="12">
          <h5 className="eh-text-on-back why-wenex-num pt-5">02</h5>
          <h4 className="pt-1 mx-5 text-wrap text-default">
            Creates a pipeline of prospective candidates &amp; creates the best matched profile alligned to your Job Description using Artificial Intelligence
          </h4>
        </Col>
        <Col className="ml-auto mr-auto wenex-prod-mar-bottom pt-1" lg="6" md="10" sm="12">
          <h5 className="eh-text-on-back why-wenex-num pt-5">03</h5>
          <h4 className="pt-1 mx-5 text-wrap text-default">
            Automates the creation of a searchlist of candidates with their profiles ranked as per the fitment for the job requirement.
          </h4>
        </Col>
        <Col className="ml-auto mr-auto wenex-prod-mar-bottom pt-5" lg="6" md="10" sm="12">
          <h5 className="eh-text-on-back why-wenex-num pt-5">04</h5>
          <h4 className="pt-1 mx-5 text-wrap text-default">
            Feedback captured during real-time interviews can be recorded and archived for future calibration.
          </h4>
        </Col>
      </Row>
    </Container>
  </section>
);

export default EHScopes;
