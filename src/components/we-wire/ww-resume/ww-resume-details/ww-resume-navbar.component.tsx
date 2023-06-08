import React from 'react';
import {
  Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import { WWResumeContact } from '../ww-resume-contact/ww-resume-contact.component';
import { WWResumeEducation } from '../ww-resume-education/ww-resume-education.component';
import { WWResumeExperience } from '../ww-resume-experience/ww-resume-experience.component';
import { WWResumeProject } from '../ww-resume-project/ww-resume-project.component';
import { WWResumeSkills } from '../ww-resume-skills/ww-resume-skills.component';
import './ww-resume-navbar.scss';

export const WWResumeDetails: React.FC = () => {
  const resumeTitles = ['contact', 'experience', 'project', 'education', 'skills', 'summary'];
  const [activeTab, setActiveTab] = React.useState('contact');
  return (
    <div className="ww-resume-tab-container">
      <Card className="ww-resume-card">
        <CardHeader className="ww-resume-tab-headers">
          <Nav tabs>
            {resumeTitles.map((title, index) => (
              <NavItem key={title + index.toString()}>
                <NavLink className="ww-resume-nav-tabs" active={activeTab === title} onClick={() => setActiveTab(title)}>
                  {title}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </CardHeader>
        <CardBody>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="contact" className="ww-resume-tabpane">
              <WWResumeContact />
            </TabPane>
            <TabPane tabId="experience" className="ww-resume-tabpane">
              <WWResumeExperience />
            </TabPane>
            <TabPane tabId="project" className="ww-resume-tabpane">
              <WWResumeProject />
            </TabPane>
            <TabPane tabId="education" className="ww-resume-tabpane">
              <WWResumeEducation />
            </TabPane>
            <TabPane tabId="skills" className="ww-resume-tabpane">
              <WWResumeSkills />
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </div>
  );
};
