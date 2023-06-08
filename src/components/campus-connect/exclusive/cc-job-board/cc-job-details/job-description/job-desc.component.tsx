import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './job-desc.scss';
import { JobDescriptionProps } from './job-desc.type';

export const CCJobDescription: React.FC<JobDescriptionProps> = ({ jdData }) => (
  <Container>
    <Row className="pt-2">
      <Col xs="6" md="6" lg="6" className="jd-title-cc">
        Designation :
      </Col>
      <Col xs="6" md="6" lg="6" className="jd-content-cc">
        {jdData?.jobTitle}
      </Col>
      <Col xs="6" md="6" lg="6" className="jd-title-cc">
        Location :
      </Col>
      <Col xs="6" md="6" lg="6" className="jd-content-cc">
        {jdData?.jobLocations.join('/')}
      </Col>
      <Col xs="6" md="6" lg="6" className="jd-title-cc">
        Experience :
      </Col>
      <Col xs="6" md="6" lg="6" className="jd-content-cc">
        {jdData?.minExp} - {jdData?.maxExp} Years
      </Col>
    </Row>
    <Row>
      <Col md="12" lg="12" className="jd-title-cc pt-4">
        Roles and Responsibilities:
      </Col>
      <Col>
        <ul>
          {jdData?.rolesResponsibility.map((role, index) => (
            <div key={`Role${index.toString()}`} className="jd-content-cc"><FontAwesomeIcon icon={faCaretRight} className="card-icon-arrow-cc" />{role.value}</div>
          ))}
        </ul>
      </Col>

    </Row>
    <Row className="pt-2">
      <Col xs="5" md="5" lg="4" className="jd-title-cc">Skills Must Have : </Col>
      <Col className="jd-content-cc">{jdData.skillsMustHave.join(', ')}</Col>
    </Row>
    <Row className="pt-2">
      <Col xs="5" md="5" lg="4" className="jd-title-cc">Skills Good To Have : </Col>
      {jdData.skillsGoodToHave.length > 0
        ? <Col className="jd-content-cc">{jdData.skillsGoodToHave.join(', ')}</Col>
        : <Col className="jd-content-cc">Not Applicable</Col>}

    </Row>
  </Container>
);
export default CCJobDescription;
