import React, { useState } from 'react';
import {
  faBars, faBoxOpen, faBriefcaseClock, faClose, faLaptopFile, faRightToBracket, faSortDown, faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardFooter,
  Col,
  Modal, ModalBody, ModalHeader, Row,
} from 'reactstrap';
import './nav.scss';
import ReactPlayer from 'react-player';
// import WXPopNavbar from './wenex.popup-nav';

export const WXNavbar: React.FC = () => {
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
          <img style={{ width: '180px' }} src="/wenex-dark.png" alt="wenexLogo" />
        </NavLink>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink
              className="nav-links"
              to="/job-board"
              target="_blank"
              onClick={() => { handleClick(); window.scrollTo(0, 0); }}
            >
              <FontAwesomeIcon icon={faBriefcaseClock} className="wx-icon-link" />
              <span className="nav-text-wejobs">We</span>Jobs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-links"
              to="#"
              title="Have Queries ? Connect with us"
              onClick={toggle}
            >
              <FontAwesomeIcon icon={faBoxOpen} className="wx-icon-link" />Product &amp; Services<FontAwesomeIcon icon={faSortDown} className="wx-icon-toggle" />
            </NavLink>
          </li>
          {/* <li className="nav-item">
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
          <li className="nav-item">
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
              <FontAwesomeIcon icon={faLaptopFile} className="wx-icon-link" />Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-links"
              to="/register"
              title="Register with us"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faUserPlus} className="wx-icon-link" />Register
            </NavLink>
          </li>
          <li className="nav-item-login">
            <NavLink
              className="nav-login-button"
              to="/login"
              type="button"
              title="Login to Wenex Portal"
              onClick={() => { handleClick(); window.scrollTo(0, 0); }}
            >
              <FontAwesomeIcon icon={faRightToBracket} className="wx-icon-link-btn" />Login
            </NavLink>
          </li>
        </ul>
        <NavLink
          className="nav-icon"
          onClick={() => { handleClick(); }}
          to="#"
        >
          {changeIcon ? <FontAwesomeIcon icon={faClose} className="nav-close-btn" /> : <FontAwesomeIcon icon={faBars} className="nav-open-btn" />}
        </NavLink>
      </div>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle} className="modal-top">
          <span className="nav-text-wejobs">Product &amp; Services</span>
        </ModalHeader>
        <ModalBody className="modal-body">
          <Row>
            <Col lg="3" md="6" className="pt-3">
              <Card className="card-model-nav-product">
                <div className="mx-2 pt-2">
                  <ReactPlayer
                    url="https://wenex-public-media.s3.ap-southeast-1.amazonaws.com/videos/campus-connect.mp4"
                    style={{ opacity: '.89' }}
                    controls
                    width="100%"
                    height="auto"
                  />
                </div>
                <CardBody>
                  <div className="margin-model-nav-text pt-2">
                    <h6 className="nav-product-header"><span className="nav-text-wejobs">Campus</span>Connect</h6>
                    <h6 className="text-about-grey pt-2 text-justify">
                      CampusConnect program will groom future leaders, for tomorrow who will
                      be value-driven individuals with a deep passion for humanity.
                    </h6>
                  </div>
                </CardBody>
                <CardFooter className="align-about-center">
                  <NavLink
                    className="nav-model-button"
                    to="/campus-connect"
                    type="button"
                    target="_blank"
                    title="Know more about campusconnect"
                    onClick={() => { window.scrollTo(0, 0); }}
                  >
                    Know More
                  </NavLink>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" className="pt-3">
              <Card className="card-model-nav-product">
                <div className="mx-2 pt-2">
                  <ReactPlayer
                    url="https://wenex-public-media.s3.ap-southeast-1.amazonaws.com/videos/eh-video.mp4"
                    style={{ opacity: '.89' }}
                    controls
                    width="100%"
                    height="auto"
                  />
                </div>
                <CardBody>
                  <div className="margin-model-nav-text pt-2">
                    <h6 className="nav-product-header"><span className="nav-text-wejobs">Eaze</span>Hire</h6>
                    <h6 className="text-about-grey pt-2 text-justify">
                      EazeHire builds transparency and efficiency in talent hiring using
                      state-of- the-art technology for video profiling and real-time video
                      interviewing.
                    </h6>
                  </div>
                </CardBody>
                <CardFooter className="align-about-center">
                  <NavLink
                    className="nav-model-button"
                    to="/eaze-hire"
                    type="button"
                    target="_blank"
                    title="Know more about WeTrain"
                    onClick={() => { window.scrollTo(0, 0); }}
                  >
                    Know More
                  </NavLink>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" className="pt-3">
              <Card className="card-model-nav-product">
                <div className="mx-2 pt-2">
                  <ReactPlayer
                    url="https://wenex-public-media.s3.ap-southeast-1.amazonaws.com/videos/we-jobs.mp4"
                    controls
                    width="100%"
                    height="auto"
                  />
                </div>
                <CardBody>
                  <div className="margin-model-nav-text pt-2">
                    <h6 className="nav-product-header"><span className="nav-text-wejobs">We</span>Jobs</h6>
                    <h6 className="text-about-grey pt-2 text-justify">
                      WeJobs, provides the best suitable jobs as per your skills.
                      The process is eaze to use and is hazle free.
                    </h6>
                  </div>
                </CardBody>
                <CardFooter className="align-about-center">
                  <NavLink
                    className="nav-model-button"
                    to="/job-board"
                    type="button"
                    target="_blank"
                    title="Know more about WeTrain"
                    onClick={() => { window.scrollTo(0, 0); }}
                  >
                    Know More
                  </NavLink>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" className="pt-3">
              <Card className="card-model-nav-product">
                <CardBody className="mx-2 pt-2 align-about-center">
                  <img
                    alt="..."
                    height="90px"
                    width="90%"
                    src="images/common/coach-about.png"
                  />
                </CardBody>
                <CardBody>
                  <div className="margin-model-nav-text pt-2">
                    <h6 className="nav-product-header"><span className="nav-text-wejobs">Coach</span>Talk</h6>
                    <h6 className="text-about-grey pt-2 text-justify">
                      CoachTalk program helps working professionals advance and
                      make informed decisions about their careers.
                    </h6>
                  </div>
                </CardBody>
                <CardFooter className="align-about-center">
                  <NavLink
                    className="nav-model-button"
                    to="/coming-soon"
                    type="button"
                    target="_blank"
                    title="Know more about coachtalk"
                    onClick={() => { window.scrollTo(0, 0); }}
                  >
                    Know More
                  </NavLink>
                </CardFooter>
              </Card>
            </Col>
            {/* <Col lg="3" md="6" className="pt-3">
              <Card className="card-model-nav-product">
                <CardBody className="mx-2 pt-2">
                  <img
                    alt="..."
                    height="40%"
                    width="90%"
                    src="images/common/training.png"
                  />
                </CardBody>
                <CardBody>
                  <div className="margin-model-nav-text pt-2">
                    <h6 className="nav-product-header"><span className="nav-text-wejobs">We</span>Train</h6>
                    <h6 className="text-about-grey pt-2 text-justify">
                      WeTrain, the platform helps corporates conduct their training, assessments &amp;
                      certifications for their employees across functions.
                    </h6>
                  </div>
                </CardBody>
                <CardFooter className="align-about-center">
                  <NavLink
                    className="nav-model-button"
                    to="/coming-soon"
                    type="button"
                    title="Know more about WeTrain"
                    onClick={() => { window.scrollTo(0, 0); }}
                  >
                    Know More
                  </NavLink>
                </CardFooter>
              </Card>
            </Col> */}

          </Row>
        </ModalBody>
      </Modal>
    </nav>
  );
};

export default WXNavbar;
