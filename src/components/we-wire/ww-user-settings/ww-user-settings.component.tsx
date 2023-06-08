import React, { useState } from 'react';
import {
  Button,
  Col, Container, Form, Input, InputGroup, InputGroupText, Label, Row,
} from 'reactstrap';
import DatePicker from 'react-datepicker';
import './ww-user-settings.scss';

import 'react-datepicker/dist/react-datepicker.css';

export const WWUserSettings: React.FC = () => {
  const [contactFormLoader, setContactFormLoader] = useState(false);
  const [nationality, setNationality] = useState('');
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
  const handlePhoneNo = (e: any) => {
    setResumeContactForm({ ...resumeContactForm, contactPhone: e.target.value });
  };
  const handleEmailId = (e: any) => {
    setResumeContactForm({ ...resumeContactForm, contactMailId: e.target.value });
  };
  const handleChangeDOB = (e: any) => {
    setResumeContactForm({ ...resumeContactForm, dateOfBirth: e });
  };
  const handleChangeGender = (e: any) => {
    setResumeContactForm({ ...resumeContactForm, gender: e.target.value });
  };
  const handleChangeNationality = (e: any) => {
    if ((e.target.value).toLowerCase().includes('indian')) {
      setNationality(e.target.value);
      setResumeContactForm({ ...resumeContactForm, nationality: 1 });
    }
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
    <Container className="ww-user-settings-container">
      <Row className="pt-2">
        <Col lg="11" md="11" xs="12">
          <h5 className="mx-3">UPDATE</h5>
        </Col>
      </Row>
      <Row>
        <Col lg="11" md="11" xs="12">
          <Form className="mx-3" onSubmit={handleRegister}>
            <Row>
              <Col lg="6">
                <div className="pt-4">
                  <h6 className="ww-user-settings-labels">First Name</h6>
                  <Input
                    placeholder="Enter your First Name"
                    type="text"
                    required
                    className="ww-user-settings-input-group"
                    // value={resumeContactForm.fullName}
                    // onChange={handleFullName}
                  />
                </div>
              </Col>
              <Col lg="6">
                <div className="pt-4">
                  <h6 className="ww-user-settings-labels">Last Name</h6>
                  <Input
                    placeholder="Enter your Last Name"
                    type="text"
                    required
                    className="ww-user-settings-input-group"
                    // value={resumeContactForm.fullName}
                    // onChange={handleFullName}
                  />
                </div>
              </Col>
              <Col lg="12">
                <div className="pt-4">
                  <h6 className="ww-user-settings-labels">Email Address</h6>
                  <Input
                    placeholder="Enter your Email Address"
                    type="text"
                    required
                    className="ww-user-settings-input-group"
                    value={resumeContactForm.contactMailId}
                    onChange={handleEmailId}
                  />
                </div>
              </Col>
              <Col lg="6">
                <div className="pt-4">
                  <h6 className="ww-user-settings-labels">Phone Number</h6>
                  <InputGroup>
                    <InputGroupText className="ww-user-setting-input-group-text">
                      +91
                    </InputGroupText>
                    <Input
                      placeholder="Enter your Phone Number"
                      type="number"
                      required
                      className="ww-user-settings-input-group"
                      value={resumeContactForm.contactPhone}
                      onChange={handlePhoneNo}
                    />
                  </InputGroup>
                </div>
              </Col>
              <Col lg="6">
                <div className="pt-4">
                  <h6 className="ww-user-settings-labels">Date Of Birth</h6>
                  <DatePicker
                    selected={resumeContactForm.dateOfBirth}
                    onChange={handleChangeDOB}
                    peekNextMonth
                    showMonthDropdown
                    useShortMonthInDropdown
                    showYearDropdown
                    dropdownMode="scroll"
                    dateFormat="dd/MM/yyyy"
                    todayButton="Today"
                    className="ww-user-settings-dob"
                  />
                </div>
              </Col>
              <Col lg="6">
                <div className="pt-4">
                  <h6 className="ww-user-settings-labels">Gender</h6>
                  <Label className="ww-user-settings-gender-label">
                    <Input type="radio" value="M" name="gender" checked={resumeContactForm.gender === 'M'} onChange={handleChangeGender} className="ww-user-settings-gender" /> Male
                  </Label>
                  <Label className="ww-user-settings-gender-label">
                    <Input type="radio" value="F" name="gender" checked={resumeContactForm.gender === 'F'} onChange={handleChangeGender} className="ww-user-settings-gender" /> Female
                  </Label>
                  <Label className="ww-user-settings-gender-label">
                    <Input type="radio" value="O" name="gender" checked={resumeContactForm.gender === 'O'} onChange={handleChangeGender} className="ww-user-settings-gender" /> Other
                  </Label>
                </div>
              </Col>
              <Col lg="6">
                <div className="pt-4">
                  <h6 className="ww-user-settings-labels">City</h6>
                  <Input
                    placeholder="Enter your City"
                    type="text"
                    required
                    className="ww-user-settings-input-group"
                    // value={resumeContactForm.fullName}
                    // onChange={handleFullName}
                  />
                </div>
              </Col>
              <Col lg="6">
                <div className="pt-4">
                  <h6 className="ww-user-settings-labels">State</h6>
                  <Input
                    placeholder="Enter your State"
                    type="text"
                    required
                    className="ww-user-settings-input-group"
                    // value={resumeContactForm.fullName}
                    // onChange={handleFullName}
                  />
                </div>
              </Col>
              <Col lg="6">
                <div className="pt-4">
                  <h6 className="ww-user-settings-labels">Country</h6>
                  <Input
                    placeholder="Enter your Country"
                    type="text"
                    required
                    className="ww-user-settings-input-group"
                    value={nationality}
                    onChange={handleChangeNationality}
                  />
                </div>
              </Col>

              <Col lg="12">
                <div className="pt-4">
                  <Button disabled={contactFormLoader} className="ww-user-settings-save-btn">
                    UPDATE CONTACT INFO
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
