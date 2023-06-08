/* eslint-disable linebreak-style */
import {
  faIndianRupeeSign, faMessage, faPhone, faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  Button,
  Col, Container, Row, UncontrolledTooltip,
} from 'reactstrap';
import { WNXCTFooter } from '../../../scenes/coach-talk/coach.footer';
import { BreadcrumbsComponent } from '../../breadcrumb/breadcrumb.component';
import WXNavbar from '../../wenex/navbar/wenex.navbar';
import CoachRating from '../coach-rating/coachrating';
import './coach-talk-description-page.scss';

export const CoachDescriptionPage: React.FC = () => {
  const routeList = [
    { name: 'HOME', route: '/' },
  ];
  return (
    <React.Fragment>
      <WXNavbar />
      <Container className="coach-page-container">

        <Row clasName="cd-top-row pt-2">
          <Col>
            <BreadcrumbsComponent routesList={routeList} />
          </Col>
        </Row>
        <div className="border-outline">
          <div className="cd-card-content">
            <Row>
              <Col>
                <span className="cd-header">Jeet Jha Profile</span>
              </Col>
            </Row>

            <Row>
              <Col xs="5" md="5" lg="5">
                <span className="profile-background">
                  <img alt="coachName" height="225" width="225" className="profile-image" src="images/founders/jeet.jpg" />
                </span>
              </Col>

              <Col xs="7" md="7" lg="7">
                <div>
                  <span className="cd-name">Jeet Jha</span>
                  <span className="verified-icon">
                    <img alt="verified" height="20" width="20" src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/astrologer_profile/verified.webp" />
                  </span>
                </div>

                <Col className="cd-profession" xs="7" md="7" lg="7">
                  Javascript,ReactJS,Python
                </Col>
                <Col className="cd-language" xs="7" md="7" lg="7">
                  English, Hindi
                </Col>
                <Col className="cd-experience" xs="7" md="7" lg="7">
                  Exp: 10 Years
                </Col>
              </Col>
            </Row>

            <Row className="cd-conversation-details">
              <Col className="cd-ccv-details">
                <span><FontAwesomeIcon icon={faMessage} className="cd-icon-details cd-orange-icon" /><b className="cd-minutes-details">23k</b><span>mins</span></span>
              </Col>
              <Col className="cd-ccv-details">
                <span><FontAwesomeIcon icon={faPhone} className="cd-icon-details cd-orange-icon" /><b className="cd-minutes-details">20k</b><span>mins</span></span>
              </Col>
              <Col className="cd-ccv-deatils">
                <span><FontAwesomeIcon icon={faVideoCamera} className="cd-icon-details cd-orange-icon" /><b className="cd-minutes-details">0</b><span>mins</span></span>
              </Col>
            </Row>

            <div className=" cd-conversation-mobile-details cd-border mobile-button-view ">
              <Row>
                <Col>
                  <Button color="default" id="tooltipchatprice"><FontAwesomeIcon icon={faMessage} className="cd-icon-price" /></Button>
                  <UncontrolledTooltip
                    target="tooltipchatprice"
                  >
                    <span className="cd-price-font"><FontAwesomeIcon icon={faIndianRupeeSign} className="cd-white-icon " />18 /min</span>
                  </UncontrolledTooltip>
                </Col>
                <Col>
                  <Button color="default" id="tooltipphoneprice"><FontAwesomeIcon icon={faPhone} className="cd-icon-price" /></Button>
                  <UncontrolledTooltip
                    target="tooltipphoneprice"
                  >
                    <span className="cd-price-font"><FontAwesomeIcon icon={faIndianRupeeSign} className="cd-white-icon " />25 /min</span>
                  </UncontrolledTooltip>
                </Col>
                <Col>
                  <Button color="default" id="tooltipvideocallprice"><FontAwesomeIcon icon={faVideoCamera} className="cd-icon-price" /></Button>
                  <UncontrolledTooltip
                    target="tooltipvideocallprice"
                  >
                    <span className="cd-price-font"><FontAwesomeIcon icon={faIndianRupeeSign} className="cd-white-icon " />30 /min</span>
                  </UncontrolledTooltip>
                </Col>
              </Row>
            </div>

            <Row className="desktop-buttons desktop-button-view">
              <Col>
                <Button className="cd-button"><FontAwesomeIcon icon={faMessage} beatFade className="cd-icon-details" /> Chat<span> <FontAwesomeIcon icon={faIndianRupeeSign} className="cd-desktop-price-icon" />18 <span>/min</span></span></Button>
                <Button className="cd-button"><FontAwesomeIcon icon={faPhone} shake className="cd-icon-details" /> Call<span> <FontAwesomeIcon icon={faIndianRupeeSign} className="cd-desktop-price-icon" />18 <span>/min</span></span></Button>
                <Button className="cd-button"><FontAwesomeIcon icon={faVideoCamera} beatFade className="cd-icon-details" />Video Call <span> <FontAwesomeIcon icon={faIndianRupeeSign} className="cd-desktop-price-icon" />18 <span>/min</span></span></Button>
              </Col>
            </Row>

            <div>
              <Row className="pt-5 cd-about-me cd-about-me-row">
                <h2 className="cd-about-me-heading">About Me</h2>
                <Col md="12">
                  <span className="cd-about-me-para">I am Jeetendra Jha Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quos, sapiente fuga quisquam laborum, officia, sit quidem consectetur ex autem est sunt omnis maiores rem cumque architecto. Consequuntur, voluptate repellant. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae numquam tempora vel nesciunt? Sequi soluta tempora quasi molestiae incidunt ullam, quo corrupti quam repudiandae, id, delectus provident eum maxime quibusdam.</span>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <CoachRating />
      </Container>
      <div className="cd-footer">
        <WNXCTFooter />
      </div>
    </React.Fragment>
  );
};
export default CoachDescriptionPage;
