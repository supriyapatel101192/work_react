import React, { useState } from 'react';
import {
  Button,
  Col, Container, Form, Input, Row,
} from 'reactstrap';
import './ww-resume-education.scss';

import 'react-datepicker/dist/react-datepicker.css';

export const WWResumeEducation: React.FC = () => {
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
  //   const handleFullName = (e: any) => {
  //     // setResumeContactForm({ ...resumeContactForm, fullName: e.target.value });
  //   };
  const handleChangeObjective = (e: any) => {
    setResumeContactForm({ ...resumeContactForm, objective: e.target.value });
  };

  //   const handleEmailId = (e: any) => {
  //     setResumeContactForm({ ...resumeContactForm, contactMailId: e.target.value });
  //   };
  const handleRegister = (e: any) => {
    e.preventDefault();
    setContactFormLoader(true);
    // dispatch(registerPostReq({
    //   inputBody: resumeContactForm,
    //   fileUpload: resumeUpload.fileData,
    //   requestType: APIWWResumeUpdate.UPDATE_CONTACT,
    // }));
  };
  // To clear data after Component Unmount
  //    React.useEffect(() => () => {
  //     dispatch(clearRegisterPostReq());
  //   }, [dispatch]);
  return (
    <Container>
      <Row>
        <Col lg="3" md="3" xs="12">
          <div className="pt-3">
            Add Projects
          </div>
        </Col>
        <Col lg="9" md="9" xs="12">
          <Form className="mx-3" onSubmit={handleRegister}>
            <Row>
              <Col lg="12">
                <div className="pt-4">
                  <h6 className="ww-resume-labels">
                    WHAT IS YOUR <strong>DEGREE</strong> OR OTHER <strong>QUALIFICATION</strong> AND <strong>MAJOR</strong>?
                  </h6>
                  <Input
                    placeholder="Bachelor of Scince in Economics"
                    type="text"
                    required
                    className="ww-resume-input-group"
                    value={resumeContactForm.objective}
                    onChange={handleChangeObjective}
                  />
                </div>
              </Col>
              <Col lg="12">
                <div className="pt-4">
                  <h6 className="ww-resume-labels">
                    <strong>WHERE</strong> DID YOU EARN YOUR DEGREE/QUALIFICATION?
                  </h6>
                  <Input
                    placeholder="University of Wisconsin, Madison"
                    type="text"
                    required
                    className="ww-resume-input-group"
                    // value={resumeContactForm.fullName}
                    // onChange={handleFullName}
                  />
                </div>
              </Col>
              <Col lg="12">
                <div className="pt-4">
                  <h6 className="ww-resume-labels">
                    <strong>WHERE</strong> IS THE INSTITUTION LOCATED?
                  </h6>
                  <Input
                    placeholder="Madison, WI"
                    type="text"
                    required
                    className="ww-resume-input-group"
                    value={resumeContactForm.objective}
                    onChange={handleChangeObjective}
                  />
                </div>
              </Col>
              <Col lg="12">
                <div className="pt-4">
                  <h6 className="ww-resume-labels">
                    <strong>WHEN</strong> DID YOU EARN YOUR DEGREE/QUALIFICATION?
                  </h6>
                  <Input
                    placeholder="2022"
                    type="text"
                    required
                    className="ww-resume-input-group"
                    value={resumeContactForm.objective}
                    onChange={handleChangeObjective}
                  />
                </div>
              </Col>
              <Col lg="12">
                <div className="pt-4">
                  <h6 className="ww-resume-labels">
                    DID YOU <strong>MINOR</strong> IN ANYTHING?
                  </h6>
                  <Input
                    placeholder="Mathematics"
                    type="text"
                    required
                    className="ww-resume-input-group"
                    value={resumeContactForm.objective}
                    onChange={handleChangeObjective}
                  />
                </div>
              </Col>
              <Col lg="12">
                <div className="pt-4">
                  <h6 className="ww-resume-labels">
                    <strong>GPA</strong> (IF APPLICABLE)
                  </h6>
                  <Input
                    placeholder="3.82 GPA"
                    type="text"
                    required
                    className="ww-resume-input-group"
                    value={resumeContactForm.objective}
                    onChange={handleChangeObjective}
                  />
                </div>
              </Col>
              <Col lg="12">
                <div className="pt-4">
                  <Button disabled={contactFormLoader} className="ww-resume-exp-save-btn">
                    SAVE TO EDUCATION LIST
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
