import React, { useState } from 'react';
import {
  Button, Card, CardBody, CardHeader, CardImg, CardText, CardTitle, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase, faCaretRight, faCopy, faDotCircle, faIndianRupeeSign, faLocationArrow,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './list-jobs.scss';
import jwt_decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';
import { getJobPositonById, clearJobPositonById } from '../../../../../store/job-board/actions';
import { APIHeaderEH } from '../../../../../utils/constants';
import JobDescription from '../cc-job-details/job-description/job-desc.component';
import Loader from '../../../../loader/loader.component';
import { CCJobBoardProps } from './list-jobs.type';
import { getTokenFromLocalStorage } from '../../../../../utils/service/localstorage-service';

export const CCListJobs: React.FC<CCJobBoardProps> = ({ filteredJobData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const jobDataById = useSelector((state: RootState) => state.jobBoard.jobPositionById);
  // const generatedToken = useSelector((state: RootState) => state.jobBoard.genToken);
  const initTokenData = getTokenFromLocalStorage();// sessionStorage.getItem('token');
  const [tokenData, setTokenData] = useState('');
  React.useEffect(() => {
    if (initTokenData !== null) {
      const decodedToken : any = jwt_decode(initTokenData);
      if (decodedToken !== undefined || decodedToken !== null) {
        if (decodedToken.exp * 1000 < new Date().getTime()) {
          navigate('/login');
        } else {
          setTokenData(initTokenData);
        }
      }
    }
  }, [initTokenData]);

  const onClickViewDetails = (id: string) => {
    if (tokenData !== '') {
      dispatch(getJobPositonById({
        id, isPublic: 'YES', requestType: APIHeaderEH.REQ_GET_JOB_POSITION,
      }));
    }
    setModalOpen(!modalOpen);
  };
  const onClickModal = () => {
    setModalOpen(!modalOpen);
    dispatch(clearJobPositonById());
  };

  const jobDescriptionClick = (id: string) => {
    navigate(`/campus-connect/exclusive/job-board/${id}`);
  };

  return (filteredJobData.length === 0 ? (<Loader />) : (
    <div className="cc-list-job-jb-container">
      <Row className="cc-list-job-jb-card-margin">
        {filteredJobData.map((data) => (
          <Col key={data.id} lg="6">
            <Card
              body
              outline
              color="light"
              className="cc-list-job-card-content"
            >
              <CardHeader className="cc-list-job-card-header" onClick={() => { jobDescriptionClick(data.id); window.scrollTo(0, 0); }}>
                <Row>
                  <Col xs="11" lg="11" className="cc-list-job-col-left">
                    <span className="cc-list-job-job-title">{data.jobName}</span>
                  </Col>
                  <Col xs="1" lg="1" className="cc-list-job-col-right">
                    <FontAwesomeIcon icon={faCaretRight} className="cc-list-job-card-icon-arrow" />
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="4" lg="2">
                    {data.logoUrl ? (
                      <CardImg alt="logo" className="cc-list-job-jb-card-img" src={data.logoUrl} />
                    ) : (
                      <CardImg alt="logo" className="cc-list-job-jb-card-img" src="/images/common/broken-image.png" />
                    )}
                  </Col>
                  <Col xs="8" lg="10">
                    <CardTitle className="cc-list-job-card-title">{data.jobOrg}</CardTitle>
                  </Col>
                  {/* <Col className="cc-list-job-col-right"><StarRating /></Col> */}
                </Row>
                <Row className="cc-list-job-card-row-one pt-3">
                  <Col xs="4" className="cc-list-job-col-left">
                    <FontAwesomeIcon icon={faIndianRupeeSign} className="cc-list-job-card-icon" />
                    {(data.minSalary !== 0 || data.maxSalary !== 0) && data.maxSalary !== 0
                      ? <span className="cc-list-job-content-text">{data.minSalary} - {data.maxSalary} /-</span>
                      : <span className="cc-list-job-content-text">Not Disclosed</span>}
                  </Col>
                  <Col xs="4" className="cc-list-job-col-left">
                    <FontAwesomeIcon icon={faLocationArrow} className="cc-list-job-card-icon" />
                    <span className="cc-list-job-content-text">
                      {data.jobLocations.join(', ')}
                    </span>
                  </Col>
                  <Col xs="4" className="cc-list-job-col-left">
                    <FontAwesomeIcon icon={faBriefcase} className="cc-list-job-card-icon" />
                    <span className="cc-list-job-content-text">
                      {data.minExp} - {data.maxExp} years
                    </span>
                  </Col>
                </Row>
                <Row className="cc-list-job-card-row-one">
                  <Col className="cc-list-job-col-left">
                    <CardText className="cc-list-job-content-text-jd">
                      <FontAwesomeIcon icon={faCopy} className="cc-list-job-card-icon" />
                      <span>
                        {data.rolesResponsibility.map((res) => res.value)}
                      </span>
                    </CardText>
                  </Col>
                </Row>
                <div className="cc-list-job-content-keywords pt-3">
                  {data.skillsMustHave.map((skill, skillI) => (
                    <span key={skill + skillI.toString()}>
                      <FontAwesomeIcon icon={faDotCircle} className="cc-list-job-card-icon-bullet" />
                      <span className="cc-list-job-content-text-keywords">{ skill }</span>
                    </span>
                  ))}
                </div>
                <Row className="cc-list-job-card-row-one pt-4">
                  <Col className="cc-list-job-col-right">
                    <Button className="cc-list-job-card-button" onClick={() => onClickViewDetails(data.id)}>
                      Apply
                    </Button>
                    <Button className="cc-list-job-card-button" onClick={() => onClickViewDetails(data.id)}>
                      Save
                    </Button>
                    <Button className="cc-list-job-card-button" onClick={() => onClickViewDetails(data.id)}>
                      View Details
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal size="lg" isOpen={modalOpen} toggle={onClickModal} className="cc-list-job-card-modal">
        <ModalHeader toggle={onClickModal}>Job Description</ModalHeader>
        <ModalBody className="cc-list-job-card-modal-body">
          {jobDataById?.jobData === undefined
            ? (<Loader />
            ) : (
              <JobDescription jdData={jobDataById?.jobData} />
            )}
        </ModalBody>
        <ModalFooter>
          <Button className="cc-list-job-card-button" onClick={onClickModal}>
            <span className="cc-list-job-btn-text">Close</span>
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  ));
};

export default CCListJobs;
