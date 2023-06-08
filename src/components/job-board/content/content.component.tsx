import React, { useState } from 'react';
import classNames from 'classnames';
import {
  Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Container, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignLeft,
  faBriefcase, faCaretRight, faCopy, faDotCircle, faIndianRupeeSign, faLocationArrow,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './content.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';
import Loader from '../../loader/loader.component';
// import StarRating from '../star-rating/star-rating.component';
import JobDescription from '../job-description/job-description.component';
import { ContentProps } from './content.type';
import { clearJobPositonById, getJobPositonById } from '../../../store/job-board/actions';
import { APIHeaderEH } from '../../../utils/constants';
import { BreadcrumbsComponent } from '../../breadcrumb/breadcrumb.component';

export const Content: React.FC<ContentProps> = ({
  jobData, sidebarIsOpen, toggleSidebar, loading, isNoData,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, setFilteredData] = useState(jobData);
  const [modalOpen, setModalOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [applied, setApplied] = useState(false);
  const [appliedJobName, setAppliedJobName] = useState('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const jobDataById = useSelector((state: RootState) => state.jobBoard.jobPositionById);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    emailId: '',
    currentAndExpectedCTC: '',
    highestQualification: '',
    resume: '',
  });
  React.useEffect(() => {
    if (jobData.length > 0) {
      setFilteredData(jobData);
    }
  }, [jobData.length]);
  const handleKeywordsSearchChange = (e:any) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      setFilteredData(jobData);
    }
  };

  const handleSearchChange = () => {
    if (searchTerm) {
      setFilteredData(jobData.filter((row) => (
        Object.values(row)
          .flat()
          .some((val) => `${val}`.toLowerCase().includes(`${searchTerm}`.toLowerCase()))
      )));
    }
  };
  const onClickViewDetails = (id: string) => {
    dispatch(getJobPositonById({ id, isPublic: 'YES', requestType: APIHeaderEH.REQ_GET_JOB_POSITION }));
    setModalOpen(!modalOpen);
  };
  const onClickModal = () => {
    setModalOpen(!modalOpen);
    dispatch(clearJobPositonById());
  };
  const handleOnClickApply = (id: string, jobName: string) => {
    navigate('/register');
    setAppliedJobName(jobName);
  };
  const handleOnClickSave = (id: string, jobName: string) => {
    navigate('/register');
    setAppliedJobName(jobName);
  };
  const handleSubmitApplyModal = () => {
    setApplied(true);
  };
  const handleApplyJobClose = () => {
    setApplyModalOpen(!applyModalOpen);
    setApplied(false);
    setApplicationData({
      fullName: '',
      emailId: '',
      currentAndExpectedCTC: '',
      highestQualification: '',
      resume: '',
    });
  };
  const handleNameChange = (e: any) => {
    setApplicationData({ ...applicationData, fullName: e.target.value });
  };
  const handleEmailChange = (e: any) => {
    setApplicationData({ ...applicationData, emailId: e.target.value });
  };
  const handleCurrentAndExpectedctcChange = (e: any) => {
    setApplicationData({ ...applicationData, currentAndExpectedCTC: e.target.value });
  };
  const handlehighestQualifiChange = (e: any) => {
    setApplicationData({ ...applicationData, highestQualification: e.target.value });
  };
  const handleResumeChange = (e: any) => {
    setApplicationData({ ...applicationData, resume: e.target.files[0].name });
  };
  const jobDescriptionClick = (id: string) => {
    navigate(`/job-board/${id}`);
  };
  const routeList = [
    { name: 'HOME', route: '/' },
    { name: 'JOB BOARD', route: '/job-board' },
  ];
  return (
    <Container
      fluid
      className={classNames('content', { 'is-open': sidebarIsOpen })}
    >
      <Row className="row-top pt-2">
        <Col>
          <BreadcrumbsComponent routesList={routeList} />
        </Col>
      </Row>
      <Row>
        <Col lg="6" className="col-left">
          <Button className="jb-toggle" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faAlignLeft} />
          </Button>
          <Input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleKeywordsSearchChange}
          />
          <Button className="card-button" onClick={handleSearchChange}>
            <span className="btn-text">Search</span>
          </Button>
        </Col>
        {/* <Col xs="1" lg="1">
        </Col> */}
      </Row>
      <Row className="jb-card-margin">
        {loading ? <Loader /> : null}
        {jobData.length > 0
          ? jobData.map((data) => (
            <Col key={data.id} lg="6">
              <Card
                body
                outline
                color="light"
                className="card-content"
              >
                <CardHeader className="card-header" onClick={() => { jobDescriptionClick(data.id); window.scrollTo(0, 0); }}>
                  <Row>
                    <Col className="col-left">
                      <span className="job-title">{data.jobName}</span>
                    </Col>
                    <Col xs="1" lg="1" className="col-right">
                      <FontAwesomeIcon icon={faCaretRight} className="card-icon-arrow" />
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs="4" lg="2">
                      {data.logoUrl ? (
                        <img alt="logo" className="jb-card-img" src={data.logoUrl} />
                      ) : (
                        <img alt="logo" className="jb-card-img" src="/images/common/broken-image.png" />
                      )}
                    </Col>
                    <Col xs="8" lg="10">
                      <CardTitle className="card-title">{data.jobOrg}</CardTitle>
                    </Col>
                    {/* <Col className="col-right"><StarRating /></Col> */}
                  </Row>
                  <Row className="card-row-one pt-3">
                    <Col xs="4" className="col-left">
                      <FontAwesomeIcon icon={faIndianRupeeSign} className="card-icon" />
                      {(data.minSalary !== 0 || data.maxSalary !== 0) && data.maxSalary !== 0
                        ? <span className="content-text">{data.minSalary} - {data.maxSalary} /-</span>
                        : <span className="content-text">Not Disclosed</span>}
                    </Col>
                    <Col xs="4" className="col-left">
                      <FontAwesomeIcon icon={faLocationArrow} className="card-icon" />
                      <span className="content-text">
                        {data.jobLocations.join(', ')}
                      </span>
                    </Col>
                    <Col xs="4" className="col-left">
                      <FontAwesomeIcon icon={faBriefcase} className="card-icon" />
                      <span className="content-text">
                        {data.minExp} - {data.maxExp} years
                      </span>
                    </Col>
                  </Row>
                  <Row className="card-row-one">
                    <Col className="col-left">
                      <CardText className="content-text-jd">
                        <FontAwesomeIcon icon={faCopy} className="card-icon" />
                        <span>
                          {data.rolesResponsibility.map((res) => res.value)}
                        </span>
                      </CardText>
                    </Col>
                  </Row>
                  <div className="content-keywords pt-3">
                    {data.skillsMustHave.map((skill, skillI) => (
                      <span key={skill + skillI.toString()}>
                        <FontAwesomeIcon icon={faDotCircle} className="card-icon-bullet" />
                        <span className="content-text-keywords">{ skill }</span>
                      </span>
                    ))}
                  </div>
                  <Row className="card-row-one pt-2">
                    <Col className="col-right">
                      <Button className="card-button" onClick={() => handleOnClickApply(data.id, data.jobName)}>
                        Apply
                      </Button>
                      <Button className="card-button" onClick={() => handleOnClickSave(data.id, data.jobName)}>
                        Save
                      </Button>
                      <Button className="card-button" onClick={() => onClickViewDetails(data.id)}>
                        View Details
                      </Button>
                    </Col>
                    {/* <Col xs="4" lg="8" className="col-right">
                    <Button className="card-button" onClick={() => handleOnClickApply(data.id, data.jobName)}>
                      <span className="btn-text">Apply</span>
                    </Button>
                  </Col>
                  <Col xs="4" lg="2" className="col-center">
                    <Button className="card-button">
                      <span className="btn-text">Save</span>
                    </Button>
                  </Col>
                  <Col xs="4" lg="2" className="col-left">
                    <Button className="card-button" onClick={() => onClickViewDetails(data.id)}>
                      <span className="btn-text">View Details</span>
                    </Button>
                  </Col> */}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          ))
          : null }
        {jobData.length === 0 && isNoData
          ? (
            <Row className="jb-centered">
              <h4 className="jb-text-no-found">No Records Available</h4>
            </Row>
          ) : null }

      </Row>
      <Modal size="lg" isOpen={modalOpen} toggle={onClickModal} className="card-modal">
        <ModalHeader toggle={onClickModal}>Job Description</ModalHeader>
        <ModalBody>
          {jobDataById?.jobData === undefined
            ? (<Loader />
            ) : (
              <JobDescription jdData={jobDataById?.jobData} />
            )}
        </ModalBody>
        <ModalFooter>
          <Button className="card-button" onClick={onClickModal}>
            <span className="btn-text">Close</span>
          </Button>
        </ModalFooter>
      </Modal>
      <Modal size="lg" isOpen={applyModalOpen} toggle={handleApplyJobClose} className="card-modal">
        <ModalHeader toggle={handleApplyJobClose}>Job Title : {appliedJobName}
        </ModalHeader>
        <ModalBody>
          {applied ? (
            <span>Your application has been  submitted successfully. An email confirmation has also been sent to your inbox. </span>
          ) : (
            <Form>
              <div className="apply-modal"> Fill the below details to Apply :</div>
              <Input
                placeholder="Full Name"
                type="text"
                className="jb-input-contact"
                value={applicationData.fullName}
                onChange={handleNameChange}
              />

              <Input
                placeholder="Email Id"
                className="jb-input-contact"
                type="text"
                value={applicationData.emailId}
                onChange={handleEmailChange}
              />

              <Input
                placeholder="Current and Expected CTC"
                type="text"
                className="jb-input-contact"
                value={applicationData.currentAndExpectedCTC}
                onChange={handleCurrentAndExpectedctcChange}
              />
              <Input
                placeholder="Highest Qualification"
                className="jb-input-contact"
                type="text"
                value={applicationData.highestQualification}
                onChange={handlehighestQualifiChange}
              />
              <Label className="jb-upload-label">
                Upload Resume
                <Input className="jb-resume-upload" type="file" onChange={handleResumeChange} />
              </Label>

            </Form>
          )}
        </ModalBody>
        <ModalFooter>
          {!applied ? (
            <Button className="card-button" onClick={handleSubmitApplyModal}>
              Apply
            </Button>
          ) : (
            null
          )}
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default Content;
