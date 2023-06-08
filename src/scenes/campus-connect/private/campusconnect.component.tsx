import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  NavLink, Routes, Route,
} from 'react-router-dom';
import {
  Col, Container, Row,
} from 'reactstrap';
import { RootState } from 'typesafe-actions';
// import CalendarComponent from '../../../components/we-wire/we-wire-dashboard/calendar-bar/calendar-bar.component';
import EHSideDrawer from '../../../components/campus-connect/exclusive/side-drawer/side-drawer.component';
// import { WWProfile } from '../../../components/we-wire/we-wire-dashboard/we-wire-profile/ww-profile.component';
import { CCJobBoard } from '../../../components/campus-connect/exclusive/cc-job-board/job-board/job-board.component';
import { JobsResultInfo } from '../../../services/job-board/list-jobs/list-jobs.types';
import { getAllJobs } from '../../../store/job-board/actions';
import { UserType, APIHeaderEH } from '../../../utils/constants';
import './campusconnect.scss';
import CCJobDescriptionPage from '../../../components/campus-connect/exclusive/cc-job-board/cc-job-details/job-desc-page.component';
import { getTokenFromLocalStorage } from '../../../utils/service/localstorage-service';
import { CCProfile } from '../../../components/campus-connect/exclusive/dashboard/campus-connect-profile/cc-profile.component';
import CCResumeDetails from '../../../components/campus-connect/exclusive/cc-resume/cc-resume-details/cc-resume-navbar-component';
import { VideoDetails } from '../../../components/campus-connect/exclusive/video-meet/video.details.component';
import { CalendarDetails } from '../../../components/campus-connect/exclusive/calendar/calendar.component';

export const CCPrivateComponent: React.FC = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [clickEHComponent, setClickEHComponent] = React.useState(false);
  const [jobData, setJobData] = useState<JobsResultInfo[]>([]);
  const [filteredData, setFilteredData] = useState(jobData);
  const [dataSet, setDataSet] = useState(false);
  const jobDataList = useSelector((state: RootState) => state.jobBoard.listJobs);
  const tokenData = getTokenFromLocalStorage(); // sessionStorage.getItem('token');
  React.useEffect(() => {
    if (tokenData !== '') {
      const decodedToken: any = jwt_decode(tokenData);
      if (decodedToken !== undefined || decodedToken !== null) {
        if (decodedToken.exp * 1000 < new Date().getTime()) {
          history('/login');
        }
      }
    }
  }, [tokenData]);
  React.useEffect(() => {
    if (jobData.length > 0) {
      setFilteredData(jobData);
    }
  }, [jobData.length]);
  React.useEffect(() => {
    if (tokenData !== '') {
      dispatch(getAllJobs({
        userType: UserType.WX, isPublic: 'YES', requestType: APIHeaderEH.REQ_GET_ALL_JOB_POSITION,
      }));
    }
    if (!dataSet && jobDataList.jobInfo.length) {
      setJobData(jobDataList.jobInfo);
      setDataSet(true);
    }
  }, [dispatch, tokenData, jobDataList.jobInfo.length, dataSet]);

  const [menuCollapse, setMenuCollapse] = useState(false);
  const [changeIcon, setChangeIcon] = React.useState(false);

  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  };
  const handleClick = () => {
    setChangeIcon(!changeIcon);
    setClickEHComponent(!clickEHComponent);
  };
  return (
    tokenData !== ''
      ? (
        <Container className="cc-nav-container-eh">
          <Row className="cc-top-row">
            <Col className="nav-icon-sidebar-eh mx-3 my-3 cc-logo-float-right">
              <img style={{ width: '200px' }} src="/images/campusconnect/cc-logo-dark.png" alt="eazehireLogo" />
            </Col>
            <Col className="nav-icon-sidebar-cc-mobile my-3 pt-2">
              <div className="cc-row-header-nav">
                <div className="cc-column-header-nav-left">
                  <img style={{ width: '200px' }} src="/images/campusconnect/cc-logo-dark.png" alt="eazehireLogo" />
                </div>
                <div className="cc-column-header-nav-right">
                  <NavLink
                    className="nav-icon"
                    onClick={() => { handleClick(); }}
                    to="#"
                  >
                    {changeIcon ? <FontAwesomeIcon icon={faClose} className="nav-close-btn-eh" /> : <FontAwesomeIcon icon={faBars} className="nav-open-btn-eh" />}
                  </NavLink>
                </div>
                <ul className={clickEHComponent ? 'cc-nav-menu-component active' : 'cc-nav-menu-component'}>
                  <li className="cc-nav-item-component">
                    <span className="nav-text-wejobs">Put All links</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          {menuCollapse ? (
            <Row>
              <Col lg="1" className="nav-icon-sidebar-eh">
                <EHSideDrawer menuCollapse={menuCollapse} menuIconClick={menuIconClick} />
              </Col>
              <Col lg="11" className="pt-3">
                <Routes>
                  <Route path="dashboard" element={<CCProfile />} />
                  <Route path="" element={<CCJobBoard filteredJobData={filteredData} />} />
                  <Route path="job-board" element={<CCJobBoard filteredJobData={filteredData} />} />
                  <Route path="job-board/:jobId" element={<CCJobDescriptionPage />} />
                  <Route path="cc-resume" element={<CCResumeDetails />} />
                  <Route path="video-meeting" element={<VideoDetails />} />
                  <Route path="calendar" element={<CalendarDetails />} />
                  {/* <Route path="profile" element={<WWProfile />} />
                      <Route path="calendar" element={<CalendarComponent />} />
                      <Route path="saved-jobs" element={<>savedJobs</>} /> */}
                </Routes>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col lg="2" className="nav-icon-sidebar-eh">
                <EHSideDrawer menuCollapse={menuCollapse} menuIconClick={menuIconClick} />
              </Col>
              <Col lg="10" className="pt-3">
                <Routes>
                  <Route path="dashboard" element={<CCProfile />} />
                  <Route path="" element={<CCJobBoard filteredJobData={filteredData} />} />
                  <Route path="job-board" element={<CCJobBoard filteredJobData={filteredData} />} />
                  <Route path="job-board/:jobId" element={<CCJobDescriptionPage />} />
                  <Route path="cc-resume" element={<CCResumeDetails />} />
                  <Route path="video-meeting" element={<VideoDetails />} />
                  <Route path="calendar" element={<CalendarDetails />} />
                  {/* <Route path="profile" element={<WWProfile />} />
                    <Route path="saved-jobs" element={<>savedJobs</>} /> */}
                </Routes>
              </Col>
            </Row>
          )}
        </Container>
      )
      : (
        <Container>
          <Row className="cc-unauthorized-centered">
            <h3 className="cc-unauthorized-text">You are not Authorized to view this page</h3>
          </Row>
        </Container>
      )
  );
};
