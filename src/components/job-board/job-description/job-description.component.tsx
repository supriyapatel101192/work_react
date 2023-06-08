import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './job-description.scss';
import { JobDescriptionProps } from './job-description.type';

export const JobDescription: React.FC<JobDescriptionProps> = ({ jdData }) => (
  <Container>
    <Row>
      <Col xs="6" md="6" lg="6" className="jd-title">
        Designation :
      </Col>
      <Col xs="6" md="6" lg="6" className="jd-content">
        {jdData?.jobTitle}
      </Col>
      <Col xs="6" md="6" lg="6" className="jd-title">
        Location :
      </Col>
      <Col xs="6" md="6" lg="6" className="jd-content">
        {jdData?.jobLocations.join('/')}
      </Col>
      <Col xs="6" md="6" lg="6" className="jd-title">
        Experience :
      </Col>
      <Col xs="6" md="6" lg="6" className="jd-content">
        {jdData?.minExp} - {jdData?.maxExp} Years
      </Col>
    </Row>
    <Row>
      <Col md="12" lg="12" className="jd-title">
        Roles and Responsibilities:
      </Col>
      <Col>
        <ul>
          {jdData?.rolesResponsibility.map((role, index) => (
            <li key={`Role${index.toString()}`} className="jd-content">{role.value}</li>
          ))}
        </ul>
      </Col>

    </Row>
    <Row>
      <Col xs="6" md="6" lg="6" className="jd-title">Skills Must Have</Col>
      <Col className="jd-content">{jdData.skillsMustHave.join(', ')}</Col>
    </Row>
    <Row>
      <Col xs="6" md="6" lg="6" className="jd-title">Skills Good To Have</Col>
      <Col className="jd-content">{jdData.skillsGoodToHave.join(', ')}</Col>
    </Row>
  </Container>
);
export default JobDescription;
