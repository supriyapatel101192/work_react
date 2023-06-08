import {
  faArrowsDownToPeople, faAtom, faBullseye, faHandHoldingDollar, faLightbulb, faRankingStar, faRobot, faScaleBalanced,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardFooter,
  Col, Container, Row,
} from 'reactstrap';
import './about.scss';

export const WenexAbout: React.FC = () => (
  <Container className="text-white about-bg pt-1">
    <div className="align-profile-center">
      <h2 className="text-profile-header pt-5">
        About Us
      </h2>
    </div>
    <Row>
      <div className="about-outer">
        <div className="about-inner">
          <img
            alt="..."
            height="auto"
            width="100%"
            src="images/common/wnx-page-iregular.png"
          />
        </div>
      </div>
      <Col lg="4" md="5" className="pt-5">
        <div className="align-about-center">
          <FontAwesomeIcon icon={faAtom} className="about-icon-on-back" />
        </div>
        <div className="margin-about-text">
          <h5 className="text-about-grey">
            wenexcorp is a next-gen technology company aiming to transform the way hiring happens in India, by eliminating the time lags and adding science to the art of recruitment.
          </h5>
        </div>
      </Col>
      <Col lg="4" md="5" className="pt-5">
        <div className="align-about-center">
          <FontAwesomeIcon icon={faRobot} className="about-icon-on-back" />
        </div>
        <div className="margin-about-text">
          <h5 className="text-about-grey">
            It finds the best talent with <span className="text-heading">Human-Machine</span> collaboration for lateral as well as Campus hires.
          </h5>
        </div>
      </Col>
      <Col lg="4" md="5" className="pt-5">
        <div className="align-about-center">
          <FontAwesomeIcon icon={faScaleBalanced} className="about-icon-on-back" />
        </div>
        <div className="margin-about-text">
          <h5 className="text-about-grey">
            The purpose of the platform is to empower <span className="text-heading">Hiring Manager</span> to make selection decisions
            faster and more reliably, without personal bias and along with the use of video and
            mobile technology.
          </h5>
        </div>
      </Col>
      <Col lg="4" md="5" className="pt-5">
        <div className="align-about-center">
          <FontAwesomeIcon icon={faRankingStar} className="about-icon-on-back" />
        </div>
        <div className="margin-about-text">
          <h5 className="text-about-grey">
            WeNexCorp screens prospective candidates by assessing them on key competencies critical for
            the job, ranking them on the desired competencies using <span className="text-heading">Artificial Intelligence</span>, and
            providing the hiring managers with validated data points to make reliable hiring decisions.
          </h5>
        </div>
      </Col>
      <Col lg="4" md="5" className="pt-5">
        <div className="align-about-center">
          <FontAwesomeIcon icon={faArrowsDownToPeople} className="about-icon-on-back" />
        </div>
        <div className="margin-about-text">
          <h5 className="text-about-grey">
            Our comprehensive cloud-based platform enables the automation of the entire recruitment
            life-cycle for an organization - from talent identification, evaluation &amp; engagement
            to onboarding - from end-to-end on a <span className="text-heading">single platform</span>.
          </h5>
        </div>
      </Col>
      <Col lg="4" md="5" className="pt-5">
        <div className="align-about-center">
          <FontAwesomeIcon icon={faHandHoldingDollar} className="about-icon-on-back" />
        </div>
        <div className="margin-about-text">
          <h5 className="text-about-grey">
            We endeavor to help corporates recruit the best available talent, at the lowest possible
            cost, with <span className="text-heading">minimal human intervention</span>, and in the least possible time so that their
            businesses are on a growth trajectory.
          </h5>
        </div>
      </Col>

      <Col lg="12" md="12" className="pt-5">
        <div className="align-about-center">
          <FontAwesomeIcon icon={faBullseye} className="about-icon-on-back" />
        </div>
        <div className="margin-about-text-all-prod">
          <h5 className="text-about-grey">
            Every solution emerges from a need. Client`s evolving needs are as unique as
            their business, they share one basic goal: to build a workforce with the best
            talent, now and in the future. At WenexCorp we get that done.
          </h5>
        </div>
      </Col>
      <Col lg="3" md="6" className="pt-3">
        <Card className="card-about-product about-footer-bg">
          <CardBody>
            <div className="margin-about-text pt-2">
              <h6 className="about-text-header">
                <FontAwesomeIcon icon={faLightbulb} className="wx-icon-link why-wenex-num" />
                <span className="about-text-sec-header">Campus</span>Connect
              </h6>
              <h6 className="text-about-grey pt-2 text-justify">
                It is a cloud-based platform that creates a seamless hiring experience for
                freshers and corporates. CampusConnect delivers speed and scalability while leveraging
                artificial intelligence, recruitment marketing, machine learning, predictive analytics,
                and other emerging technologies with one-point ATS.
              </h6>
            </div>
          </CardBody>
          <CardFooter className="align-about-center about-footer-bg">
            <NavLink
              className="about-button"
              to="/campus-connect"
              type="button"
              title="Know more about CampusConnect"
              onClick={() => { window.scrollTo(0, 0); }}
            >
              Know More
            </NavLink>
          </CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6" className="pt-3">
        <Card className="card-about-product">
          <CardBody>
            <div className="margin-about-text pt-2">
              <h6 className="about-text-header">
                <FontAwesomeIcon icon={faLightbulb} className="wx-icon-link why-wenex-num" />
                <span className="about-text-sec-header">Eaze</span>Hire
              </h6>
              <h6 className="text-about-grey pt-2 text-justify">
                EazeHire is our cloud-based intelligent recruitment software with augmented
                intelligence to hire faster and hire better. The platform aims to remove human
                bias and provide the best matched skilled profiles for every open opportunity.
              </h6>
            </div>
          </CardBody>
          <CardFooter className="align-about-center">
            <NavLink
              className="about-button"
              to="/eaze-hire"
              type="button"
              title="Know more about EazeHire"
              onClick={() => { window.scrollTo(0, 0); }}
            >
              Know More
            </NavLink>
          </CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6" className="pt-3">
        <Card className="card-about-product about-footer-bg">
          <CardBody>
            <div className="margin-about-text pt-2">
              <h6 className="about-text-header">
                <FontAwesomeIcon icon={faLightbulb} className="wx-icon-link why-wenex-num" />
                <span className="about-text-sec-header">Coach</span>Talk
              </h6>
              <h6 className="text-about-grey pt-2 text-justify">
                CoachTalk is our panel of experts from various job functions that provide one on one coaching &amp;
                mentoring to help employees overcome their professional crisis.
              </h6>
            </div>
          </CardBody>
          <CardFooter className="align-about-center about-footer-bg">
            <NavLink
              className="about-button"
              to="/coming-soon"
              type="button"
              title="Know more about CoachTalk"
              onClick={() => { window.scrollTo(0, 0); }}
            >
              Know More
            </NavLink>
          </CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6" className="pt-3">
        <Card className="card-about-product">
          <CardBody>
            <div className="margin-about-text pt-2">
              <h6 className="about-text-header">
                <FontAwesomeIcon icon={faLightbulb} className="wx-icon-link why-wenex-num" />
                <span className="about-text-sec-header">We</span>Train
              </h6>
              <h6 className="text-about-grey pt-2 text-justify">
                WeTrain, the platform helps corporates conduct their training, assessments &amp;
                certifications for their employees across functions.
              </h6>
            </div>
          </CardBody>
          <CardFooter className="align-about-center">
            <NavLink
              className="about-button"
              to="/coming-soon"
              type="button"
              title="Know more about WeTrain"
              onClick={() => { window.scrollTo(0, 0); }}
            >
              Know More
            </NavLink>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default WenexAbout;
