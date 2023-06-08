import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './job-desc.scss';
import { JobDescriptionProps } from './job-desc.type';

export const EHJobDescription: React.FC<JobDescriptionProps> = ({ jdData }) => (
  <Container>
    <Row className="pt-2">
      <Col xs="6" md="6" lg="6" className="jd-title-eh">
        Designation :
      </Col>
      <Col xs="6" md="6" lg="6" className="jd-content-eh">
        {jdData?.jobTitle}
      </Col>
      <Col xs="6" md="6" lg="6" className="jd-title-eh">
        Location :
      </Col>
      <Col xs="6" md="6" lg="6" className="jd-content-eh">
        {jdData?.jobLocations.join('/')}
      </Col>
      <Col xs="6" md="6" lg="6" className="jd-title-eh">
        Experience :
      </Col>
      <Col xs="6" md="6" lg="6" className="jd-content-eh">
        {jdData?.minExp} - {jdData?.maxExp} Years
      </Col>
    </Row>
    <Row>
      <Col md="12" lg="12" className="jd-title-eh pt-4">
        Roles and Responsibilities:
      </Col>
      <Col>
        <ul>
          {jdData?.rolesResponsibility.map((role, index) => (
            <div key={`Role${index.toString()}`} className="jd-content-eh"><FontAwesomeIcon icon={faCaretRight} className="card-icon-arrow-eh" />{role.value}</div>
          ))}
        </ul>
      </Col>

    </Row>
    <Row className="pt-2">
      <Col xs="4" md="4" lg="3" className="jd-title-eh">Skills Must Have : </Col>
      <Col className="jd-content-eh">{jdData.skillsMustHave.join(', ')}</Col>
    </Row>
    <Row className="pt-2">
      <Col xs="4" md="4" lg="3" className="jd-title-eh">Skills Good To Have : </Col>
      {jdData.skillsGoodToHave.length > 0
        ? <Col className="jd-content-eh">{jdData.skillsGoodToHave.join(', ')}</Col>
        : <Col className="jd-content-eh">Not Applicable</Col>}

    </Row>
  </Container>
);
export default EHJobDescription;
