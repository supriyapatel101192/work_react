import React, { useState } from 'react';
import {
  faBars, faBoxOpen, faBriefcaseClock, faClose, faLaptopFile, faPersonChalkboard, faRightToBracket, faSortDown, faUserGear, faUserGraduate, faUserNinja, faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import {
  DropdownMenu, DropdownToggle, Media, Modal, ModalBody, ModalHeader, UncontrolledDropdown,
} from 'reactstrap';
import './nav.scss';

export const WXPopNavbar: React.FC = () => {
  const history = useNavigate();
  const [click, setClick] = React.useState(false);
  const [changeIcon, setChangeIcon] = React.useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleClick = () => {
    setChangeIcon(!changeIcon);
    setClick(!click);
  };
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/home" className="nav-logo">
          <img style={{ width: '180px' }} src="/wenex-lite.png" alt="wenexLogo" />
        </NavLink>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink
              className="nav-links"
              to="/job-board"
              target="_blank"
              onClick={() => { handleClick(); window.scrollTo(0, 0); }}
            >
              <FontAwesomeIcon icon={faBriefcaseClock} className="wx-icon-link" />job-board
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-links"
              to="#"
              title="Have Queries ? Connect with us"
              onClick={toggle}
            >
              <FontAwesomeIcon icon={faBoxOpen} className="wx-icon-link" />product &amp; services<FontAwesomeIcon icon={faSortDown} className="wx-icon-toggle" />
            </NavLink>
          </li>
          <li className="nav-item">
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                className="nav-links"
                data-toggle="dropdown"
                href="#"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <FontAwesomeIcon icon={faBoxOpen} className="wx-icon-link" />product &amp; services
              </DropdownToggle>
              <DropdownMenu className="wh-nav-dropdown">
                <Media
                  className="d-flex align-items-center mb-md-4 my-md-3 icon-header-text"
                  onClick={() => { history('/eaze-hire'); window.scrollTo(0, 0); }}
                  target="_blank"
                  to="/eaze-hire"
                >
                  <div className="icon-shape">
                    <FontAwesomeIcon icon={faUserGear} className="wx-icon-product" />
                  </div>
                  <Media body>
                    EazeHire
                  </Media>
                </Media>
                <Media
                  className="d-flex align-items-center mb-md-4 my-md-3 icon-header-text"
                  onClick={() => history('/#campus-connect')}
                  to="/#campus-connect"
                >
                  <div className="icon-shape">
                    <FontAwesomeIcon icon={faUserGraduate} className="wx-icon-product" />
                  </div>
                  <Media body>
                    CampusConnect
                  </Media>
                </Media>
                <Media
                  className="d-flex align-items-center mb-md-4 my-md-3 icon-header-text"
                  onClick={() => history('/#coach-talk')}
                  to="/#coach-talk"
                >
                  <div className="icon-shape">
                    <FontAwesomeIcon icon={faUserNinja} className="wx-icon-product" />
                  </div>
                  <Media body>
                    CoachTalk
                  </Media>
                </Media>
                <Media
                  className="d-flex align-items-center mb-md-4 my-md-3 icon-header-text"
                  onClick={() => history('/#we-train')}
                  to="/#we-train"
                >
                  <div className="icon-shape">
                    <FontAwesomeIcon icon={faPersonChalkboard} className="wx-icon-product" />
                  </div>
                  <Media body>
                    WeTrain
                  </Media>
                </Media>
              </DropdownMenu>
            </UncontrolledDropdown>
          </li>
          {/* <li className="nav-item">
            <NavLink
              className="nav-links"
              onClick={() => history('/#about')}
              to="/#about"
              title="Know more about us"
            >
              <FontAwesomeIcon icon={faPeopleGroup} className="wx-icon-link" />about
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink
              className="nav-links"
              to="/#connect"
              title="Have Queries ? Connect with us"
              onClick={() => history('/#connect')}
            >
              <FontAwesomeIcon icon={faLaptopFile} className="wx-icon-link" />contact us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-links"
              to="/coming-soon"
              title="Register with us"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faUserPlus} className="wx-icon-link" />register
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-login-button"
              to="/login"
              type="button"
              title="Login to Wenex Portal"
              onClick={() => { handleClick(); window.scrollTo(0, 0); }}
            >
              <FontAwesomeIcon icon={faRightToBracket} className="wx-icon-link" />login
            </NavLink>
          </li>
        </ul>
        <NavLink
          className="nav-icon"
          onClick={() => { handleClick(); window.scrollTo(0, 0); }}
          to="#"
        >
          {changeIcon ? <FontAwesomeIcon icon={faClose} className="nav-close-btn" /> : <FontAwesomeIcon icon={faBars} />}
        </NavLink>
      </div>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
      </Modal>
    </nav>
  );
};

export default WXPopNavbar;
