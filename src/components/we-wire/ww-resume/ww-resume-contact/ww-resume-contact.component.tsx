import React, { useState } from 'react';
import {
  Button,
  Col, Container, Form, Input, Row,
} from 'reactstrap';
import './ww-resume-contact.scss';

import 'react-datepicker/dist/react-datepicker.css';

export const WWResumeContact: React.FC = () => {
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
        <Col lg="11" md="11" xs="12">
          <Form className="mx-3" onSubmit={handleRegister}>
            <Row>
              <Col lg="12">
                <div className="pt-4">
                  <h6 className="ww-resume-labels">Objective</h6>
                  <Input
                    placeholder="Enter Your Objective Here.."
                    type="textarea"
                    required
                    className="ww-resume-obj-input-group"
                    value={resumeContactForm.objective}
                    onChange={handleChangeObjective}
                  />
                </div>
              </Col>
              <Col lg="6">
                <div className="pt-4">
                  <Button disabled={contactFormLoader} className="ww-resume-obj-save-btn">
                    SAVE CONTACT INFO
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
