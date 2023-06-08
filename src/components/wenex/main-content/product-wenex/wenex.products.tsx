import React, { MutableRefObject, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import classnames from 'classnames';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container, Nav, NavItem, NavLink, Row, TabContent, TabPane,
} from 'reactstrap';
import './product.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';

export const WenexProducts: React.FC = () => {
  const location = useLocation();
  const ehDiv = useRef() as MutableRefObject<HTMLDivElement>;
  const ccDiv = useRef() as MutableRefObject<HTMLDivElement>;
  const ctDiv = useRef() as MutableRefObject<HTMLDivElement>;
  const wtDiv = useRef() as MutableRefObject<HTMLDivElement>;
  const [tabsEH, setTabsEH] = React.useState(1);
  const [tabsCC, setTabsCC] = React.useState(1);
  const [tabsCT, setTabsCT] = React.useState(1);
  const [tabsWT, setTabsWT] = React.useState(1);
  React.useLayoutEffect(() => {
    if (location.hash === '#eaze-hire') {
      ehDiv.current.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#campus-connect') {
      ccDiv.current.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#coach-talk') {
      ctDiv.current.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#we-train') {
      wtDiv.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  return (
    <Container className="pt-5 text-white product-bg">
      <div className="align-product-center">
        <h2 className="text-profile-header pt-2">
          Our Products
        </h2>
      </div>
      <Row className="all-eh-bg align-profile-center mx-2 pt-5">
        <Col className="ml-auto mr-auto wenex-prod-mar-bottom" lg="4" md="4">
          <Card className="card-wnx-product align-product-center">
            <CardHeader className="pt-3 card-header-product">
              <h4 className="tab-product-text"><span className="tab-product-text-sec">Eaze</span>Hire</h4>
            </CardHeader>
            <CardBody className="pt-3">
              <ReactPlayer
                url="https://wenex-public-media.s3.ap-southeast-1.amazonaws.com/videos/eh-video.mp4"
                style={{ boxShadow: '0 10px 20px 0px rgba(10, 0, 10, 0.6)', background: 'white', opacity: '.92' }}
                controls
                width="100%"
                height="auto"
              />
            </CardBody>
          </Card>
        </Col>
        <Col className="ml-auto mr-auto wenex-prod-mar-bottom" lg="7" md="8">
          <div ref={ehDiv}>
            <Card className="card-wnx-product">
              <CardBody>
                <Nav
                  className="justify-content-start"
                  tabs
                >
                  <NavItem className="pt-2">
                    <NavLink
                      className={classnames({
                        active: tabsEH === 1,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabsEH(1);
                      }}
                      href="#product"
                    >
                      <h6 className="tab-product-text">About</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem className="pt-2">
                    <NavLink
                      className={classnames({
                        active: tabsEH === 2,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabsEH(2);
                      }}
                      href="#product"
                    >
                      <h6 className="tab-product-text">Why EazeHire</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem className="pt-2">
                    <NavLink
                      className={classnames({
                        active: tabsEH === 3,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabsEH(3);
                      }}
                      href="#product"
                    >
                      <h6 className="tab-product-text">Scope</h6>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent
                  className="tab-subcategories"
                  activeTab={`tabEH${tabsEH}`}
                >
                  <TabPane tabId="tabEH1" className="margin-tab-data">
                    <Row>
                      <h4 className="text-product pt-3">
                        <span className="tab-product-text">EazeHire</span> builds transparency and efficiency in talent hiring
                        using state-of- the-art technology for video profiling and
                        real-time video interviewing, thereby reducing the in-process time lag,
                        helping organizations, optimize the opportunity cost.
                      </h4>
                    </Row>
                  </TabPane>
                  <TabPane tabId="tabEH2" className="margin-tab-data">
                    <Row>
                      <h4 className="text-product product-text-orange pt-3">
                        The Mantra is – Hire faster, Hire Better
                      </h4>
                    </Row>
                    <Row>
                      <h5 className="text-product">
                        EazeHire is an intelligent technology platform which is transforming the way talent hiring happens in India- eliminating the time lags and adding science to the art of recruitment.
                      </h5>
                    </Row>
                  </TabPane>
                  <TabPane tabId="tabEH3" className="margin-tab-data">
                    <Row>
                      <h4 className="text-product product-text-orange pt-1">
                        Key Scope
                      </h4>
                    </Row>
                    <Row>
                      <h5 className="text-product pt-1">
                        <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Provides regular status updates through Dashboards via messages and emails to internal &amp; external stakeholders.
                      </h5>
                    </Row>
                    <Row>
                      <h5 className="text-product pt-1">
                        <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Creates a pipeline of prospective candidates &amp; creates the best matched profile alligned to your Job Description using <span className="text-success">Artificial Intelligence </span>
                      </h5>
                    </Row>
                    <Row>
                      <h5 className="text-product pt-1">
                        <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Automates the creation of a searchlist of candidates with their profiles ranked as per the fitment for the job requirement.
                      </h5>
                    </Row>
                    <Row>
                      <h5 className="text-product pt-1">
                        <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Feedback captured during real-time interviews can be recorded and archived for future calibration.
                      </h5>
                    </Row>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
      <Row className="all-cc-bg align-profile-center mx-2 pt-5">
        <Col className="ml-auto mr-auto wenex-prod-mar-bottom" lg="4" md="4">
          <Card className="card-wnx-product align-product-center">
            <CardHeader className="pt-3 card-header-product">
              <h4 className="tab-product-text"><span className="tab-product-text-sec">Campus</span>Connect</h4>
            </CardHeader>
            <CardBody className="pt-3">
              <ReactPlayer
                url="https://wenex-public-media.s3.ap-southeast-1.amazonaws.com/videos/campus-connect.mp4"
                style={{ boxShadow: '0 10px 20px 0px rgba(10, 0, 10, 0.6)', background: 'white', opacity: '.92' }}
                controls
                width="100%"
                height="auto"
              />
            </CardBody>
          </Card>
        </Col>
        <Col className="ml-auto mr-auto wenex-prod-mar-bottom" lg="7" md="8">
          <div ref={ehDiv}>
            <Card className="card-wnx-product">
              <CardBody>
                <Nav
                  className="nav-tabs-primary justify-content-start"
                  tabs
                >
                  <NavItem className="pt-2">
                    <NavLink
                      className={classnames({
                        active: tabsCC === 1,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabsCC(1);
                      }}
                      href="#product"
                    >
                      <h6 className="tab-product-text">About</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem className="pt-2">
                    <NavLink
                      className={classnames({
                        active: tabsCC === 2,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabsCC(2);
                      }}
                      href="#product"
                    >
                      <h6 className="tab-product-text">Why CampusConnect</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem className="pt-2">
                    <NavLink
                      className={classnames({
                        active: tabsCC === 3,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabsCC(3);
                      }}
                      href="#product"
                    >
                      <h6 className="tab-product-text">Scope</h6>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent
                  className="tab-subcategories"
                  activeTab={`tabCC${tabsCC}`}
                >
                  <TabPane tabId="tabCC1" className="margin-tab-data">
                    <Row>
                      <h4 className="text-product pt-3">
                        <span className="tab-product-text">CampusConnect</span> program will groom
                        future leaders, for tomorrow who will be value-driven individuals with a
                        deep passion for humanity.
                      </h4>
                    </Row>
                  </TabPane>
                  <TabPane tabId="tabCC2" className="margin-tab-data">
                    <Row>
                      <h4 className="text-product product-text-orange pt-3">
                        We are the shapers of great minds and honorable values
                      </h4>
                    </Row>
                    <Row>
                      <h5 className="text-product">
                        Trainings &amp; Live Advice :  It will help students to build capabilities to anticipate and manage change through practical exposure. <br />
                        It will enable students to make decisions under dynamic and uncertain situations.
                      </h5>
                    </Row>
                  </TabPane>
                  <TabPane tabId="tabCC3" className="margin-tab-data">
                    <Row>
                      <h4 className="text-product product-text-orange pt-3">
                        Key Scope
                      </h4>
                    </Row>
                    <Row>
                      <h5 className="text-product pt-1">
                        <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />
                        <span className="text-success">Placements Procedure :</span> Employers from the pool of clients from
                        varied industry sectors on the platform are invited for online candidate assessments.
                      </h5>
                    </Row>
                    <Row>
                      <h5 className="text-product pt-1">
                        <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />
                        <span className="text-success">Interview Procedure : </span>Further rounds like
                        personal interviews, technical screenings, psychometric tests, etc. are conducted to
                        filter out the best-suited candidates.
                      </h5>
                    </Row>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
      <Row className="all-ct-bg align-profile-center mx-2 pt-5">
        <Col className="ml-auto mr-auto wenex-prod-mar-bottom" lg="4" md="4">
          <Card className="card-wnx-product align-product-center">
            <CardHeader className="pt-3 card-header-product">
              <h4 className="tab-product-text"><span className="tab-product-text-sec">Coach</span>Talk</h4>
            </CardHeader>
            <CardBody className="pt-3">
              <img
                alt="..."
                height="auto"
                width="100%"
                src="images/common/coach-about.png"
              />
            </CardBody>
          </Card>
        </Col>
        <Col className="ml-auto mr-auto wenex-prod-mar-bottom" lg="7" md="8">
          <div ref={ehDiv}>
            <Card className="card-wnx-product">
              <CardBody>
                <Nav
                  className="nav-tabs-primary justify-content-start"
                  tabs
                >
                  <NavItem className="pt-2">
                    <NavLink
                      className={classnames({
                        active: tabsCT === 1,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabsCT(1);
                      }}
                      href="#product"
                    >
                      <h6 className="tab-product-text">About</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem className="pt-2">
                    <NavLink
                      className={classnames({
                        active: tabsCT === 2,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabsCT(2);
                      }}
                      href="#product"
                    >
                      <h6 className="tab-product-text">Why CoachTalk</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem className="pt-2">
                    <NavLink
                      className={classnames({
                        active: tabsCT === 3,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabsCT(3);
                      }}
                      href="#product"
                    >
                      <h6 className="tab-product-text">Scope</h6>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent
                  className="tab-subcategories"
                  activeTab={`tabCT${tabsCT}`}
                >
                  <TabPane tabId="tabCT1" className="margin-tab-data">
                    <Row>
                      <h4 className="text-product pt-3">
                        <span className="tab-product-text">CoachTalk</span> program helps working
                        professionals advance and make informed decisions about their careers.
                      </h4>
                    </Row>
                  </TabPane>
                  <TabPane tabId="tabCT2" className="margin-tab-data">
                    <Row>
                      <h4 className="text-product product-text-orange pt-3">
                        Coaching is that you have to trouble the comfortable, and comfort the troubled
                      </h4>
                    </Row>
                    <Row>
                      <h5 className="text-product">
                        Coaches have the knowledge and expertise to help you become a better professional.
                        <span className="text-success"> Career Coach</span> is a domain expert who helps professionals steer their career paths through
                        personalized guidance and advice. You may consider a career coach for several reasons, including
                        finding a new job, changing careers, or working towards a promotion.
                      </h5>
                    </Row>
                  </TabPane>
                  <TabPane tabId="tabCT3" className="margin-tab-data">
                    <Row>
                      <h4 className="text-product product-text-orange pt-3">
                        Key Scope
                      </h4>
                    </Row>
                    <Row>
                      <h5 className="text-product pt-1">
                        <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Hiring a career coach can be beneficial for your career and there are certain things that career coaches can do for you, including but not limited to.
                      </h5>
                    </Row>
                    <Row>
                      <h5 className="text-product pt-1">
                        <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />
                        Personalize your career plan.
                      </h5>
                    </Row>
                    <Row>
                      <h5 className="text-product pt-1">
                        <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Help overcome career anxiety.
                      </h5>
                    </Row>
                    <Row>
                      <h5 className="text-product pt-1">
                        <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Provide honest feedback.
                      </h5>
                    </Row>
                    <Row>
                      <h5 className="text-product pt-1">
                        <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Help with a work problem.
                      </h5>
                    </Row>
                    <Row>
                      <h5 className="text-product pt-1">
                        <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Assist you in starting a business.
                      </h5>
                    </Row>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
      <Row className="all-wt-bg align-profile-center mx-2 pt-5">
        <Col className="ml-auto mr-auto wenex-prod-mar-bottom" lg="4" md="4">
          <Card className="card-wnx-product align-product-center">
            <CardHeader className="pt-5 card-header-product">
              <h4 className="tab-product-text"><span className="tab-product-text-sec">We</span>Train</h4>
            </CardHeader>
            <CardBody className="pt-3">
              <img
                alt="..."
                height="auto"
                width="100%"
                src="images/common/training.png"
              />
            </CardBody>
          </Card>
        </Col>
        <Col className="ml-auto mr-auto wenex-prod-mar-bottom" lg="7" md="8">
          <div ref={ehDiv}>
            <Card className="card-wnx-product">
              <CardBody>
                <Nav
                  className="nav-tabs-primary justify-content-start"
                  tabs
                >
                  <NavItem className="pt-2">
                    <NavLink
                      className={classnames({
                        active: tabsWT === 1,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabsWT(1);
                      }}
                      href="#product"
                    >
                      <h6 className="tab-product-text">About</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem className="pt-2">
                    <NavLink
                      className={classnames({
                        active: tabsWT === 2,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabsWT(2);
                      }}
                      href="#product"
                    >
                      <h6 className="tab-product-text">Why WeTrain</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem className="pt-2">
                    <NavLink
                      className={classnames({
                        active: tabsWT === 3,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabsWT(3);
                      }}
                      href="#product"
                    >
                      <h6 className="tab-product-text">Scope</h6>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent
                  className="tab-subcategories"
                  activeTab={`tabWT${tabsWT}`}
                >
                  <TabPane tabId="tabWT1" className="margin-tab-data">
                    <Row>
                      <h4 className="text-product pt-3">
                        Professionals today have to steer workplace uncertainty.
                        WeTrain would help them upskill, and build a strong job profile.
                        WeTrain through its strategic training helps learners manoeuvre
                        their career paths confidently. <span className="text-success">WeTrain </span>
                        understands the pulse of job seekers and employers. Through its live upskilling
                        platform for the Indian workforce, WeTrain helps them learn, grow and navigate
                        the market uncertainties successfully.
                      </h4>
                    </Row>
                  </TabPane>
                  <TabPane tabId="tabWT2" className="margin-tab-data">
                    <Row>
                      <h4 className="text-product product-text-orange pt-3">
                        Leadership and learning are indispensable to each other
                      </h4>
                    </Row>
                    <Row>
                      <h5 className="text-product pt-1">
                        <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" /><span className="text-green">WeTrain </span> works with the objective of changing lives through learning.
                      </h5>
                    </Row>
                    <Row>
                      <h5 className="text-product pt-1">
                        <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" /><span className="text-green">WeTrain </span> gives its learners a unique opportunity to upskill from the comfort of their homes/hostels or literally anywhere.
                      </h5>
                    </Row>
                    <Row>
                      <h5 className="text-product pt-1">
                        <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" /><span className="text-green">WeTrain </span> works with the objective of changing lives through learning.
                      </h5>
                    </Row>
                    <Row>
                      <h5 className="text-product pt-1">
                        <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" /><span className="text-green">WeTrain </span> has a learner-focused approach bringing together a collaborative system, relevant content, and experienced consultants on a single platform.
                      </h5>
                    </Row>
                    <Row>
                      <h5 className="text-product pt-1">
                        <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" /><span className="text-green">WeTrain </span> helps you get professional advice from the industry’s best consultants to design customized training programs, and develop competencies that support business objectives.
                      </h5>
                    </Row>
                  </TabPane>
                  <TabPane tabId="tabWT3" className="margin-tab-data">
                    <Row>
                      <h4 className="text-product product-text-orange pt-3">
                        Key Scope
                      </h4>
                    </Row>
                    <Row>
                      <h6 className="text-success pt-1">
                        WeTrain provides strategic training in the areas of.
                      </h6>
                    </Row>
                    <Row>
                      <Col lg="6" md="12" className=" pt-2">
                        <h6 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Business Goal Settings.
                        </h6>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Management by Business Objectives.
                        </h5>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Customer Experience Management.
                        </h5>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Employee Experience Management.
                        </h5>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Selling and Negotiation Skills.
                        </h5>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Customer Satisfaction &amp; Delight.
                        </h5>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Net Promoter Score.
                        </h5>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Transformational Leadership.
                        </h5>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Decision-making Skills.
                        </h5>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Leadership without ego.
                        </h5>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Communication Skills.
                        </h5>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Developing High-Potential Organizations.
                        </h5>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Interviewing Skills.
                        </h5>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Feedback Delivery Styles.
                        </h5>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Stress Management.
                        </h5>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Time Management.
                        </h5>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Train the Trainer.
                        </h5>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Competency-Based Talent Assessment.
                        </h5>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Performance Management Systems.
                        </h5>
                      </Col>
                      <Col lg="6" md="12" className="text-left  pt-2">
                        <h5 className="text-product pt-1">
                          <FontAwesomeIcon icon={faLightbulb} className="wx-prod-icon-link" />Employee Value Proposition.
                        </h5>
                      </Col>
                    </Row>
                    <Row>
                      <h5 className="text-success pt-5">
                        Methodology followed
                      </h5>
                    </Row>
                    <Row>
                      <h5 className="text-product pt-1">
                        Mode of training is a combination of Lecture based programs
                        with Icebreaker, Fillers, Energizers, Movie Clips, Activity,
                        Games, Real life situations, Role play, Role Analysis &amp;
                        Framework for implementation.
                      </h5>
                    </Row>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WenexProducts;
