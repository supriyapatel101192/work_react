import React, { useState } from 'react';
import {
  Button,
  Col, Container, Form, Input, Row,
} from 'reactstrap';
import DatePicker from 'react-datepicker';
import './ww-resume-experience.scss';

import 'react-datepicker/dist/react-datepicker.css';

export const WWResumeExperience: React.FC = () => {
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
  const handleChangeDOB = (e: any) => {
    setResumeContactForm({ ...resumeContactForm, dateOfBirth: e });
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
        <Col lg="3" md="3" xs="12">
          <div className="pt-3">
            Add Experiences
          </div>
        </Col>
        <Col lg="9" md="9" xs="12">
          <Form className="mx-3" onSubmit={handleRegister}>
            <Row>
              <Col lg="12">
                <div className="pt-4">
                  <h6 className="ww-resume-labels">
                    WHAT WAS YOUR <strong>ROLE</strong> AT THE COMPANY?
                  </h6>
                  <Input
                    placeholder="Marketing Analyst"
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
                  <h6 className="ww-resume-labels">FOR WHICH  <strong>COMPANY</strong> DID YOU WORK?*
                  </h6>
                  <Input
                    placeholder="Google"
                    type="text"
                    required
                    className="ww-resume-input-group"
                    // value={resumeContactForm.fullName}
                    // onChange={handleFullName}
                  />
                </div>
              </Col>
              <Col lg="6">
                <div className="pt-4">
                  <h6 className="ww-resume-labels">HOW LONG WERE YOU WITH THE COMPANY?</h6>
                  <Row>
                    <Col lg="6">
                      <DatePicker
                        placeholderText="Start Date"
                        startDate={resumeContactForm.dateOfBirth}
                        selected={resumeContactForm.dateOfBirth}
                        onChange={handleChangeDOB}
                        peekNextMonth
                        showMonthDropdown
                        useShortMonthInDropdown
                        showYearDropdown
                        dropdownMode="scroll"
                        dateFormat="dd/MM/yyyy"
                        todayButton="Today"
                        className="ww-resume-exp-range-date"
                      />
                    </Col>
                    <Col lg="6">
                      <DatePicker
                        placeholderText="End Date"
                        selected={resumeContactForm.dateOfBirth}
                        onChange={handleChangeDOB}
                        peekNextMonth
                        showMonthDropdown
                        useShortMonthInDropdown
                        showYearDropdown
                        endDate={resumeContactForm.dateOfBirth}
                        dropdownMode="scroll"
                        dateFormat="dd/MM/yyyy"
                        todayButton="Today"
                        className="ww-resume-exp-range-date"
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg="1" />
              <Col lg="5">
                <div className="pt-4">
                  <h6 className="ww-resume-labels">WHERE WAS THE COMPANY LOCATED?</h6>
                  <Input
                    placeholder="New York, NY"
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
                  <h6 className="ww-resume-labels">WHAT DID YOU DO AT THE COMPANY?</h6>
                  <Input
                    placeholder="Enter Your Objective Here.."
                    type="textarea"
                    required
                    className="ww-resume-exp-points"
                    value={resumeContactForm.objective}
                    onChange={handleChangeObjective}
                  />
                </div>
              </Col>
              <Col lg="12">
                <div className="pt-4">
                  <Button disabled={contactFormLoader} className="ww-resume-exp-save-btn">
                    SAVE TO EXPERIENCE LIST
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
