import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  Col, Container, Row, UncontrolledTooltip,
} from 'reactstrap';
import './teams.scss';

export const WenexAboutus: React.FC = () => (
  <Container className="text-team-grey team-bg pt-1">
    <div className="wnx-team-outer">
      <div className="wnx-team-inner">
        <img
          alt="..."
          height="auto"
          width="100%"
          src="images/common/communicate.png"
        />
      </div>
    </div>
    <div className="align-profile-center">
      <h2 className="text-profile-header pt-5">
        Our Team
      </h2>
    </div>
    <div className="wnx-contact-outer">
      <div className="wnx-contact-inner">
        <img
          alt="..."
          height="auto"
          width="100%"
          src="/images/common/contact.gif"
        />
      </div>
    </div>
    <Row className="pt-5 m-1">
      <Col className="wnx-team-center pt-2" lg="4" md="6">
        <Card className="wnx-founder-card">
          <CardHeader className="founder-header">
            <CardImg
              alt="..."
              className="team-img"
              src="images/founders/ankur.png"
            />
          </CardHeader>
          <CardBody>
            <h6 className="my-1 wnx-team-center pt-1 text-team-grey">Ankur Chadha</h6>
            <h5 className="wnx-team-center text-team-blue">CEO</h5>
            <div className="pt-2 align-center-wnx">
              <Button
                className="team-btn-neutral"
                color="default"
                href="https://www.linkedin.com/in/ankurchadha/"
                id="tooltiptankurlnk"
                target="_blank"
              >
                <i className="fab"><FontAwesomeIcon icon={faLinkedinIn} /></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltiptankurlnk">
                Linkedin Profile
              </UncontrolledTooltip>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col className="wnx-team-center pt-2" lg="4" md="6">
        <Card className="wnx-founder-card">
          <CardHeader className="founder-header">
            <CardImg
              alt="..."
              className="team-img"
              src="images/founders/sourabh.png"
            />
          </CardHeader>
          <CardBody>
            <h6 className="my-1 wnx-team-center pt-1 text-team-grey">Saurav Chatterjii</h6>
            <h5 className="wnx-team-center text-team-blue">COO</h5>
            <div className="pt-2 align-center-wnx">
              <Button
                className="team-btn-neutral"
                color="default"
                href="https://www.linkedin.com/in/sauravchatterjii/"
                id="tooltiptlnksaurav"
                target="_blank"
              >
                <i className="fab"><FontAwesomeIcon icon={faLinkedinIn} /></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltiptlnksaurav">
                Linkedin Profile
              </UncontrolledTooltip>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col className="wnx-team-center pt-2" lg="4" md="6">
        <Card className="wnx-founder-card">
          <CardHeader className="founder-header">
            <CardImg
              alt="..."
              className="team-img"
              src="images/founders/jeet.jpg"
            />
          </CardHeader>
          <CardBody>
            <h6 className="my-1 wnx-team-center pt-1 text-team-grey">Jeet Jha</h6>
            <h5 className="wnx-team-center text-team-blue">CTO</h5>
            <div className="pt-2 align-center-wnx">
              <Button
                className="team-btn-neutral"
                color="default"
                href="https://www.linkedin.com/in/jeetendra-jha-66578a33/"
                id="tooltiptlnkjeet"
                target="_blank"
              >
                <i className="fab"><FontAwesomeIcon icon={faLinkedinIn} /></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltiptlnkjeet">
                Linkedin Profile
              </UncontrolledTooltip>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col className="mr-auto wnx-team-center pt-2" lg="2" />
      <Col className="wnx-team-center pt-2" lg="4" md="6">
        <Card className="wnx-founder-card">
          <CardHeader className="founder-header">
            <CardImg
              alt="..."
              className="team-img"
              src="images/founders/nikita.png"
            />
          </CardHeader>
          <CardBody>
            <h6 className="my-1 wnx-team-center pt-1 text-team-grey">Nikitha Sharon</h6>
            <h6 className="wnx-team-center text-team-blue">Senior Developer</h6>
            <div className="pt-2 align-center-wnx">
              <Button
                className="team-btn-neutral"
                color="default"
                href="https://www.linkedin.com/in/nikitha-sharon-a25660190/"
                id="tooltiptlnknikita"
                target="_blank"
              >
                <i className="fab"><FontAwesomeIcon icon={faLinkedinIn} /></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltiptlnknikita">
                Linkedin Profile
              </UncontrolledTooltip>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col className="wnx-team-center pt-2" lg="4" md="6">
        <Card className="wnx-founder-card">
          <CardHeader className="founder-header">
            <CardImg
              alt="..."
              className="team-img"
              src="images/founders/khalid.png"
            />
          </CardHeader>
          <CardBody>
            <h6 className="my-1 wnx-team-center pt-1 text-team-grey">Khalid Ansaari</h6>
            <h6 className="wnx-team-center text-team-blue">Developer</h6>
            <div className="pt-2 align-center-wnx">
              <Button
                className="team-btn-neutral"
                color="default"
                href="https://www.linkedin.com/in/khalid-ansari-2b1a08249/"
                id="tooltiptlnkkhalid"
                target="_blank"
              >
                <i className="fab"><FontAwesomeIcon icon={faLinkedinIn} /></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltiptlnkkhalid">
                Linkedin Profile
              </UncontrolledTooltip>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col className="mr-auto wnx-team-center" lg="2" />
    </Row>
  </Container>
);

export default WenexAboutus;
