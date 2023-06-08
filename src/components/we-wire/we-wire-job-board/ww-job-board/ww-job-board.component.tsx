import React from 'react';
import {
  Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import './ww-job-board.scss';
import { WWJobBoardProps } from './ww-job-board.type';
import { WWListJobs } from '../ww-list-jobs/ww-list-jobs.component';
import { WWJobProgress } from '../ww-job-progress/ww-job-progress.component';

export const WWJobBoard: React.FC<WWJobBoardProps> = ({ filteredJobData }) => {
  const [activeTab, setActiveTab] = React.useState('listJobs');
  return (
    <div className="ww-jb-profile-tab-container">
      <Card className="ww-jb-card">
        <CardHeader className="ww-jb-tab-headers">
          <Nav tabs>
            <NavItem>
              <NavLink className="ww-jb-profile-nav-tabs" active={activeTab === 'listJobs'} onClick={() => setActiveTab('listJobs')}>
                Jobs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="ww-jb-profile-nav-tabs" active={activeTab === 'jobStatus'} onClick={() => setActiveTab('jobStatus')}>
                Job Status
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="ww-jb-profile-nav-tabs" active={activeTab === 'savedJobs'} onClick={() => setActiveTab('savedJobs')}>
                Saved Jobs
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>
        <CardBody>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="listJobs">
              <WWListJobs filteredJobData={filteredJobData} />
            </TabPane>
            <TabPane tabId="jobStatus">
              <WWJobProgress />
            </TabPane>
            <TabPane tabId="savedJobs">
              ddd
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </div>
  );
};
