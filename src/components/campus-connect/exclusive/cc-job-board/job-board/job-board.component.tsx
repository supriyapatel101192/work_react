import React from 'react';
import {
  Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledTooltip,
} from 'reactstrap';
import './job-board.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBusinessTime, faLaptopFile } from '@fortawesome/free-solid-svg-icons';
import { CCJobBoardProps } from './job-board.type';
import { CCListJobs } from '../cc-list-jobs/list-jobs.component';

export const CCJobBoard: React.FC<CCJobBoardProps> = ({ filteredJobData }) => {
  const [activeTab, setActiveTab] = React.useState('listJobs');
  return (
    <Card className="cc-jb-card">
      <CardHeader className="cc-jb-tab-headers">
        <Nav tabs className="cc-jb-tab-border">
          <div className="cc-row-job-tab">
            <div className="cc-column-job-tab-left">
              <NavItem>
                <NavLink className="cc-jb-profile-nav-tabs" active={activeTab === 'listJobs'} onClick={() => setActiveTab('listJobs')}>
                  All Jobs
                </NavLink>
              </NavItem>
            </div>
            <div className="cc-column-job-tab-right">
              <NavItem>
                <NavLink className="cc-jb-profile-nav-tabs" active={activeTab === 'progressJob'} onClick={() => setActiveTab('progressJob')}>
                  My Initiated Jobs
                </NavLink>
              </NavItem>
            </div>
            <div className="cc-column-job-tab-right">
              <NavItem>
                <NavLink className="cc-jb-profile-nav-tabs" active={activeTab === 'savedJob'} onClick={() => setActiveTab('savedJob')}>
                  My Saved Jobs
                </NavLink>
              </NavItem>
            </div>
          </div>

          <div className="cc-row-job-tab-mobile">
            <div className="cc-column-job-tab-left">
              <NavItem>
                <NavLink id="allJobsId" className="cc-jb-profile-nav-tabs" active={activeTab === 'listJobs'} onClick={() => setActiveTab('listJobs')}>
                  <FontAwesomeIcon icon={faBriefcase} className="cc-job-tab-img" />
                </NavLink>
                <UncontrolledTooltip delay={0} target="allJobsId">
                  All Jobs
                </UncontrolledTooltip>
              </NavItem>
            </div>
            <div className="cc-column-job-tab-right">
              <NavItem>
                <NavLink id="savedId" className="cc-jb-profile-nav-tabs" active={activeTab === 'progressJob'} onClick={() => setActiveTab('progressJob')}>
                  <FontAwesomeIcon icon={faLaptopFile} className="cc-job-tab-img" />
                </NavLink>
                <UncontrolledTooltip delay={0} target="savedId">
                  My Saved Jobs
                </UncontrolledTooltip>
              </NavItem>
            </div>
            <div className="cc-column-job-tab-right">
              <NavItem>
                <NavLink id="initiatedId" className="cc-jb-profile-nav-tabs" active={activeTab === 'savedJob'} onClick={() => setActiveTab('savedJob')}>
                  <FontAwesomeIcon icon={faBusinessTime} className="cc-job-tab-img" />
                  {/* <img src="/images/campusconnect/jobs/job-initiated.png" alt="saved-job" className="cc-job-tab-img" /> */}
                </NavLink>
                <UncontrolledTooltip delay={0} target="initiatedId">
                  My Initiated Jobs
                </UncontrolledTooltip>
              </NavItem>
            </div>
          </div>
        </Nav>
      </CardHeader>
      <CardBody>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="listJobs">
            <CCListJobs filteredJobData={filteredJobData} />
          </TabPane>
          <TabPane tabId="savedJob">
            My Saved Jobs
          </TabPane>
          <TabPane tabId="progressJob">
            My Initiated Jobs
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  );
};
