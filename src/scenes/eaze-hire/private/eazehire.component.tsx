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
import EHSideDrawer from '../../../components/eaze-hire/exclusive/dashboard/side-drawer/side-drawer.component';
// import { WWProfile } from '../../../components/we-wire/we-wire-dashboard/we-wire-profile/ww-profile.component';
import { EHJobBoard } from '../../../components/eaze-hire/exclusive/dashboard/eh-job-board/job-board/job-board.component';
import { JobsResultInfo } from '../../../services/job-board/list-jobs/list-jobs.types';
import { getAllJobs } from '../../../store/job-board/actions';
import { UserType, APIHeaderEH } from '../../../utils/constants';
import './eazehire.scss';
import EHJobDescriptionPage from '../../../components/eaze-hire/exclusive/dashboard/eh-job-board/eh-job-details/job-desc-page.component';
import { getTokenFromLocalStorage } from '../../../utils/service/localstorage-service';

export const EHPrivateComponent: React.FC = () => {
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
          history('/eaze-hire/login');
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
        userType: UserType.EH, isPublic: 'NO', token: tokenData, requestType: APIHeaderEH.REQ_GET_ALL_JOB_POSITION,
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
        <Container className="eh-nav-container-eh">
          <Row className="eh-top-row">
            <Col className="nav-icon-sidebar-eh mx-3 my-3 eh-logo-float-right">
              <img style={{ width: '160px' }} src="/images/eazehire/eh-logo-dark.png" alt="eazehireLogo" />
            </Col>
            <Col className="nav-icon-sidebar-eh-mobile my-3 pt-2">
              <div className="eh-row-header-nav">
                <div className="eh-column-header-nav-left">
                  <img style={{ width: '160px' }} src="/images/eazehire/eh-logo-dark.png" alt="eazehireLogo" />
                </div>
                <div className="eh-column-header-nav-right">
                  <NavLink
                    className="nav-icon"
                    onClick={() => { handleClick(); }}
                    to="#"
                  >
                    {changeIcon ? <FontAwesomeIcon icon={faClose} className="nav-close-btn-eh" /> : <FontAwesomeIcon icon={faBars} className="nav-open-btn-eh" />}
                  </NavLink>
                </div>
                <ul className={clickEHComponent ? 'eh-nav-menu-component active' : 'eh-nav-menu-component'}>
                  <li className="eh-nav-item-component">
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
                  <Route path="dashboard" element={<>savedJobs</>} />
                  <Route path="" element={<EHJobBoard filteredJobData={filteredData} />} />
                  <Route path="job-board" element={<EHJobBoard filteredJobData={filteredData} />} />
                  <Route path="job-board/:jobId" element={<EHJobDescriptionPage />} />
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
                  <Route path="dashboard" element={<>savedJobs</>} />
                  <Route path="" element={<EHJobBoard filteredJobData={filteredData} />} />
                  <Route path="job-board" element={<EHJobBoard filteredJobData={filteredData} />} />
                  <Route path="job-board/:jobId" element={<EHJobDescriptionPage />} />
                  {/* <Route path="profile" element={<WWProfile />} />
                    <Route path="calendar" element={<CalendarComponent />} />
                    <Route path="saved-jobs" element={<>savedJobs</>} /> */}
                </Routes>
              </Col>
            </Row>
          )}
        </Container>
      )
      : (
        <Container>
          <Row className="eh-unauthorized-centered">
            <h3 className="eh-unauthorized-text">You are not Authorized to view this page</h3>
          </Row>
        </Container>
      )
  );
};
