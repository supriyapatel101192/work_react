import React from 'react';
import {
  faBars, faClose, faLaptopFile, faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import './nav.scss';

export const EHNavbar: React.FC = () => {
  const history = useNavigate();
  const [click, setClick] = React.useState(false);
  const [changeIcon, setChangeIcon] = React.useState(false);

  const handleClick = () => {
    setChangeIcon(!changeIcon);
    setClick(!click);
  };
  return (
    <nav className="navbar-eh">
      <div className="display-header-right">
        <NavLink
          onClick={handleClick}
          to="/"
          target="_blank"
          className="text-powered"
        >
          <h5 className="align-eh-header">powered by - <span className="align-eh-wenex">wenexcorp</span></h5>
        </NavLink>
      </div>
      <div className="nav-container-eh">
        <NavLink to="/eaze-hire" className="nav-logo-eh">
          <img style={{ width: '180px' }} src="/images/eazehire/eh-logo-lite.png" alt="eazeHireLogo" />
        </NavLink>
        <ul className={click ? 'nav-menu-eh active' : 'nav-menu-eh'}>
          <li className="nav-item-eh-login">
            <NavLink
              className="nav-login-button-eh"
              to="/eaze-hire/request-demo"
              type="button"
              title="Request for Demo"
              onClick={() => { history('/eaze-hire'); window.scrollTo(0, 0); }}
            >
              <FontAwesomeIcon icon={faLaptopFile} className="eh-icon-link-btn" />Request a Demo
            </NavLink>
          </li>
          <li className="nav-item-eh-login">
            <NavLink
              className="nav-login-button-eh"
              to="/eaze-hire/login"
              type="button"
              title="Login to Wenex Portal"
              onClick={() => { handleClick(); window.scrollTo(0, 0); }}
            >
              <FontAwesomeIcon icon={faRightToBracket} className="eh-icon-link-btn" />Login
            </NavLink>
          </li>
        </ul>
        <NavLink
          className="nav-icon-eh"
          onClick={() => { handleClick(); }}
          to="#"
        >
          {changeIcon ? <FontAwesomeIcon icon={faClose} className="nav-close-btn-eh" /> : <FontAwesomeIcon icon={faBars} className="nav-open-btn-eh" />}
        </NavLink>
      </div>
    </nav>
  );
};

export default EHNavbar;
