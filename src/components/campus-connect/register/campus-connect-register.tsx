import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Col, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Modal, Row, Spinner,
} from 'reactstrap';
// import { format } from 'date-fns';
import { RootState } from 'typesafe-actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import './register.scss';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClose } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import CCNavbar from '../navbar/campus-connect.navbar';
import { APIHeaderWW, APIHeaderWX, WenexResponse } from '../../../utils/constants';
import { SpecResultInfo } from '../../../services/meta-data/list-spec/list-spec.types';
import { CollegeResultInfo } from '../../../services/meta-data/list-college/list-college.types';
import { getAllCollege, getAllSpec } from '../../../store/metadata/actions';
import { FileInput, RegisterFrsInput } from '../../../services/register-fresher/register-fresher.types';
import { clearRegisterFrsPostReq, registerFrsPostReq } from '../../../store/campusconnect/actions';
import { errorAlert, errorAlertNoRefresh } from '../../../utils/alert';

export const CampusConnectRegister: React.FC = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [registerLoader, setRegisterLoader] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isOCollege, setIsOCollege] = useState(false);
  const [isOSpec, setIsOSpec] = useState(false);
  const [userExist, setUserExist] = useState(false);
  const [isCollegeCourse, setIsCollegeCourse] = useState(false);
  const [specMetaData, setSpecMetaData] = useState<SpecResultInfo[]>([]);
  const [collegeMetaData, setCollegeMetaData] = useState<CollegeResultInfo[]>([]);
  const registerResponse = useSelector((state: RootState) => state.registerFresher.registerUser);
  const specMetaDataList = useSelector((state: RootState) => state.metaData.listSpec);
  const collegeMetaDataList = useSelector((state: RootState) => state.metaData.listCollege);
  const [collegeDate, setCollegeDate] = useState({
    startDate: '',
    endDate: '',
  });
  const [fileUploadData, setFileUploadData] = useState<FileInput>({
    fileData: '',
  });
  const [registerFrsData, setRegisterFrsData] = useState<RegisterFrsInput>({
    firstName: '',
    lastName: '',
    userName: '',
    dialId: 1,
    avatar: '',
    gender: 'UNK',
    phone: '',
    phoneTp: 'SMSPHN',
    emailId: '',
    loginTp: 'CC',
    isFresher: true,
    isFreelancer: false,
    collegeData: {
      college: 1,
      course: 1,
      isCurrent: true,
      currentYear: 0,
      startDate: '',
      endDate: '',
      internshipId: '',
      oCollege: '',
      oCollegeLoc: '',
      oCourse: '',
    },
  });

  React.useEffect(() => {
    if (registerResponse.message !== '' || registerResponse.errorMessage !== '') {
      setRegisterLoader(false);
    }
    if (registerResponse.message.toLowerCase().includes(WenexResponse.WW_REGISTER_RECORD_EXIST.toLowerCase())) {
      setUserExist(true);
    }
  }, [registerResponse.errorMessage, registerResponse.message]);

  React.useEffect(() => {
    dispatch(getAllCollege({
      metaCode: 'college_meta', isPublic: 'YES', requestType: APIHeaderWX.REQ_GET_ALL_METADATA,
    }));
    dispatch(getAllSpec({
      metaCode: 'course_meta', isPublic: 'YES', requestType: APIHeaderWX.REQ_GET_ALL_METADATA,
    }));
    if (specMetaDataList.specInfo.length) {
      setSpecMetaData(specMetaDataList.specInfo);
    }
    if (collegeMetaDataList.collegeInfo.length) {
      setCollegeMetaData(collegeMetaDataList.collegeInfo);
    }
  }, [dispatch, collegeMetaDataList.collegeInfo.length, specMetaDataList.specInfo.length]);

  React.useEffect(() => {
    if (registerResponse.message && registerResponse.message.toLowerCase().includes(WenexResponse.WW_DATA_ADDED.toLowerCase())) {
      dispatch(clearRegisterFrsPostReq());
      setShowAlert(true);
      setRegisterFrsData({
        firstName: '',
        lastName: '',
        userName: '',
        dialId: 1,
        avatar: '',
        gender: 'UNK',
        phone: '',
        phoneTp: 'SMSPHN',
        loginTp: 'CC',
        emailId: '',
        isFresher: true,
        isFreelancer: false,
        collegeData: {
          college: 1,
          course: 1,
          isCurrent: true,
          currentYear: 0,
          startDate: '',
          endDate: '',
          internshipId: '',
          oCollege: '',
          oCollegeLoc: '',
          oCourse: '',
        },
      });
    }
  }, [registerResponse.message]);

  const handleFreshers = () => {
    history('/login');
    window.scrollTo(0, 0);
  };
  const handleSwitchCollege = () => {
    setIsOCollege(!isOCollege);
  };
  const handleSwitchSpec = () => {
    setIsOSpec(!isOSpec);
  };
  const collegeNameoptions = collegeMetaData.map((college) => ({
    label: college.collegeName,
    value: college.id,
  }));
  const selectedCollegeNameOptions = collegeNameoptions.find(
    (option) => option.value === registerFrsData.collegeData.college,
  );
  const specNameoptions = specMetaData.map((spec) => ({
    label: spec.courseName,
    value: spec.id,
  }));
  const selectedSpecNameOptions = specNameoptions.find(
    (option) => option.value === registerFrsData.collegeData.course,
  );

  const handleSelectDropDownName = (e:any, field: string) => {
    setRegisterFrsData((prevState) => (
      {
        ...prevState,
        collegeData: { ...registerFrsData.collegeData, [field]: e.value },
      }
    ));
  };

  const handleFileUpload = (e:any) => {
    setFileUploadData({ ...fileUploadData, fileData: e.target.files[0] });
  };
  const handleCollegeDateData = (e:any) => {
    const convertDate = new Date(e.target.value);
    const newDate = convertDate.toISOString();
    setRegisterFrsData((prevState) => (
      {
        ...prevState,
        collegeData: { ...registerFrsData.collegeData, [e.target.name]: newDate },
      }
    ));
    setCollegeDate({ ...collegeDate, [e.target.name]: e.target.value });
  };

  const handleCollegeData = (e:any) => {
    setRegisterFrsData((prevState) => (
      {
        ...prevState,
        collegeData: { ...registerFrsData.collegeData, [e.target.name]: e.target.value },
      }
    ));
  };
  const handleFieldChange = (e: any) => {
    const fieldName = e.target.name;
    setRegisterFrsData({ ...registerFrsData, [fieldName]: e.target.value });
  };
  const handleCheckChange = (e: any) => {
    if (e.target.checked === true) {
      setRegisterFrsData({ ...registerFrsData, phoneTp: 'SMRTPHN' });
    } else {
      setRegisterFrsData({ ...registerFrsData, phoneTp: 'SMSPHN' });
    }
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setRegisterLoader(true);
    dispatch(registerFrsPostReq({
      inputBody: registerFrsData,
      fileUpload: fileUploadData.fileData,
      requestType: APIHeaderWW.REQ_ADD_CANDIDATE_WW,
    }));
    // if (isOCollege) {
    //   if (registerFrsData.collegeData.oCollege === '' && registerFrsData.collegeData.oCollegeLoc === '') {
    //     setIsCollegeCourse(true);
    //   }
    // } else if (registerFrsData.collegeData.college === 0) {
    //   setIsCollegeCourse(true);
    // }
    // if (isOSpec) {
    //   if (registerFrsData.collegeData.oCourse === '') {
    //     setIsCollegeCourse(true);
    //   }
    // } else if (registerFrsData.collegeData.course === 0) {
    //   setIsCollegeCourse(true);
    // }
    // if (!isCollegeCourse) {
    //   console.log('Get the message cc6', isCollegeCourse);
    //   setRegisterLoader(true);
    //   dispatch(registerFrsPostReq({
    //     inputBody: registerFrsData,
    //     fileUpload: fileUploadData.fileData,
    //     requestType: APIHeaderWW.REQ_ADD_CANDIDATE_WW,
    //   }));
    // } else {
    //   console.log('Get the message cc7', isCollegeCourse);
    //   setRegisterLoader(true);
    // }
  };

  return (
    <React.Fragment>
      <CCNavbar />
      <Container>
        {userExist ? (
          errorAlert('You are already registered. Kindly Login !!!', userExist, setUserExist)
        ) : null}
        {isCollegeCourse ? (
          errorAlertNoRefresh('Either College Name or Course is missing !!!', isCollegeCourse, setIsCollegeCourse)
        ) : null}
        <Row>
          <Col lg={{ size: 5, order: 1 }} md={{ size: 5, order: 2 }} xs={{ order: 2 }} className="cc-register-head-col-bg-img cc-register-container">
            <div className="pt-5">
              <div className="cc-register-align-center pt-3">
                <Card className="cc-register-card-container cc-register-align-center cc-register-card-pointer" onClick={handleFreshers}>
                  <CardImg
                    className="cc-register-card-container-img pt-2"
                    src="/images/register/register-all.png"
                  />
                  <CardBody>
                    <div className="pt-2">
                      <h6 className="cc-register-text-lite-grey">Why to Register with us</h6>
                    </div>
                    <div className="pt-2 cc-register-text-left">
                      <h6><FontAwesomeIcon icon={faCheckCircle} className="cc-check-icon" />Direct interview with the companies</h6>
                    </div>
                    <div className="pt-2 cc-register-text-left">
                      <h6><FontAwesomeIcon icon={faCheckCircle} className="cc-check-icon" />Know about industry trend</h6>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </Col>
          <Col lg={{ size: 7, order: 2 }} md={{ size: 7, order: 1 }} xs={{ order: 1 }} className="cc-register-head-col-bg-form cc-register-container pt-4">
            <div>
              <img src="/images/register/frs-form.png" alt="register form" className="cc-register-exp-img" />
            </div>
            <h4 className="cc-register-text-welcome pt-3">I am Fresher</h4>
            <Row className="cc-register-container-row cc-register-align-center">
              <Col lg={{ size: 10, order: 1 }} md={{ size: 10, order: 1 }} xs={{ size: 12, order: 2 }}>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg="6">
                      <div className="pt-4">
                        <h6 className="cc-register-text-left cc-register-text-lite-blue mx-1">First Name</h6>
                        <Input
                          placeholder="Enter your First Name"
                          type="text"
                          required
                          name="firstName"
                          value={registerFrsData.firstName}
                          onChange={handleFieldChange}
                          className="input-group-register-det-cc"
                        />
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="pt-4">
                        <h6 className="cc-register-text-left cc-register-text-lite-blue mx-1">Last Name</h6>
                        <Input
                          placeholder="Enter your Last Name"
                          type="text"
                          required
                          name="lastName"
                          value={registerFrsData.lastName}
                          onChange={handleFieldChange}
                          className="input-group-register-det-cc"
                        />
                      </div>
                    </Col>
                    <Col lg="12">
                      <div className="pt-4">
                        <h6 className="cc-register-text-left cc-register-text-lite-blue mx-1">Email Id</h6>
                        <Input
                          placeholder="Enter your Email Id"
                          type="text"
                          required
                          name="emailId"
                          value={registerFrsData.emailId}
                          onChange={handleFieldChange}
                          className="input-group-register-det-cc"
                        />
                      </div>
                      <h6 className="cc-register-text-left cc-register-text-lite-grey mx-1 pt-1">All the communications will be sent to your this email id</h6>
                    </Col>
                    <Col lg="12">
                      <div className="pt-4">
                        <h6 className="cc-register-text-left cc-register-text-lite-blue mx-1">Phone Number</h6>
                        <InputGroup>
                          <InputGroupText className="cc-register-input-group-text">
                            +91
                          </InputGroupText>
                          <Input
                            placeholder="Enter your Phone Number"
                            type="number"
                            required
                            name="phone"
                            value={registerFrsData.phone}
                            onChange={handleFieldChange}
                            className="cc-register-input-group"
                          />
                        </InputGroup>
                        <h6 className="cc-register-text-left cc-register-text-lite-grey mx-1 pt-1">If opting for<span className="cc-register-text-whatsapp mx-1">WhatsApp</span>services please provide same number</h6>
                      </div>
                    </Col>
                    <Col lg="12">
                      <div className="pt-4">
                        <h6 className="cc-register-text-left cc-register-text-lite-blue mx-1">College/Institution Name</h6>
                        <Select
                          value={selectedCollegeNameOptions}
                          options={collegeNameoptions}
                          // isClearable
                          onChange={(e) => { handleSelectDropDownName(e, 'college'); }}
                          styles={{
                            control: (base: any) => ({
                              ...base,
                              '&:hover': { borderColor: 'gray' },
                              border: '1px solid lightgray',
                              boxShadow: 'none',
                              height: '55px',
                              textAlign: 'left',
                            }),
                            option: (provided: any, state: { isSelected: any; }) => ({
                              ...provided,
                              color: state.isSelected ? '#091d29' : '#212121',
                              padding: 15,
                              textAlign: 'left',
                              background: state.isSelected ? '#faf8cd' : '#fff',
                              '&:hover': {
                                background: '#f8d98c',
                              },
                            }),
                          }}
                        />
                      </div>
                      <h6 className="cc-register-text-left cc-register-text-lite-grey mx-1 pt-1">College Registered with us will help getting desired jobs specific to college</h6>
                    </Col>
                    <Col lg="12">
                      <div className="cc-text-left-register pt-2">
                        <FormGroup switch>
                          <Input
                            type="switch"
                            className="ww-login-otp-pwd-toggle-btn"
                            onClick={handleSwitchCollege}
                          />
                          {!isOCollege ? <Label check className="unable-text mx-2 pt-1">Unable to find your College. Click to add New</Label>
                            : <Label check className="text-otp-true-wx mx-2 pt-1">Unable to find your College. Click to add New</Label>}
                        </FormGroup>
                      </div>
                    </Col>
                    {isOCollege ? (
                      <>
                        <Col lg="6">
                          <div className="pt-4">
                            <h6 className="cc-register-text-left cc-register-text-lite-blue mx-1">College/Institution Name</h6>
                            <Input
                              placeholder="Enter your First Name"
                              type="text"
                              name="oCollege"
                              value={registerFrsData.collegeData.oCollege}
                              onChange={handleCollegeData}
                              className="input-group-register-det-cc"
                            />
                          </div>
                        </Col>
                        <Col lg="6">
                          <div className="pt-4">
                            <h6 className="cc-register-text-left cc-register-text-lite-blue mx-1">College Location</h6>
                            <Input
                              placeholder="Enter college location"
                              type="text"
                              name="oCollegeLoc"
                              value={registerFrsData.collegeData.oCollegeLoc}
                              onChange={handleCollegeData}
                              className="input-group-register-det-cc"
                            />
                          </div>
                        </Col>
                      </>
                    ) : null }
                    <Col lg="12">
                      <div className="pt-4">
                        <h6 className="cc-register-text-left cc-register-text-lite-blue mx-1">Specialization</h6>
                        <Select
                          value={selectedSpecNameOptions}
                          options={specNameoptions}
                          // isClearable
                          onChange={(e) => { handleSelectDropDownName(e, 'course'); }}
                          styles={{
                            control: (base: any) => ({
                              ...base,
                              '&:hover': { borderColor: 'gray' },
                              border: '1px solid lightgray',
                              boxShadow: 'none',
                              height: '55px',
                              textAlign: 'left',
                            }),
                            option: (provided: any, state: { isSelected: any; }) => ({
                              ...provided,
                              color: state.isSelected ? '#091d29' : '#212121',
                              padding: 15,
                              textAlign: 'left',
                              background: state.isSelected ? '#faf8cd' : '#fff',
                              '&:hover': {
                                background: '#f8d98c',
                              },
                            }),
                          }}
                        />
                      </div>
                      <h6 className="cc-register-text-left cc-register-text-lite-grey mx-1 pt-1">College Registered with us will help getting desired jobs specific to college</h6>
                    </Col>
                    <Col lg="12">
                      <div className="cc-text-left-register pt-2">
                        <FormGroup switch>
                          <Input
                            type="switch"
                            className="ww-login-otp-pwd-toggle-btn"
                            onClick={handleSwitchSpec}
                          />
                          {!isOSpec ? <Label check className="unable-text mx-2 pt-1">Unable to find your Specialization. Click to add New</Label>
                            : <Label check className="text-otp-true-wx mx-2 pt-1">Unable to find your Specialization. Click to add New</Label>}
                        </FormGroup>
                      </div>
                    </Col>
                    {isOSpec ? (
                      <Col lg="12">
                        <div className="pt-4">
                          <h6 className="cc-register-text-left cc-register-text-lite-blue mx-1">Specialization Name</h6>
                          <Input
                            placeholder="Enter your Specialization Name"
                            type="text"
                            name="oCourse"
                            value={registerFrsData.collegeData.oCourse}
                            onChange={handleCollegeData}
                            className="input-group-register-det-cc"
                          />
                        </div>
                      </Col>
                    ) : null }
                    <Col lg="6">
                      <div className="pt-4">
                        <h6 className="cc-register-text-left cc-register-text-lite-blue mx-1">College Start Year</h6>
                        <Input
                          placeholder="Enter College Start Date"
                          type="date"
                          required
                          name="startDate"
                          value={collegeDate.startDate}
                          onChange={handleCollegeDateData}
                          className="input-group-register-det-cc"
                        />
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="pt-4">
                        <h6 className="cc-register-text-left cc-register-text-lite-blue mx-1">College End Year</h6>
                        <Input
                          placeholder="Enter College End Date"
                          type="date"
                          required
                          name="endDate"
                          value={collegeDate.endDate}
                          onChange={handleCollegeDateData}
                          className="input-group-register-det-cc"
                        />
                      </div>
                    </Col>
                    <Col lg="12">
                      <div className="pt-4">
                        <h6 className="cc-register-text-left cc-register-text-lite-blue mx-1">Upload Resume</h6>
                        <Input
                          placeholder="Upload your Resume"
                          type="file"
                          className="input-group-register-det-cc1"
                          onChange={handleFileUpload}
                        />
                      </div>
                    </Col>
                    <Col lg="12">
                      <div className="pt-4 cc-register-text-left">
                        <Label check>
                          <Input
                            type="checkbox"
                            onChange={handleCheckChange}
                            // eslint-disable-next-line no-console
                            // onChange={(e: { target: { value: any; }; }) => console.log(e.target.value)}
                          />{' '}
                          <strong className="mx-2">Send me important updates on my <span className="cc-register-text-whatsapp mx-1"><FontAwesomeIcon icon={faWhatsapp} className="cc-icon-green mx-1" /> WhatsApp</span></strong>
                        </Label>
                      </div>
                    </Col>
                  </Row>
                  <div className="my-5">
                    {registerLoader
                        && <Spinner type="border" color="warning" />}
                    {!registerLoader && registerResponse.message !== '' && (
                      <span>
                        {registerResponse.error ? (
                          <span className="ww-register-err">
                            {registerResponse.errorMessage}
                          </span>
                        ) : null}
                      </span>
                    )}
                    <Button disabled={registerLoader} className="cc-register-exp-btn-filled">Register Me</Button>
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
              onClick={() => { setShowAlert(false); history('/login'); }}
            >
              <i className="fab-cc-register"><FontAwesomeIcon icon={faClose} /></i>
            </Button>
          </div>
          <div className="cc-register-modal-body">
            <p>You have successfully registered for CampusConnect. One Time Password has been sent to your registered Email for quick Login.<br /><br />Kindly Login to avail more features.</p>
          </div>
        </Modal>
      </Container>
    </React.Fragment>
  );
};

export default CampusConnectRegister;
