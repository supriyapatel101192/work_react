/* eslint-disable linebreak-style */
import React from 'react';
import {
  Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, NavLink,
} from 'reactstrap';
import CCResumeContact from '../cc-resume-contact/cc-resume-contact.component';
import './cc-resume-navbar.scss';

export const CCResumeDetails: React.FC = () => {
  const resumeTitlesCC = ['contact', 'experience', 'project', 'education', 'skills', 'summary'];
  const [activeTab, setActiveTab] = React.useState('contact');
  return (
    <div className="cc-resume-tab-container">
      <Card className="cc-resume-card">
        <CardHeader className="">
          <Nav tabs>
            {resumeTitlesCC.map((title, index) => (
              <NavItem key={title + index.toString()}>
                <NavLink active={activeTab === title} onClick={() => setActiveTab(title)}>
                  {title}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </CardHeader>
        <CardBody>
          <TabContent activeTab={activeTab}>

            <TabPane tabId="cc-contact">
              <CCResumeContact />
            </TabPane>
            <TabPane tabId="cc-experience">
              {/* <CCResumeExperience /> */}
            </TabPane>
            <TabPane tabId="cc-Project">
              {/* <CCResumeProject /> */}
            </TabPane>
            <TabPane tabId="cc-education">
              {/* <CCResumeEducation /> */}
            </TabPane>
            <TabPane tabId="cc-skills">
              <CCResumeContact />
            </TabPane>

          </TabContent>
        </CardBody>

      </Card>
    </div>

  );
};
export default CCResumeDetails;
