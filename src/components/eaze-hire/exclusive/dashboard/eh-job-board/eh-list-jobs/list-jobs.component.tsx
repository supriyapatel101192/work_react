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
import { getJobPositonById, clearJobPositonById } from '../../../../../../store/job-board/actions';
import { APIHeaderEH } from '../../../../../../utils/constants';
import JobDescription from '../eh-job-details/job-description/job-desc.component';
import Loader from '../../../../../loader/loader.component';
import { EHJobBoardProps } from './list-jobs.type';
import { getTokenFromLocalStorage } from '../../../../../../utils/service/localstorage-service';

export const EHListJobs: React.FC<EHJobBoardProps> = ({ filteredJobData }) => {
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
          navigate('/eaze-hire/login');
        } else {
          setTokenData(initTokenData);
        }
      }
    }
  }, [initTokenData]);

  const onClickViewDetails = (id: string) => {
    if (tokenData !== '') {
      dispatch(getJobPositonById({
        id, isPublic: 'NO', token: tokenData, requestType: APIHeaderEH.REQ_GET_JOB_POSITION,
      }));
    }
    setModalOpen(!modalOpen);
  };
  const onClickModal = () => {
    setModalOpen(!modalOpen);
    dispatch(clearJobPositonById());
  };

  const jobDescriptionClick = (id: string) => {
    navigate(`/eaze-hire/exclusive/job-board/${id}`);
  };

  return (filteredJobData.length === 0 ? (<Loader />) : (
    <div className="eh-list-job-jb-container">
      <Row className="eh-list-job-jb-card-margin">
        {filteredJobData.map((data) => (
          <Col key={data.id} lg="6">
            <Card
              body
              outline
              color="light"
              className="eh-list-job-card-content"
            >
              <CardHeader className="eh-list-job-card-header" onClick={() => { jobDescriptionClick(data.id); window.scrollTo(0, 0); }}>
                <Row>
                  <Col xs="11" lg="11" className="eh-list-job-col-left">
                    <span className="eh-list-job-job-title">{data.jobName}</span>
                  </Col>
                  <Col xs="1" lg="1" className="eh-list-job-col-right">
                    <FontAwesomeIcon icon={faCaretRight} className="eh-list-job-card-icon-arrow" />
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="4" lg="2">
                    {data.logoUrl ? (
                      <CardImg alt="logo" className="eh-list-job-jb-card-img" src={data.logoUrl} />
                    ) : (
                      <CardImg alt="logo" className="eh-list-job-jb-card-img" src="/images/common/broken-image.png" />
                    )}
                  </Col>
                  <Col xs="8" lg="10">
                    <CardTitle className="eh-list-job-card-title">{data.jobOrg}</CardTitle>
                  </Col>
                  {/* <Col className="eh-list-job-col-right"><StarRating /></Col> */}
                </Row>
                <Row className="eh-list-job-card-row-one pt-3">
                  <Col xs="4" className="eh-list-job-col-left">
                    <FontAwesomeIcon icon={faIndianRupeeSign} className="eh-list-job-card-icon" />
                    {(data.minSalary !== 0 || data.maxSalary !== 0) && data.maxSalary !== 0
                      ? <span className="eh-list-job-content-text">{data.minSalary} - {data.maxSalary} /-</span>
                      : <span className="eh-list-job-content-text">Not Disclosed</span>}
                  </Col>
                  <Col xs="4" className="eh-list-job-col-left">
                    <FontAwesomeIcon icon={faLocationArrow} className="eh-list-job-card-icon" />
                    <span className="eh-list-job-content-text">
                      {data.jobLocations.join(', ')}
                    </span>
                  </Col>
                  <Col xs="4" className="eh-list-job-col-left">
                    <FontAwesomeIcon icon={faBriefcase} className="eh-list-job-card-icon" />
                    <span className="eh-list-job-content-text">
                      {data.minExp} - {data.maxExp} years
                    </span>
                  </Col>
                </Row>
                <Row className="eh-list-job-card-row-one">
                  <Col className="eh-list-job-col-left">
                    <CardText className="eh-list-job-content-text-jd">
                      <FontAwesomeIcon icon={faCopy} className="eh-list-job-card-icon" />
                      <span>
                        {data.rolesResponsibility.map((res) => res.value)}
                      </span>
                    </CardText>
                  </Col>
                </Row>
                <div className="eh-list-job-content-keywords pt-3">
                  {data.skillsMustHave.map((skill, skillI) => (
                    <span key={skill + skillI.toString()}>
                      <FontAwesomeIcon icon={faDotCircle} className="eh-list-job-card-icon-bullet" />
                      <span className="eh-list-job-content-text-keywords">{ skill }</span>
                    </span>
                  ))}
                </div>
                <Row className="eh-list-job-card-row-one pt-2">
                  <Col className="eh-list-job-col-right">
                    <Button className="eh-list-job-card-button" onClick={() => onClickViewDetails(data.id)}>
                      View Details
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal size="lg" isOpen={modalOpen} toggle={onClickModal} className="eh-list-job-card-modal">
        <ModalHeader toggle={onClickModal}>Job Description</ModalHeader>
        <ModalBody className="eh-list-job-card-modal-body">
          {jobDataById?.jobData === undefined
            ? (<Loader />
            ) : (
              <JobDescription jdData={jobDataById?.jobData} />
            )}
        </ModalBody>
        <ModalFooter>
          <Button className="eh-list-job-card-button" onClick={onClickModal}>
            <span className="eh-list-job-btn-text">Close</span>
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  ));
};

export default EHListJobs;
