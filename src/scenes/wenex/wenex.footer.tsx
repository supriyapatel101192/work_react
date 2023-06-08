import {
  faFacebookF, faInstagram, faLinkedinIn, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';
import './wenex.scss';

export const WenexFooter: React.FC = () => (
  <footer className="footer">
    <Container>
      <Row className="mb-1">
        <Col lg="4" className="my-2">
          <h5 className="text-orange mb-2">
            About
          </h5>
          <p className="mb-0 footer-text-wnx">
            WeNexCorp is a next gen technology company aiming to transform the way hiring happens in India by eliminating the time lags and adding science to the art of recruitment. It finds the best talent with Human-Machine collaboration for lateral as well as Campus hires.
          </p>
        </Col>
        <Col lg="1" className="my-2" />
        <Col lg="3" className="my-2">
          <h5 className="text-orange mb-2">
            Join us
          </h5>
          <span className="mb-5">
            <p className="footer-text-wnx"> <i className="fa fa-map-marker" /> {' '} WeNexCorp Pvt Ltd, New Delhi <br />
              <FontAwesomeIcon icon={faEnvelope} className="wx-icon-link-footer" /> {' '} info@wenexcorp.com
            </p>
          </span>
        </Col>
        <Col lg="4" className="my-2">
          <h5 className="text-orange mb-2">
            Follow us
          </h5>
          <div className="wnx-row-footer pt-2">
            <div className="wnx-column-footer mb-2">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.linkedin.com/company/69982011"
                id="tooltiplinkedin"
                target="_blank"
              >
                <i className="fab"><FontAwesomeIcon icon={faLinkedinIn} className="footer-wnx-color" /></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltiplinkedin">
                Linkedin
              </UncontrolledTooltip>
            </div>
            <div className="wnx-column-footer mb-2">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://twitter.com/we_nex"
                id="tooltiptweet"
                target="_blank"
              >
                <i className="fab"><FontAwesomeIcon icon={faTwitter} className="footer-wnx-color" /></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltiptweet">
                Twitter
              </UncontrolledTooltip>
            </div>
            <div className="wnx-column-footer">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.facebook.com/wenex.corp"
                id="tooltipFb"
                target="_blank"
              >
                <i className="fab"><FontAwesomeIcon icon={faFacebookF} className="footer-wnx-color" /></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltipFb">
                Facebook
              </UncontrolledTooltip>
            </div>
            <div className="wnx-column-footer">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.instagram.com/wenexcorp/"
                id="tooltipInsta"
                target="_blank"
              >
                <i className="fab"><FontAwesomeIcon icon={faInstagram} className="footer-wnx-color" /></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltipInsta">
                Instagram
              </UncontrolledTooltip>
            </div>
          </div>
        </Col>
      </Row>
      <div className="wnx-footer-center">
        <span className="copyright">
          copyright {' '}<FontAwesomeIcon icon={faCopyright} />{' '}
          <a
            href="/"
            className="text-lite"
            rel="noreferrer"
            target="_blank"
            style={{
              marginLeft: '2px', marginRight: '2px', fontSize: '15px', textDecoration: 'none',
            }}
          >
            wenexcorp
          </a>
          {' '} 2020
        </span>
      </div>
    </Container>
  </footer>
);

export default WenexFooter;
