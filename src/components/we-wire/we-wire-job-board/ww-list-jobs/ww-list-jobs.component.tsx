import React, { useState } from 'react';
import {
  Button, Card, CardBody, CardHeader, CardImg, CardText, CardTitle, Col, Container, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase, faCaretRight, faCopy, faDotCircle, faIndianRupeeSign, faLocationArrow, faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './ww-list-jobs.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';
import { getJobPositonById, clearJobPositonById } from '../../../../store/job-board/actions';
import { APIHeaderEH } from '../../../../utils/constants';
import Content from '../../../job-board/content/content.component';
import JobDescription from '../../../job-board/job-description/job-description.component';
import Loader from '../../../loader/loader.component';
import { WWJobBoardProps } from './ww-list-jobs.type';
import { JobsResultInfo } from '../../../../services/job-board/list-jobs/list-jobs.types';

export const WWListJobs: React.FC<WWJobBoardProps> = ({ filteredJobData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [modalOpen, setModalOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [applied, setApplied] = useState(false);
  const [appliedJobName, setAppliedJobName] = useState('');
  const jobDataById = useSelector((state: RootState) => state.jobBoard.jobPositionById);
  const generatedToken = useSelector((state: RootState) => state.jobBoard.genToken);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    emailId: '',
    currentAndExpectedCTC: '',
    highestQualification: '',
    resume: '',
  });
  const [filteredData, setFilteredData] = useState<JobsResultInfo[]>([]);

  React.useEffect(() => {
    if (filteredJobData.length) {
      setFilteredData(filteredJobData);
    }
  }, [filteredJobData.length]);

  const onClickViewDetails = (id: string) => {
    if (generatedToken.token !== '') {
      dispatch(getJobPositonById({ id, token: generatedToken.token, requestType: APIHeaderEH.REQ_GET_JOB_POSITION }));
    }
    setModalOpen(!modalOpen);
  };
  const onClickModal = () => {
    setModalOpen(!modalOpen);
    dispatch(clearJobPositonById());
  };
  const handleOnClickApply = (id: string, jobName: string) => {
    setAppliedJobName(jobName);
    setApplyModalOpen(!applyModalOpen);
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
  const handleKeywordsSearchChange = (e:any) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      setFilteredData(filteredJobData);
    }
  };
  const handleSearchChange = () => {
    if (searchTerm) {
      setFilteredData(filteredJobData.filter((row) => (
        Object.values(row)
          .flat()
          .some((val) => `${val}`.toLowerCase().includes(`${searchTerm}`.toLowerCase()))
      )));
    }
  };

  return (filteredData.length === 0 ? (<Loader />) : (
    <Container fluid className="ww-list-job-jb-container">
      <Row>
        <Col xs="12" lg="4" className="ww-list-job-col-left">
          <Input
            type="text"
            className="ww-search-bar-jb"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleKeywordsSearchChange}
          />
          <FontAwesomeIcon icon={faSearch} className="ww-search-icon" onClick={handleSearchChange} />
        </Col>
      </Row>
      <Row>
        {filteredData.map((data) => (
          <Col key={data.id} lg="6">
            <Card
              body
              outline
              color="light"
              className="ww-list-job-card-content"
            >
              <CardHeader className="ww-list-job-card-header" onClick={() => { jobDescriptionClick(data.id); window.scrollTo(0, 0); }}>
                <Row>
                  <Col xs="11" lg="11" className="ww-list-job-col-left">
                    <span className="ww-list-job-job-title">{data.jobName}</span>
                  </Col>
                  <Col xs="1" lg="1" className="ww-list-job-col-right">
                    <FontAwesomeIcon icon={faCaretRight} className="ww-list-job-card-icon-arrow" />
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="4" lg="2">
                    {data.logoUrl ? (
                      <CardImg alt="logo" className="ww-list-job-jb-card-img" src={data.logoUrl} />
                    ) : (
                      <CardImg alt="logo" className="ww-list-job-jb-card-img" src="/images/common/broken-image.png" />
                    )}
                  </Col>
                  <Col xs="8" lg="10">
                    <CardTitle className="ww-list-job-card-title">{data.jobOrg}</CardTitle>
                  </Col>
                  {/* <Col className="ww-list-job-col-right"><StarRating /></Col> */}
                </Row>
                <Row className="ww-list-job-card-row-one pt-3">
                  <Col xs="4" className="ww-list-job-col-left">
                    <FontAwesomeIcon icon={faIndianRupeeSign} className="ww-list-job-card-icon" />
                    {(data.minSalary !== 0 || data.maxSalary !== 0) && data.maxSalary !== 0
                      ? <span className="ww-list-job-content-text">{data.minSalary} - {data.maxSalary} /-</span>
                      : <span className="ww-list-job-content-text">Not Disclosed</span>}
                  </Col>
                  <Col xs="4" className="ww-list-job-col-left">
                    <FontAwesomeIcon icon={faLocationArrow} className="ww-list-job-card-icon" />
                    <span className="ww-list-job-content-text">
                      {data.jobLocations.join(', ')}
                    </span>
                  </Col>
                  <Col xs="4" className="ww-list-job-col-left">
                    <FontAwesomeIcon icon={faBriefcase} className="ww-list-job-card-icon" />
                    <span className="ww-list-job-content-text">
                      {data.minExp} - {data.maxExp} years
                    </span>
                  </Col>
                </Row>
                <Row className="ww-list-job-card-row-one">
                  <Col className="ww-list-job-col-left">
                    <CardText className="ww-list-job-content-text-jd">
                      <FontAwesomeIcon icon={faCopy} className="ww-list-job-card-icon" />
                      <span>
                        {data.rolesResponsibility.map((res) => res.value)}
                      </span>
                    </CardText>
                  </Col>
                </Row>
                <div className="ww-list-job-content-keywords pt-3">
                  {data.skillsMustHave.map((skill, skillI) => (
                    <span key={skill + skillI.toString()}>
                      <FontAwesomeIcon icon={faDotCircle} className="ww-list-job-card-icon-bullet" />
                      <span className="ww-list-job-content-text-keywords">{ skill }</span>
                    </span>
                  ))}
                </div>
                <Row className="ww-list-job-card-row-one pt-2">
                  <Col className="ww-list-job-col-right">
                    <Button className="ww-list-job-card-button" onClick={() => handleOnClickApply(data.id, data.jobName)}>
                      Apply
                    </Button>
                    <Button className="ww-list-job-card-button">
                      Save
                    </Button>
                    <Button className="ww-list-job-card-button" onClick={() => onClickViewDetails(data.id)}>
                      View Details
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal size="lg" isOpen={modalOpen} toggle={onClickModal} className="ww-list-job-card-modal">
        <ModalHeader toggle={onClickModal}>Job Description</ModalHeader>
        <ModalBody>
          {jobDataById?.jobData === undefined
            ? (<Loader />
            ) : (
              <JobDescription jdData={jobDataById?.jobData} />
            )}
        </ModalBody>
        <ModalFooter>
          <Button className="ww-list-job-card-button" onClick={onClickModal}>
            <span className="ww-list-job-btn-text">Close</span>
          </Button>
        </ModalFooter>
      </Modal>
      <Modal size="lg" isOpen={applyModalOpen} toggle={handleApplyJobClose} className="ww-list-job-card-modal">
        <ModalHeader toggle={handleApplyJobClose}>Job Title : {appliedJobName}
        </ModalHeader>
        <ModalBody>
          {applied ? (
            <span>Your application has been  submitted successfully. An email confirmation has also been sent to your inbox. </span>
          ) : (
            <Form>
              <div className="ww-list-job-apply-modal"> Fill the below details to Apply :</div>
              <Input
                placeholder="Full Name"
                type="text"
                className="ww-list-job-jb-input-contact"
                value={applicationData.fullName}
                onChange={handleNameChange}
              />

              <Input
                placeholder="Email Id"
                className="ww-list-job-jb-input-contact"
                type="text"
                value={applicationData.emailId}
                onChange={handleEmailChange}
              />

              <Input
                placeholder="Current and Expected CTC"
                type="text"
                className="ww-list-job-jb-input-contact"
                value={applicationData.currentAndExpectedCTC}
                onChange={handleCurrentAndExpectedctcChange}
              />
              <Input
                placeholder="Highest Qualification"
                className="ww-list-job-jb-input-contact"
                type="text"
                value={applicationData.highestQualification}
                onChange={handlehighestQualifiChange}
              />
              <Label className="ww-list-job-jb-upload-label">
                Upload Resume
                <Input className="ww-list-job-jb-resume-upload" type="file" onChange={handleResumeChange} />
              </Label>

            </Form>
          )}
        </ModalBody>
        <ModalFooter>
          {!applied ? (
            <Button className="ww-list-job-card-button" onClick={handleSubmitApplyModal}>
              Apply
            </Button>
          ) : (
            null
          )}
        </ModalFooter>
      </Modal>
    </Container>
  ));
};

export default Content;
