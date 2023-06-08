import React from 'react';
import {
  Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import { AboutMe } from '../about-me/about-me.component';
import { AccountSetting } from '../account-setting/account-setting.component';
import { PostContent } from '../post-content/post-content.component';
import './profile-tabs.scss';

export const ProfileTab: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('posts');

  return (
    <div className="ww-profile-tab-container">
      <Card>
        <CardHeader className="tab-headers">
          <Nav tabs>
            <NavItem>
              <NavLink className="profile-nav-tabs" active={activeTab === 'posts'} onClick={() => setActiveTab('posts')}>
                Posts
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="profile-nav-tabs" active={activeTab === 'aboutme'} onClick={() => setActiveTab('aboutme')}>
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="profile-nav-tabs" active={activeTab === 'update'} onClick={() => setActiveTab('update')}>
                Setting
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>
        <CardBody>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="posts">
              <PostContent />
            </TabPane>
            <TabPane tabId="aboutme">
              <AboutMe />
            </TabPane>
            <TabPane tabId="update">
              <AccountSetting />
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </div>
  );
};
