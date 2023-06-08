import {
  faIndianRupeeSign, faLocationArrow, faBriefcase, faClose, faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Params, useParams, useNavigate, NavLink,
} from 'react-router-dom';
import {
  Button,
  Card, CardBody, CardHeader, CardImg, CardTitle, Col, Container, Row,
} from 'reactstrap';
import jwt_decode from 'jwt-decode';
import { RootState } from 'typesafe-actions';
import { getJobPositonById } from '../../../../../../store/job-board/actions';
import { APIHeaderEH } from '../../../../../../utils/constants';
import Loader from '../../../../../loader/loader.component';
import JobDescription from './job-description/job-desc.component';
// import StarRating from '../star-rating/star-rating.component';
import './job-desc-page.scss';
import { getTokenFromLocalStorage } from '../../../../../../utils/service/localstorage-service';
import { BreadcrumbsComponent } from '../../../../../breadcrumb/breadcrumb.component';

export const EHJobDescriptionPage: React.FC = () => {
  const navigate = useNavigate();
  const [clickJDEH, setClickJDEH] = React.useState(false);
  const readJobId: Readonly<Params<string>> = useParams();
  const dispatch = useDispatch();
  const [isJobDataCalled, setIsJobDataCalled] = useState(false);
  const jobDataById = useSelector((state: RootState) => state.jobBoard.jobPositionById);
  // const generatedToken = useSelector((state: RootState) => state.jobBoard.genToken);
  const tokenData = getTokenFromLocalStorage();// sessionStorage.getItem('token');
  // const [tokenData, setTokenData] = useState('');
  React.useEffect(() => {
    if (tokenData !== '') {
      const decodedToken : any = jwt_decode(tokenData);
      if (decodedToken !== undefined || decodedToken !== null) {
        if (decodedToken.exp * 1000 < new Date().getTime()) {
          navigate('/eaze-hire/login');
        } else if (!isJobDataCalled && readJobId?.jobId) {
          dispatch(getJobPositonById({
            id: readJobId?.jobId, isPublic: 'NO', token: tokenData, requestType: APIHeaderEH.REQ_GET_JOB_POSITION,
          }));
          setIsJobDataCalled(true);
        }
      }
    }
  }, [tokenData, dispatch, readJobId.jobId, jobDataById?.jobData, isJobDataCalled]);

  const routeList = [
    { name: 'Job Board'.toUpperCase(), route: '/eaze-hire/exclusive/job-board' },
    {
      name: 'Job Description'.toUpperCase(),
      route: `/eaze-hire/exclusive/job-board/${readJobId?.jobId}`,
      from: 'Job Board'.toUpperCase(),
    },
  ];

  const [changeIcon, setChangeIcon] = React.useState(false);
  const handleClick = () => {
    setChangeIcon(!changeIcon);
    setClickJDEH(!clickJDEH);
  };

  return jobDataById === undefined
  || jobDataById?.jobData === undefined
  || readJobId?.jobId === undefined
    ? (<Loader />) : (
      <Container className="job-page-container-eh pt-5">
        <Row>
          <Col className="cc-jd-top-row">
            <BreadcrumbsComponent routesList={routeList} />
          </Col>
        </Row>
        <Row className="pt-4">
          <Col lg={{ size: 8, order: 1 }} md={{ size: 8, order: 1 }} xs={{ order: 2 }}>
            <div className="job-content-eh">
              <Card
                body
                outline
                color="light"
                className="job-card-content-eh"
              >
                <CardHeader className="card-header-eh">
                  {jobDataById?.jobData.jobName}
                </CardHeader>
                <CardBody className="pt-4">
                  <Row className="pt-2">
                    <Col xs="4" lg="2">
                      {jobDataById?.jobData?.logoUrl ? (
                        <CardImg alt="logo" className="jb-card-img-eh" src={jobDataById?.jobData?.logoUrl} />
                      ) : (
                        <CardImg alt="logo" className="jb-card-img-eh" src="/images/common/broken-image.png" />
                      )}
                    </Col>
                    <Col xs="8" lg="10">
                      <CardTitle className="card-title-eh">
                        {jobDataById?.jobData?.jobForOrg?.value}
                      </CardTitle>
                    </Col>
                    {/* <Col className="col-right"><StarRating /></Col> */}
                  </Row>
                  {/* <Row>
                      <Col xs="2" lg="2" className="col-left">
                        {jobDataById?.jobData?.logoUrl ? (
                          <img defaultValue="d" alt="logo" className="jb-card-img" src={jobDataById?.jobData?.logoUrl} />
                        ) : (
                          <FontAwesomeIcon className="jb-card-img" icon={faImage} />
                        )}
                      </Col>
                      <Col xs="5" lg="7" className="col-left">
                        <CardTitle className="card-title">
                          {jobDataById?.jobData?.jobForOrg?.value}
                        </CardTitle>
                      </Col>
                      <Col className="col-right"><StarRating /></Col>
                    </Row> */}
                  <Row className="card-row-one-eh pt-4">
                    <Col xs="4" className="col-left-eh"> <FontAwesomeIcon icon={faIndianRupeeSign} className="card-icon-eh" />
                      {jobDataById?.jobData.maxSalary === 0
                        ? (<span className="content-text-eh">Not Disclosed</span>)
                        : (<span className="content-text-eh">{jobDataById?.jobData.minExp} - {jobDataById?.jobData.maxSalary}/- </span>)}
                    </Col>
                    <Col xs="4" className="col-left-eh"> <FontAwesomeIcon icon={faLocationArrow} className="card-icon-eh" />
                      <span className="content-text-eh">
                        {jobDataById?.jobData.jobLocations.join('/ ')}
                      </span>
                    </Col>
                    <Col xs="4" className="col-left-eh">
                      <FontAwesomeIcon icon={faBriefcase} className="card-icon-eh" />
                      <span className="content-text-eh">
                        {jobDataById?.jobData.minExp} - {jobDataById?.jobData.maxExp} Years
                      </span>
                    </Col>
                  </Row>
                  <Row className="card-row-one-eh pt-4">
                    <Col>
                      <span className="jd-page-header-eh">Job Description</span>
                      <JobDescription jdData={jobDataById?.jobData} />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col className="more-action-mobile-view">
            <ul className={clickJDEH ? 'eh-nav-menu-job-desc active' : 'eh-nav-menu-job-desc'}>
              <div className="eh-nav-item-job-desc">
                <Button className="eh-more-action-buttons">
                  Add Questionnaire
                </Button>
              </div>
              <div className="eh-nav-item-job-desc">
                <Button className="eh-more-action-buttons">
                  Screen Candidate
                </Button>
              </div>
              <div className="eh-nav-item-job-desc">
                <Button className="eh-more-action-buttons">
                  Initiate Interview
                </Button>
              </div>
            </ul>
            <div className="eh-column-job-desc-left">
              <h5 className="text-more-action-eh">More Action</h5>
            </div>
            <div className="eh-column-job-desc-right">
              <NavLink
                className="nav-icon1"
                onClick={() => { handleClick(); }}
                to="#"
              >
                {changeIcon ? <FontAwesomeIcon icon={faClose} className="eh-job-desc-close-btn" /> : <FontAwesomeIcon icon={faEllipsisVertical} className="eh-job-desc-open-btn" />}
              </NavLink>
            </div>
          </Col>
          <Col lg={{ size: 4, order: 2 }} md={{ size: 4, order: 2 }} xs={{ order: 1 }} className="more-action-desktop-view">
            <div className="eh-align-items-center-for-btn">
              <h5 className="text-more-action-eh">More Action</h5>
            </div>
            <Row className="eh-align-items-center-for-btn mx-1">
              <Col lg="12" md="12" xs="12" className="pt-3">
                <Button className="eh-more-action-buttons">
                  Add Questionnaire
                </Button>
              </Col>
              <Col lg="12" md="12" xs="12" className="pt-3">
                <Button className="eh-more-action-buttons">
                  Screen Candidate
                </Button>
              </Col>
              <Col lg="12" md="12" xs="12" className="pt-3">
                <Button className="eh-more-action-buttons">
                  Initiate Interview
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
};
export default EHJobDescriptionPage;
