import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Routes, Route, Link, useLocation, useNavigate,
} from 'react-router-dom';
import {
  Col, Container, Row,
} from 'reactstrap';
import { RootState } from 'typesafe-actions';
import jwt_decode from 'jwt-decode';
import { BreadcrumbsComponent } from '../../components/breadcrumb/breadcrumb.component';
import CalendarComponent from '../../components/we-wire/ww-calendar/calendar-bar.component';
import WWSideDrawer from '../../components/we-wire/ww-side-drawer/side-drawer.component';
import { WWProfile } from '../../components/we-wire/we-wire-dashboard/ww-profile/ww-profile.component';
import { WWJobBoard } from '../../components/we-wire/we-wire-job-board/ww-job-board/ww-job-board.component';
import { JobsResultInfo } from '../../services/job-board/list-jobs/list-jobs.types';
import { getAllJobs } from '../../store/job-board/actions';
import { UserType, APIHeaderEH } from '../../utils/constants';
import { getTokenFromLocalStorage } from '../../utils/service/localstorage-service';
import './we-wire.scss';
import { WWResumeDetails } from '../../components/we-wire/ww-resume/ww-resume-details/ww-resume-navbar.component';
import { WWUserSettings } from '../../components/we-wire/ww-user-settings/ww-user-settings.component';

export const WeWireComponent: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();
  const [jobData, setJobData] = useState<JobsResultInfo[]>([]);
  const [filteredData, setFilteredData] = useState<JobsResultInfo[]>([]);
  const [dataSet, setDataSet] = useState(false);
  const generatedToken = useSelector((state: RootState) => state.jobBoard.genToken);
  const jobDataList = useSelector((state: RootState) => state.jobBoard.listJobs);
  const tokenData = getTokenFromLocalStorage();
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
        userType: UserType.WX, isPublic: 'YES', token: tokenData, requestType: APIHeaderEH.REQ_GET_ALL_JOB_POSITION,
      }));
    }
    if (!dataSet && jobDataList.jobInfo.length) {
      setJobData(jobDataList.jobInfo);
      setDataSet(true);
    }
  }, [dispatch, generatedToken.token, jobDataList.jobInfo.length, dataSet]);

  const path = location.pathname.split('/');
  const routeList = [
    { name: 'HOME', route: '/' },
    { name: path[1].toUpperCase(), route: location.pathname },
    { name: path[2].toUpperCase(), route: location.pathname },
  ];

  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  };

  return (
    <Container className="wewire-container">
      <div className="ww-top-row">
        <Row>
          <Col xs="8" lg="10">
            <BreadcrumbsComponent routesList={routeList} />
          </Col>
          <Col xs="4" lg="2">
            <Link to="/">
              <img className="ww-wnx-logo" src="/wenex-dark.png" alt="wenexLogo" />
            </Link>
          </Col>
        </Row>
      </div>
      <Row className="row-ww">
        {menuCollapse ? (
          <Col lg="1" className="side-bar-ww">
            <WWSideDrawer menuCollapse={menuCollapse} menuIconClick={menuIconClick} />
          </Col>
        ) : (
          <Col lg="2" className="side-bar-ww">
            <WWSideDrawer menuCollapse={menuCollapse} menuIconClick={menuIconClick} />
          </Col>
        )}
        <Col>
          <Routes>
            <Route path="dashboard" element={<WWProfile />} />
            <Route path="job-board" element={<WWJobBoard filteredJobData={filteredData} />} />
            <Route path="calendar" element={<CalendarComponent />} />
            <Route path="notification" element={<>note</>} />
            <Route path="resume" element={<WWResumeDetails />} />
            <Route path="profile" element={<WWUserSettings />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};
