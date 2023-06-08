import {
  faIndianRupeeSign, faLocationArrow, faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Params, useParams } from 'react-router-dom';
import {
  Card, CardBody, CardHeader, CardImg, CardLink, CardSubtitle, CardTitle, Col, Container, Row,
} from 'reactstrap';
import { RootState } from 'typesafe-actions';
import WenexFooter from '../../../scenes/job-board/job-board.footer';
import { getJobPositonById } from '../../../store/job-board/actions';
import { APIHeaderEH } from '../../../utils/constants';
import { BreadcrumbsComponent } from '../../breadcrumb/breadcrumb.component';
import Loader from '../../loader/loader.component';
import JobDescription from '../job-description/job-description.component';
// import StarRating from '../star-rating/star-rating.component';
import './job-description-page.scss';
import blogData from './blogs.json';
import WnxNavBar from '../../wenex/navbar/wenex.navbar';

export const JobDescriptionPage: React.FC = () => {
  const readJobId: Readonly<Params<string>> = useParams();
  const dispatch = useDispatch();
  const [isJobDataCalled, setIsJobDataCalled] = useState(false);
  const jobDataById = useSelector((state: RootState) => state.jobBoard.jobPositionById);
  // const generatedToken = useSelector((state: RootState) => state.jobBoard.genToken);
  React.useEffect(() => {
    if (!isJobDataCalled && readJobId?.jobId) {
      dispatch(getJobPositonById({
        id: readJobId?.jobId, isPublic: 'YES', requestType: APIHeaderEH.REQ_GET_JOB_POSITION,
      }));
      setIsJobDataCalled(true);
    }
  }, [dispatch, readJobId.jobId, jobDataById?.jobData, isJobDataCalled]);
  const routeList = [
    { name: 'HOME', route: '/' },
    { name: 'Job Board'.toUpperCase(), route: '/job-board' },
    {
      name: 'Job Description'.toUpperCase(),
      route: `/job-board/${readJobId?.jobId}`,
      from: 'Job Board'.toUpperCase(),
    },
  ];
  return jobDataById === undefined
  || jobDataById?.jobData === undefined
  || readJobId?.jobId === undefined
    ? (<Loader />) : (
      <React.Fragment>
        <Container className="job-page-container">
          <WnxNavBar />
          <Row>
            <Col className="jd-top-row">
              <BreadcrumbsComponent routesList={routeList} />
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="7" lg="7">
              <div className="job-content">
                <Card
                  body
                  outline
                  color="light"
                  className="job-card-content"
                >
                  <CardHeader className="card-header">
                    {jobDataById?.jobData.jobName}
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col xs="4" lg="2">
                        {jobDataById?.jobData?.logoUrl ? (
                          <CardImg alt="logo" className="jb-card-img" src={jobDataById?.jobData?.logoUrl} />
                        ) : (
                          <CardImg alt="logo" className="jb-card-img" src="/images/common/broken-image.png" />
                        )}
                      </Col>
                      <Col xs="8" lg="10">
                        <CardTitle className="card-title">
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
                    <Row className="card-row-one">
                      <Col xs="4" className="col-left"> <FontAwesomeIcon icon={faIndianRupeeSign} className="card-icon" />
                        {jobDataById?.jobData.maxSalary === 0
                          ? (<span className="content-text">Not Disclosed</span>)
                          : (<span className="content-text">{jobDataById?.jobData.minExp} - {jobDataById?.jobData.maxSalary}/- </span>)}
                      </Col>
                      <Col xs="4" className="col-left"> <FontAwesomeIcon icon={faLocationArrow} className="card-icon" />
                        <span className="content-text">
                          {jobDataById?.jobData.jobLocations.join('/ ')}
                        </span>
                      </Col>
                      <Col xs="4" className="col-left">
                        <FontAwesomeIcon icon={faBriefcase} className="card-icon" />
                        <span className="content-text">
                          {jobDataById?.jobData.minExp} - {jobDataById?.jobData.maxExp} Years
                        </span>
                      </Col>
                    </Row>
                    <Row className="card-row-one">
                      <Col>
                        <span className="jd-page-header">Job Description</span>
                        <JobDescription jdData={jobDataById?.jobData} />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col xs="12" md="5" lg="5">
              <h5>Know about the Industry</h5>
              <Row>
                {blogData.map((blog) => (
                  <Col md="12" lg="12" key={blog.id}>
                    <Card className="blog-card">
                      <CardImg
                        className="blog-img"
                        alt={blog.title}
                        src={blog.img}
                      />
                      <CardBody>
                        <CardTitle className="blog-title">{blog.title}</CardTitle>
                        <CardSubtitle className="blog-subtitle">{blog.subtitle}</CardSubtitle>
                        <CardLink className="text-link" href={blog.url}>{blog.url}</CardLink>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="jb-footer">
          <WenexFooter />
        </div>
      </React.Fragment>
    );
};
export default JobDescriptionPage;
