import React, { useState } from 'react';
import {
  Button,
  Col, Container, Form, Input, Row,
} from 'reactstrap';
import './ww-resume-skills.scss';

import 'react-datepicker/dist/react-datepicker.css';

export const WWResumeSkills: React.FC = () => {
  const [contactFormLoader, setContactFormLoader] = useState(false);
  const [resumeContactForm, setResumeContactForm] = useState<any>({
    // fullName: '',
    contactMailId: '',
    contactPhone: '',
    dateOfBirth: new Date(),
    nationality: 0,
    dialId: 1,
    diffAbled: false,
    gender: 'M',
    diffAbledReason: 'NONE',
    objective: '',
  });
  const handleChangeObjective = (e: any) => {
    setResumeContactForm({ ...resumeContactForm, objective: e.target.value });
  };

  const handleRegister = (e: any) => {
    e.preventDefault();
    setContactFormLoader(true);
  };
  return (
    <Container>
      <Row>
        <Col lg="3" md="3" xs="12">
          <div className="pt-3">
            Add Skills
          </div>
        </Col>
        <Col lg="9" md="9" xs="12">
          <Form className="mx-3" onSubmit={handleRegister}>
            <Row>
              <Col lg="12">
                <div className="pt-4">
                  <h6 className="ww-resume-labels">
                    ENTER THE <strong>SKILLS</strong> YOU POSSESS*
                  </h6>
                  <Input
                    placeholder="Front End: HTML, CSS, Javascript"
                    type="textarea"
                    required
                    className="ww-resume-skill-points"
                    value={resumeContactForm.objective}
                    onChange={handleChangeObjective}
                  />
                </div>
              </Col>
              <Col lg="12">
                <div className="pt-4">
                  <Button disabled={contactFormLoader} className="ww-resume-exp-save-btn">
                    SAVE TO SKILLS LIST
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
