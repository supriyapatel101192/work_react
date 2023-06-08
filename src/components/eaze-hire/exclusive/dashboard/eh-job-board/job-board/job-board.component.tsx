import React from 'react';
import {
  Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import './job-board.scss';
import { EHJobBoardProps } from './job-board.type';
import { EHListJobs } from '../eh-list-jobs/list-jobs.component';

export const EHJobBoard: React.FC<EHJobBoardProps> = ({ filteredJobData }) => {
  const [activeTab, setActiveTab] = React.useState('listJobs');
  return (
    <Card className="eh-jb-card">
      <CardHeader className="eh-jb-tab-headers">
        <Nav tabs className="eh-jb-tab-border">
          <div className="eh-row-job-tab">
            <div className="eh-column-job-tab-left">
              <NavItem>
                <NavLink className="eh-jb-profile-nav-tabs" active={activeTab === 'listJobs'} onClick={() => setActiveTab('listJobs')}>
                  All Jobs
                </NavLink>
              </NavItem>
            </div>
            <div className="eh-column-job-tab-right">
              <NavItem>
                <NavLink className="eh-jb-profile-nav-tabs" active={activeTab === 'addNewJob'} onClick={() => setActiveTab('addNewJob')}>
                  Add New
                </NavLink>
              </NavItem>
            </div>
          </div>

          {/* <Container>
            <Row>
              <Col lg="6" md="5" xs="7">
                <NavItem>
                  <NavLink className="eh-jb-profile-nav-tabs" active={activeTab === 'listJobs'} onClick={() => setActiveTab('listJobs')}>
                    All Posted Jobs
                  </NavLink>
                </NavItem>
              </Col>
              <Col lg="6" md="5" xs="5">
                <NavItem>
                  <NavLink className="eh-jb-profile-nav-tabs" active={activeTab === 'addNewJob'} onClick={() => setActiveTab('addNewJob')}>
                    Add New
                  </NavLink>
                </NavItem>
              </Col>
            </Row>
          </Container> */}
        </Nav>
      </CardHeader>
      <CardBody>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="listJobs">
            <EHListJobs filteredJobData={filteredJobData} />
          </TabPane>
          <TabPane tabId="addNewJob">
            ddd
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  );
};
