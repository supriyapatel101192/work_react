import {
  faIndianRupeeSign, faLocationArrow, faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Params, useParams, useNavigate,
} from 'react-router-dom';
import {
  Card, CardBody, CardHeader, CardImg, CardTitle, Col, Container, Row,
} from 'reactstrap';
import jwt_decode from 'jwt-decode';
import { RootState } from 'typesafe-actions';
import { getJobPositonById } from '../../../../../store/job-board/actions';
import { APIHeaderEH } from '../../../../../utils/constants';
import Loader from '../../../../loader/loader.component';
import JobDescription from './job-description/job-desc.component';
// import StarRating from '../star-rating/star-rating.component';
import './job-desc-page.scss';
import { getTokenFromLocalStorage } from '../../../../../utils/service/localstorage-service';
import { BreadcrumbsComponent } from '../../../../breadcrumb/breadcrumb.component';

export const CCJobDescriptionPage: React.FC = () => {
  const navigate = useNavigate();
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
          navigate('/login');
        } else if (!isJobDataCalled && readJobId?.jobId) {
          dispatch(getJobPositonById({
            id: readJobId?.jobId, isPublic: 'YES', requestType: APIHeaderEH.REQ_GET_JOB_POSITION,
          }));
          setIsJobDataCalled(true);
        }
      }
    }
  }, [tokenData, dispatch, readJobId.jobId, jobDataById?.jobData, isJobDataCalled]);

  const routeList = [
    { name: 'Job Board'.toUpperCase(), route: '/campus-connect/exclusive/job-board' },
    {
      name: 'Job Description'.toUpperCase(),
      route: `/campus-connect/exclusive/job-board/${readJobId?.jobId}`,
      from: 'Job Board'.toUpperCase(),
    },
  ];

  return jobDataById === undefined
  || jobDataById?.jobData === undefined
  || readJobId?.jobId === undefined
    ? (<Loader />) : (
      <Container className="job-page-container-cc pt-5">
        <Row>
          <Col className="cc-jd-top-row">
            <BreadcrumbsComponent routesList={routeList} />
          </Col>
        </Row>
        <Row className="pt-3">
          <Col lg={{ size: 8, order: 1 }} md={{ size: 8, order: 1 }} xs={{ order: 1 }}>
            <div className="job-content-cc">
              <Card
                body
                outline
                color="light"
                className="job-card-content-cc"
              >
                <CardHeader className="card-header-cc">
                  {jobDataById?.jobData.jobName}
                </CardHeader>
                <CardBody className="pt-4">
                  <Row className="pt-2">
                    <Col xs="4" lg="2">
                      {jobDataById?.jobData?.logoUrl ? (
                        <CardImg alt="logo" className="jb-card-img-cc" src={jobDataById?.jobData?.logoUrl} />
                      ) : (
                        <CardImg alt="logo" className="jb-card-img-cc" src="/images/common/broken-image.png" />
                      )}
                    </Col>
                    <Col xs="8" lg="10">
                      <CardTitle className="card-title-cc">
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
                  <Row className="card-row-one-cc pt-4">
                    <Col xs="4" className="col-left-cc"> <FontAwesomeIcon icon={faIndianRupeeSign} className="card-icon-cc" />
                      {jobDataById?.jobData.maxSalary === 0
                        ? (<span className="content-text-cc">Not Disclosed</span>)
                        : (<span className="content-text-cc">{jobDataById?.jobData.minExp} - {jobDataById?.jobData.maxSalary}/- </span>)}
                    </Col>
                    <Col xs="4" className="col-left-cc"> <FontAwesomeIcon icon={faLocationArrow} className="card-icon-cc" />
                      <span className="content-text-cc">
                        {jobDataById?.jobData.jobLocations.join('/ ')}
                      </span>
                    </Col>
                    <Col xs="4" className="col-left-cc">
                      <FontAwesomeIcon icon={faBriefcase} className="card-icon-cc" />
                      <span className="content-text-cc">
                        {jobDataById?.jobData.minExp} - {jobDataById?.jobData.maxExp} Years
                      </span>
                    </Col>
                  </Row>
                  <Row className="card-row-one-cc pt-4">
                    <Col>
                      <span className="jd-page-header-cc">Job Description</span>
                      <JobDescription jdData={jobDataById?.jobData} />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col lg={{ size: 4, order: 2 }} md={{ size: 4, order: 2 }} xs={{ order: 2 }}>
            <div className="cc-align-items-center-for-btn">
              <h5 className="text-more-action-cc">More Action</h5>
            </div>
            <Row className="cc-align-items-center-for-btn mx-1">
              <Col lg="12" md="12" xs="12" className="pt-3">
                Adv
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
};
export default CCJobDescriptionPage;
