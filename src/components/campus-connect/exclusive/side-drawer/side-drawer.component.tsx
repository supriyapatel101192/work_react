import {
  faArrowLeft, faCalendar, faChevronCircleLeft, faChevronCircleRight, faFile, faHome, faPencil, faSuitcase,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link, useLocation } from 'react-router-dom';
import { clearKeysFromLocalStorage } from '../../../../utils/service/localstorage-service';
import './side-drawer.scss';
import { SideDrawerProps } from './side-drawer.type';

export const EHSideDrawer: React.FC<SideDrawerProps> = ({ menuCollapse, menuIconClick }) => {
  const location = useLocation();
  const path = location.pathname.split('/');
  const [menuItems, setMenuItems] = useState({
    dashboard: !!path[2].match('dashboard'),
    profile: !!path[2].match('profile'),
    calendar: !!path[2].match('calendar'),
    resume: !!path[2].match('resume'),
    jobBoard: !!path[2].match('jobBoard'),
  });
  const [defaultState, setDefaultState] = useState(true);
  React.useEffect(() => {
    if (defaultState) {
      setMenuItems({
        dashboard: false,
        profile: false,
        calendar: false,
        resume: false,
        jobBoard: true,
      });
      setDefaultState(true);
    }
  }, [defaultState]);
  const handleOnClickMenuItem = (item: string) => {
    if (item === 'dashboard') {
      setMenuItems({
        dashboard: true,
        profile: false,
        calendar: false,
        resume: false,
        jobBoard: false,
      });
    } else if (item === 'jobBoard') {
      setMenuItems({
        dashboard: false,
        profile: false,
        calendar: false,
        resume: false,
        jobBoard: true,
      });
    } else if (item === 'profile') {
      setMenuItems({
        dashboard: false,
        profile: true,
        calendar: false,
        resume: false,
        jobBoard: false,
      });
    } else if (item === 'calendar') {
      setMenuItems({
        dashboard: false,
        profile: false,
        calendar: true,
        resume: false,
        jobBoard: false,
      });
    } else if (item === 'resume') {
      setMenuItems({
        dashboard: false,
        profile: false,
        calendar: false,
        resume: true,
        jobBoard: false,
      });
    }
  };

  return (
    <div id="header-cc">
      <ProSidebar collapsed={menuCollapse} className="cc-side-border">
        <SidebarHeader>
          <div className="logotext-cc cc-side-bar-center-align">
            {menuCollapse
              ? (
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg cc-avatar-user-small"
                  src="/images/eazehire/jeet.png"
                />
              ) : (
                <div className="pt-3">
                  <img
                    alt="..."
                    className="img-fluid rounded shadow-lg cc-avatar-user"
                    src="/images/eazehire/jeet.png"
                  />
                  <div className="cc-side-bar-center-align pt-2">
                    <h6 className="cc-text-avatar-name">Jeet Jha</h6>
                  </div>
                  <div className="cc-side-bar-center-align">
                    <h6 className="cc-text-avatar-designation">Developer</h6>
                  </div>
                </div>
              )}
          </div>
          {menuCollapse ? <FontAwesomeIcon className="closemenu-cc" onClick={menuIconClick} icon={faChevronCircleRight} /> : <FontAwesomeIcon className="closemenu-cc" onClick={menuIconClick} icon={faChevronCircleLeft} />}
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem active={menuItems.dashboard} className="menu-item-cc" icon={<FontAwesomeIcon className="menu-icon-cc" icon={faHome} />} onClick={() => handleOnClickMenuItem('dashboard')}>
              <Link to="dashboard"><span className="cc-link-txt">Dashboard</span></Link>
            </MenuItem>
            <MenuItem active={menuItems.jobBoard} className="menu-item-cc" icon={<FontAwesomeIcon className="menu-icon-cc" icon={faSuitcase} />} onClick={() => handleOnClickMenuItem('jobBoard')}>
              <Link to="job-board"><span className="cc-link-txt">Job Board</span></Link>
            </MenuItem>
            <MenuItem active={menuItems.calendar} className="menu-item-cc" icon={<FontAwesomeIcon className="menu-icon-cc" icon={faCalendar} />} onClick={() => handleOnClickMenuItem('calendar')}>
              <Link to="calendar"><span className="cc-link-txt">Calendar</span></Link>
            </MenuItem>
            <MenuItem active={menuItems.resume} className="menu-item" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => handleOnClickMenuItem('resume')}>
              <Link to="resume"><span className="ww-link-txt">Resume</span></Link>
            </MenuItem>
            <MenuItem active={menuItems.profile} className="menu-item-cc" icon={<FontAwesomeIcon className="menu-icon-cc" icon={faPencil} />} onClick={() => handleOnClickMenuItem('profile')}>
              <Link to="profile"><span className="cc-link-txt">Profile</span></Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter className="sidebar-footer-cc">
          <Menu iconShape="square" onClick={() => { clearKeysFromLocalStorage(); window.location.href = '/login'; }}>
            <MenuItem className="menu-item-cc" icon={<FontAwesomeIcon icon={faArrowLeft} />}>
              <span className="cc-link-txt">Logout</span>
            </MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default EHSideDrawer;
