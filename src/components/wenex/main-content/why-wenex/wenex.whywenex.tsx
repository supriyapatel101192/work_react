import React from 'react';
import {
  Col,
  Container, Row,
} from 'reactstrap';
import './why-wenex.scss';

export const WenexWhyWenex: React.FC = () => (
  <Container className="text-white why-wenex-bg">
    <div className="align-why-wenex-center">
      <h2 className="text-profile-header pt-5">
        Why WeNexCorp
      </h2>
    </div>
    <Row className="pt-5 mx-3">
      <Col lg="6" md="6" className="pt-3">
        <div className="align-why-wenex-center">
          <h5 className="text-on-back-about-01 why-wenex-num-about">01</h5>
        </div>
        <h4 className="text-why-wenex-grey">Easy and accurate <span className="text-why-wnx-01">candidate search</span></h4>
        <h5 className="text-why-wenex-grey pt-3">
          The purpose of the platform is to empower <span className="text-heading">Hiring Manager</span> to make selection decisions
          faster and more reliably, without personal bias and along with the use of video and
          mobile technology.
        </h5>
      </Col>
      <Col lg="6" md="6" className="pt-3">
        <div className="align-why-wenex-center">
          <h5 className="text-on-back-about-02 why-wenex-num-about">02</h5>
        </div>
        <h4 className="text-why-wenex-grey">Structured and fast <span className="text-why-wnx-02">interview process</span></h4>
        <h5 className="text-why-wenex-grey pt-3">
          Using our platform, schedule and conduct high-quality live &amp; recorded interviews
          to assess and make the right hiring decisions.
        </h5>
      </Col>
      <Col lg="6" md="6" className="pt-3">
        <div className="align-why-wenex-center">
          <h5 className="text-on-back-about-03 why-wenex-num-about">03</h5>
        </div>
        <h4 className="text-why-wenex-grey">Transparent <span className="text-why-wnx-03">hiring process</span></h4>
        <h5 className="text-why-wenex-grey pt-3">
          We provide a collaborative, data-driven, and unbiased hiring process to
          hire the right candidate for the right job
        </h5>
      </Col>
      <Col lg="6" md="6" className="pt-3">
        <div className="align-why-wenex-center">
          <h5 className="text-on-back-about-04 why-wenex-num-about">04</h5>
        </div>
        <h4 className="text-why-wenex-grey">Unrivalled <span className="text-why-wnx-04">cost advantage</span></h4>
        <h5 className="text-why-wenex-grey pt-3">
          We reduce the hiring cost by more than 50% using human-machine collaboration.
        </h5>
      </Col>
      <Col lg="6" md="6" className="pt-3">
        <div className="align-why-wenex-center">
          <h5 className="text-on-back-about-05 why-wenex-num-about">05</h5>
        </div>
        <h4 className="text-why-wenex-grey">Employer <span className="text-why-wnx-05">branding</span></h4>
        <h5 className="text-why-wenex-grey pt-3">
          A branding-focused recruitment platform that pushes your content
          to reach suitable candidates through our technology-driven Job-Boards.
          WeNexCorp establishes and improves the Employer’s Image amongst the active
          and passive job seekers, clients, customers, and other key stakeholders.
        </h5>
      </Col>
      <Col lg="6" md="6" className="pt-3">
        <div className="align-why-wenex-center">
          <h5 className="text-on-back-about-06 why-wenex-num-about">06</h5>
        </div>
        <h4 className="text-why-wenex-grey">Improve <span className="text-why-wnx-06">job market fitment</span></h4>
        <h5 className="text-why-wenex-grey pt-3">
          Campus Connect creates industry-ready professionals through
          objective and structured training and coaching.
        </h5>
      </Col>

    </Row>
  </Container>
);

export default WenexWhyWenex;
