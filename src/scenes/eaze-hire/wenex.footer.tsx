import {
  faFacebookF, faInstagram, faLinkedinIn, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  Button,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';
import './public/eazehire.scss';

export const WNXEHFooter: React.FC = () => (
  <Row className="eh-footer">
    <Col lg="4" className="eh-copyright">
      <Button
        className="eh-btn-icon"
        color="default"
        href="https://www.linkedin.com/company/69982011"
        id="tooltiplinkedin"
        target="_blank"
      >
        <i className="fab"><FontAwesomeIcon icon={faLinkedinIn} /></i>
      </Button>
      <UncontrolledTooltip delay={0} target="tooltiplinkedin">
        Linkedin
      </UncontrolledTooltip>
      <Button
        className="eh-btn-icon"
        color="default"
        href="https://twitter.com/we_nex"
        id="tooltiptweet"
        target="_blank"
      >
        <i className="fab"><FontAwesomeIcon icon={faTwitter} /></i>
      </Button>
      <UncontrolledTooltip delay={0} target="tooltiptweet">
        Twitter
      </UncontrolledTooltip>
      <Button
        className="eh-btn-icon"
        color="default"
        href="https://www.facebook.com/wenex.corp"
        id="tooltipFb"
        target="_blank"
      >
        <i className="fab"><FontAwesomeIcon icon={faFacebookF} /></i>
      </Button>
      <UncontrolledTooltip delay={0} target="tooltipFb">
        Facebook
      </UncontrolledTooltip>
      <Button
        className="eh-btn-icon"
        color="default"
        href="https://www.instagram.com/wenexcorp/"
        id="tooltipInsta"
        target="_blank"
      >
        <i className="fab"><FontAwesomeIcon icon={faInstagram} /></i>
      </Button>
      <UncontrolledTooltip delay={0} target="tooltipInsta">
        Instagram
      </UncontrolledTooltip>
    </Col>
    <Col lg="4" className="eh-copyright">
      <span>
        WeNexCorp Pvt Ltd, New Delhi
      </span>
    </Col>
    <Col lg="4" className="eh-copyright">
      <span>
        copyright {' '}<FontAwesomeIcon icon={faCopyright} />{' '}
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          className="eh-company-data"
        >
          wenexcorp
        </a>
        {' '} 2020
      </span>
    </Col>
  </Row>
);

export default WNXEHFooter;
