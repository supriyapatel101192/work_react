import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Col, Container, Form, Input, InputGroup, InputGroupText, Label, Modal, NavLink, Row, Spinner,
} from 'reactstrap';
import { useNavigate } from 'react-router';
import './register.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClose } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';
import { clearRegisterPostReq, registerPostReq } from '../../../store/we-wire/actions';
import { APIHeaderWW, WenexResponse } from '../../../utils/constants';
import { RegisterInput } from '../../../services/register/register.types';
import WWNavbar from '../ww-navbar/we-wire.navbar';
import { FileInput } from '../../../services/register-fresher/register-fresher.types';
import { errorAlert } from '../../../utils/alert';

export const WeWireRegister: React.FC = () => {
  const history = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [userExist, setUserExist] = useState(false);
  const registerResponse = useSelector((state: RootState) => state.registerExperienced.wwRegister);
  const dispatch = useDispatch();
  const handleFreshers = () => {
    history('/login');
    window.scrollTo(0, 0);
  };
  const [registerData, setRegisterData] = useState<RegisterInput>({
    firstName: '',
    lastName: '',
    emailId: '',
    phone: '',
    isFresher: false,
    userName: '',
    dialId: 1,
    avatar: '',
    gender: 'UNK',
    loginTp: 'WW',
    phoneTp: 'SMRTPHN',
    isFreelancer: false,
  });
  React.useEffect(() => {
    if (registerResponse.message && registerResponse.message.toLowerCase().includes(WenexResponse.WW_DATA_ADDED.toLowerCase())) {
      dispatch(clearRegisterPostReq());
      setShowAlert(true);
      setRegisterData({
        firstName: '',
        lastName: '',
        emailId: '',
        phone: '',
        isFresher: false,
        userName: '',
        dialId: 1,
        avatar: '',
        gender: 'UNK',
        loginTp: 'WW',
        phoneTp: 'SMSPHN',
        isFreelancer: false,
      });
    }
  }, [registerResponse.message]);

  const [resumeUpload, setResumeUpload] = useState<FileInput>({
    fileData: '',
  });
  const [registerLoader, setRegisterLoader] = useState(false);
  const registerResponseData = useSelector((state: RootState) => state.weWire.wwRegister);

  const handleFirstName = (e: any) => {
    setRegisterData({ ...registerData, firstName: e.target.value });
  };
  const handleLastName = (e: any) => {
    setRegisterData({ ...registerData, lastName: e.target.value });
  };
  const handlePhoneNo = (e: any) => {
    setRegisterData({ ...registerData, phone: e.target.value });
  };
  const handleEmailId = (e: any) => {
    setRegisterData({ ...registerData, emailId: e.target.value });
  };
  const handleFileUpload = (e:any) => {
    setResumeUpload({ ...resumeUpload, fileData: e.target.files[0] });
  };
  const handleRegister = (e: any) => {
    e.preventDefault();
    setRegisterLoader(true);
    dispatch(registerPostReq({
      inputBody: registerData,
      fileUpload: resumeUpload.fileData,
      requestType: APIHeaderWW.REQ_ADD_CANDIDATE_WW,
    }));
  };
  React.useEffect(() => {
    if (registerResponseData.message !== '' || registerResponseData.errorMessage !== '') {
      setRegisterLoader(false);
    }
    if (registerResponseData.message.toLowerCase().includes(WenexResponse.WW_REGISTER_RECORD_EXIST.toLowerCase())) {
      setUserExist(true);
    }
  }, [registerResponseData.errorMessage, registerResponseData.message]);

  // To clear data after Component Unmount
  React.useEffect(() => () => {
    dispatch(clearRegisterPostReq());
  }, [dispatch]);
  return (
    <React.Fragment>
      <WWNavbar />
      <Container>
        <Row>
          {userExist ? (
            errorAlert('You are already registered. Kindly Login !!!', userExist, setUserExist)
          ) : null}
          <Col lg={{ size: 5, order: 1 }} md={{ size: 5, order: 2 }} xs={{ order: 2 }} className="ww-register-head-col-bg-img ww-register-container">
            <div className="pt-5">
              <div className="ww-register-align-center pt-3">
                <Card className="ww-register-card-container ww-register-align-center ww-register-card-pointer" onClick={handleFreshers}>
                  <CardImg
                    className="ww-register-card-container-img pt-2"
                    src="/images/register/register-all.png"
                  />
                  <CardBody>
                    <div className="pt-2">
                      <h6 className="ww-register-text-lite-grey">Why to Register with us</h6>
                    </div>
                    <div className="pt-2 ww-register-text-left">
                      <h6><FontAwesomeIcon icon={faCheckCircle} className="ww-check-icon" />Why to Register with us</h6>
                    </div>
                    <div className="pt-2 ww-register-text-left">
                      <h6><FontAwesomeIcon icon={faCheckCircle} className="ww-check-icon" />Why to Register with us</h6>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </Col>
          <Col lg={{ size: 7, order: 2 }} md={{ size: 7, order: 1 }} xs={{ order: 1 }} className="ww-register-head-col-bg-form ww-register-container pt-4">
            <div>
              <img src="/images/register/exp-form.png" alt="register form" className="ww-register-exp-img" />
            </div>
            <h4 className="ww-register-text-welcome pt-3">I am Experinced</h4>
            <Row className="ww-register-container-row">
              <Col lg={{ size: 4, order: 2 }} md={{ size: 4, order: 2 }} xs={{ size: 12, order: 1 }}>
                <div className="register-google mx-5">
                  <div className="or-field">
                    OR
                  </div>
                  <div className="link-google-sigup-block mx-3">
                    <h6 className="ww-register-text-lite-grey">Continue with</h6>
                    <div className="pt-2 mx-3 my-1">
                      <NavLink className="social-button-filled" to="/">
                        <img
                          alt="..."
                          className="register-button-social-image"
                          src="/images/register/google.png"
                        />
                      </NavLink>
                    </div>
                    <div className="pt-4 mx-3">
                      <NavLink className="social-button-filled" to="/">
                        <img
                          alt="..."
                          className="register-button-social-image"
                          src="/images/register/linkedin.png"
                        />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="register-supporter-mobile">
                  <h6 className="ww-register-text-lite-grey">Continue with</h6>
                  <div className="register-social-center">
                    <NavLink className="social-button-filled" to="/">
                      <img
                        alt="..."
                        className="register-button-social-image"
                        src="/images/register/google.png"
                      />
                    </NavLink>
                  </div>
                  <div className="register-social-center">
                    <NavLink className="social-button-filled" to="/">
                      <img
                        alt="..."
                        className="register-button-social-image"
                        src="/images/register/linkedin.png"
                      />
                    </NavLink>
                  </div>
                </div>
                <div className="register-google-mobile">
                  <div className="or-field-mobile">
                    OR
                  </div>
                </div>
              </Col>
              <Col lg={{ size: 8, order: 1 }} md={{ size: 8, order: 1 }} xs={{ size: 12, order: 2 }}>
                <Form className="mx-3" onSubmit={handleRegister}>
                  <Row>
                    <Col lg="6">
                      <div className="pt-4">
                        <h6 className="ww-register-text-left ww-register-text-lite-blue mx-1">First Name</h6>
                        <Input
                          placeholder="Enter your First Name"
                          type="text"
                          required
                          className="input-group-register-det-ww"
                          value={registerData.firstName}
                          onChange={handleFirstName}
                        />
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="pt-4">
                        <h6 className="ww-register-text-left ww-register-text-lite-blue mx-1">Last Name</h6>
                        <Input
                          placeholder="Enter your Last Name"
                          type="text"
                          required
                          className="input-group-register-det-ww"
                          value={registerData.lastName}
                          onChange={handleLastName}
                        />
                      </div>
                    </Col>
                    <Col lg="12">
                      <div className="pt-4">
                        <h6 className="ww-register-text-left ww-register-text-lite-blue mx-1">Email Id</h6>
                        <Input
                          placeholder="Enter your Email Id"
                          type="text"
                          required
                          className="input-group-register-det-ww"
                          value={registerData.emailId}
                          onChange={handleEmailId}
                        />
                      </div>
                      <h6 className="ww-register-text-left ww-register-text-lite-grey mx-1 pt-1">All the communications will be sent to your this email id</h6>
                    </Col>
                    <Col lg="12">
                      <div className="pt-4">
                        <h6 className="ww-register-text-left ww-register-text-lite-blue mx-1">Phone Number</h6>
                        <InputGroup>
                          <InputGroupText className="ww-register-input-group-text">
                            +91
                          </InputGroupText>
                          <Input
                            placeholder="Enter your Phone Number"
                            type="number"
                            required
                            className="ww-register-input-group"
                            value={registerData.phone}
                            onChange={handlePhoneNo}
                          />
                        </InputGroup>
                        <h6 className="ww-register-text-left ww-register-text-lite-grey mx-1 pt-1">If opting for<span className="ww-register-text-whatsapp mx-1">WhatsApp</span>services please provide same number</h6>
                      </div>
                    </Col>
                    <Col lg="12">
                      <div className="pt-4">
                        <h6 className="ww-register-text-left ww-register-text-lite-blue mx-1">Upload Your Resume</h6>
                        <Input
                          placeholder="Upload your Resume"
                          type="file"
                          onChange={handleFileUpload}
                          className="ww-upload-resume"
                        />
                      </div>
                    </Col>
                    <Col lg="12">
                      <div className="pt-4 ww-register-text-left">
                        <Label check>
                          <Input
                            type="checkbox"
                            // eslint-disable-next-line no-console
                            onChange={(e) => console.log(e.target.value)}
                          />
                          <strong className="mx-2">Send me important updates on my <span className="ww-register-text-whatsapp mx-1"><FontAwesomeIcon icon={faWhatsapp} className="ww-icon-green mx-1" /> WhatsApp</span></strong>
                        </Label>
                      </div>
                    </Col>
                  </Row>
                  <div className="my-5">
                    <div className="ww-register-msg">
                      {registerLoader
                        && <Spinner type="border" color="warning" />}
                      {!registerLoader && registerResponseData.message !== '' && (
                      <span>
                        {registerResponseData.error ? (
                          <span className="ww-register-err">
                            {registerResponseData.errorMessage}
                          </span>
                        ) : null}
                      </span>
                      )}
                    </div>
                    <Button disabled={registerLoader} className="ww-register-exp-btn-filled">
                      Register Me
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
        <Modal
          modalClassName="cc-register-modal-mini cc-register-modal-primary"
          isOpen={showAlert}
          toggle={() => setShowAlert(false)}
        >
          <div className="cc-register-modal-header justify-content-end">
            <Button
              className="btn-neutral-cc-register"
              onClick={() => setShowAlert(false)}
            >
              <i className="fab-cc-register"><FontAwesomeIcon icon={faClose} /></i>
            </Button>
          </div>
          <div className="cc-register-modal-body">
            <p>You have successfully registered for WeWire. One Time Password has been sent to your registered Email for quick Login.<br /><br />Kindly Login to avail more features.</p>
          </div>
        </Modal>
      </Container>
    </React.Fragment>
  );
};

export default WeWireRegister;
