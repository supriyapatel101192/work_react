import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Col, Container, Row,
} from 'reactstrap';
import { RootState } from 'typesafe-actions';
import FilterDataComponent from '../../components/job-board/filter-data/filter-data.component';
// import Loader from '../../components/loader/loader.component';
import { JobsResultInfo, FilterJobsResult } from '../../services/job-board/list-jobs/list-jobs.types';
import { getAllJobs } from '../../store/job-board/actions';
import { APIHeaderEH, UserType } from '../../utils/constants';
import './job-board.scss';
import WnxNavBar from '../../components/wenex/navbar/wenex.navbar';
import WenexFooter from './job-board.footer';
import Content from '../../components/job-board/content/content.component';

export const JobBoardComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [sidebarIsOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  const jobPrefrence = ['WFO', 'WFH', 'MIX'];
  const jobAllType = ['FT', 'PT', 'FL', 'INT', 'CNT'];
  const jobHireType = ['FRS', 'EXP'];
  const [filterJobData, setFilterJobData] = useState<FilterJobsResult>({
    jobPref: [],
    jobType: [],
    jobHireTp: [],
  });
  const [jobData, setJobData] = useState<JobsResultInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [isNoData, setIsNoData] = useState(false);
  const jobDataList = useSelector((state: RootState) => state.jobBoard.listJobs);

  React.useEffect(() => {
    if (!loading) {
      setLoading(true);
    }
    if (filterJobData.jobPref.length === 0 && filterJobData.jobType.length === 0 && filterJobData.jobHireTp.length === 0) {
      dispatch(getAllJobs({
        userType: UserType.WX, isPublic: 'YES', requestType: APIHeaderEH.REQ_GET_ALL_JOB_POSITION,
      }));
    }
    if (filterJobData.jobPref.length > 0 || filterJobData.jobType.length > 0 || filterJobData.jobHireTp.length > 0) {
      dispatch(getAllJobs({
        userType: UserType.WX, filterTp: filterJobData, isPublic: 'YES', requestType: APIHeaderEH.REQ_GET_ALL_JOB_POSITION,
      }));
    }
    if (jobDataList.jobMessage === 'executed') {
      if (jobDataList.jobInfo.length > 0) {
        setJobData(jobDataList.jobInfo);
        setLoading(false);
      } else {
        setJobData(jobDataList.jobInfo);
        setIsNoData(true);
        setLoading(false);
      }
    }
  }, [dispatch, jobDataList.jobInfo.length, filterJobData.jobPref.length, filterJobData.jobType.length, filterJobData.jobHireTp.length]);

  // React.useEffect(() => {
  //   if (jobDataList.jobInfo.length) {
  //     setLoading(false);
  //   }
  // }, [loading]);

  const handleApply = (e: any) => {
    const { value } = e.target;
    const checkJobPref = jobPrefrence.indexOf(e.target.value) > -1;
    const checkJobType = jobAllType.indexOf(e.target.value) > -1;
    const checkHireType = jobHireType.indexOf(e.target.value) > -1;
    if (checkJobPref === true) {
      if (e.target.checked) {
        const tmpPrefTp = { ...filterJobData };
        tmpPrefTp.jobPref.push(e.target.value);
        setFilterJobData({
          ...filterJobData,
          jobPref: tmpPrefTp.jobPref,
        });
      } else {
        setFilterJobData({
          ...filterJobData,
          jobPref: filterJobData.jobPref.filter((r) => r !== value),
        });
      }
    }
    if (checkJobType === true) {
      if (e.target.checked) {
        const tmpJobTp = { ...filterJobData };
        tmpJobTp.jobType.push(e.target.value);
        setFilterJobData({
          ...filterJobData,
          jobType: tmpJobTp.jobType,
        });
      } else {
        setFilterJobData({
          ...filterJobData,
          jobType: filterJobData.jobType.filter((r) => r !== value),
        });
      }
    }
    if (checkHireType === true) {
      if (e.target.checked) {
        const tmpHireTp = { ...filterJobData };
        tmpHireTp.jobHireTp.push(e.target.value);
        setFilterJobData({
          ...filterJobData,
          jobHireTp: tmpHireTp.jobHireTp,
        });
      } else {
        setFilterJobData({
          ...filterJobData,
          jobHireTp: filterJobData.jobHireTp.filter((r) => r !== value),
        });
      }
    }
    if (!loading) {
      setLoading(true);
    }
  };
  return (
    <React.Fragment>
      <WnxNavBar />
      <Container className="job-container">
        <Row>
          {sidebarIsOpen && (
            <Col lg="3" className="card-filter-col pt-4">
              <FilterDataComponent filterJobData={filterJobData} filterHandleData={(e) => handleApply(e)} toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            </Col>
          )}
          <Col className="card-jobs-col">
            <Content jobData={jobData} isNoData={isNoData} toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} loading={loading} />
          </Col>
        </Row>
      </Container>
      <div className="jb-footer">
        <WenexFooter />
      </div>
    </React.Fragment>
  );
};
export default JobBoardComponent;
