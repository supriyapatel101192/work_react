import React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';
import './scope.scss';

export const CCScopes: React.FC = () => (
  <section className="pt-5 margin-bottom-cc-scope">
    <div className="cc-why-outer pt-5">
      <div className="cc-why-inner pt-5">
        <img
          alt="..."
          height="auto"
          width="100%"
          src="images/campusconnect/key-feature-cc.png"
        />
      </div>
    </div>
    <Container className="align-items-center my-3">
      <div className="px-md-1 text-left my-lg">
        <h4 className="display-5 text-orange-cc">
          Key Features to choose<br /> CampusConnect
        </h4>
      </div>
      <Row>
        <Col className="ml-auto mr-auto wenex-prod-mar-bottom pt-1" lg="10" md="10" sm="12">
          <h5 className="cc-text-on-back why-wenex-num pt-5">Placements Procedure</h5>
          <h4 className="pt-1 mx-5 text-wrap text-default">
            Employers from the pool of clients from varied industry sectors on the platform are invited for online candidate assessments.
          </h4>
        </Col>
        <Col className="ml-auto mr-auto wenex-prod-mar-bottom pt-5" lg="10" md="10" sm="12">
          <h5 className="cc-text-on-back why-wenex-num pt-5">Interview Procedure</h5>
          <h4 className="pt-1 mx-5 text-wrap text-default">
            Further rounds like personal interviews, technical screenings, psychometric tests, etc. are conducted to filter out the best-suited candidates.
          </h4>
        </Col>
      </Row>
    </Container>
  </section>
);

export default CCScopes;
