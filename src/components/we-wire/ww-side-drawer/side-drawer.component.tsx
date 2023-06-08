import {
  faArrowLeft, faCalendar, faChevronCircleLeft, faChevronCircleRight, faComment, faFile, faHome, faList, faPencil,
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
import './side-drawer.scss';
import { SideDrawerProps } from './side-drawer.type';

export const WWSideDrawer: React.FC<SideDrawerProps> = ({ menuCollapse, menuIconClick }) => {
  const location = useLocation();
  const path = location.pathname.split('/');
  const [menuItems, setMenuItems] = useState({
    dashboard: !!path[2].match('dashboard'),
    profile: !!path[2].match('profile'),
    calendar: !!path[2].match('calendar'),
    notification: !!path[2].match('notification'),
    resume: !!path[2].match('resume'),
    jobBoard: !!path[2].match('jobBoard'),
  });
  const [defaultState, setDefaultState] = useState(true);
  React.useEffect(() => {
    if (!defaultState) {
      setMenuItems({
        dashboard: true,
        profile: false,
        calendar: false,
        notification: false,
        resume: false,
        jobBoard: false,
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
        notification: false,
        resume: false,
        jobBoard: false,
      });
    } else if (item === 'jobBoard') {
      setMenuItems({
        dashboard: false,
        profile: false,
        calendar: false,
        notification: false,
        resume: false,
        jobBoard: true,
      });
    } else if (item === 'profile') {
      setMenuItems({
        dashboard: false,
        profile: true,
        calendar: false,
        notification: false,
        resume: false,
        jobBoard: false,
      });
    } else if (item === 'calendar') {
      setMenuItems({
        dashboard: false,
        profile: false,
        calendar: true,
        notification: false,
        resume: false,
        jobBoard: false,
      });
    } else if (item === 'notification') {
      setMenuItems({
        dashboard: false,
        profile: false,
        calendar: false,
        notification: true,
        resume: false,
        jobBoard: false,
      });
    } else if (item === 'resume') {
      setMenuItems({
        dashboard: false,
        profile: false,
        calendar: false,
        notification: false,
        resume: true,
        jobBoard: false,
      });
    }
  };
  return (
    <div id="header" className="sidedrawer">
      <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
          <div className="logotext">
            <p>{menuCollapse ? 'Logo' : 'Big Logo'}</p>
          </div>
          {menuCollapse ? <FontAwesomeIcon className="closemenu" onClick={menuIconClick} icon={faChevronCircleRight} /> : <FontAwesomeIcon className="closemenu" onClick={menuIconClick} icon={faChevronCircleLeft} />}
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem active={menuItems.dashboard} className="menu-item" icon={<FontAwesomeIcon icon={faHome} />} onClick={() => handleOnClickMenuItem('dashboard')}>
              <Link to="dashboard"><span className="ww-link-txt">Dashboard</span></Link>
            </MenuItem>
            <MenuItem active={menuItems.jobBoard} className="menu-item" icon={<FontAwesomeIcon icon={faList} />} onClick={() => handleOnClickMenuItem('jobBoard')}>
              <Link to="job-board"><span className="ww-link-txt">Job Board</span></Link>
            </MenuItem>
            <MenuItem active={menuItems.calendar} className="menu-item" icon={<FontAwesomeIcon icon={faCalendar} />} onClick={() => handleOnClickMenuItem('calendar')}>
              <Link to="calendar"><span className="ww-link-txt">Calendar</span></Link>
            </MenuItem>
            <MenuItem active={menuItems.notification} className="menu-item" icon={<FontAwesomeIcon icon={faComment} />} onClick={() => handleOnClickMenuItem('notification')}>
              <Link to="notification"><span className="ww-link-txt">Notifications</span></Link>
            </MenuItem>
            <MenuItem active={menuItems.resume} className="menu-item" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => handleOnClickMenuItem('resume')}>
              <Link to="resume"><span className="ww-link-txt">Resume</span></Link>
            </MenuItem>
            <MenuItem active={menuItems.profile} className="menu-item" icon={<FontAwesomeIcon icon={faPencil} />} onClick={() => handleOnClickMenuItem('profile')}>
              <Link to="profile"><span className="ww-link-txt">Profile</span></Link>
            </MenuItem>

          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem className="menu-item" icon={<FontAwesomeIcon icon={faArrowLeft} />}>
              <Link to="/"><span className="ww-link-txt">Logout</span></Link>
            </MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default WWSideDrawer;
