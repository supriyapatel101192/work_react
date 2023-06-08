/* eslint-disable linebreak-style */
import React from 'react';
import {
  Row, Col, Button, Input, Card, CardBody, UncontrolledTooltip,
} from 'reactstrap';
import {
  faAlignLeft, faIndianRupeeSign, faMessage, faPhone, faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { BreadcrumbsComponent } from '../../breadcrumb/breadcrumb.component';
import './coachcontent.scss';
import { coachData } from './coach-mock';
import CoachStarRating from '../coach-star-rating/coach-star-rating';

export const CoachContent: React.FC = () => {
  const navigate = useNavigate();
  const routeList = [
    { name: 'HOME', route: '/' },
  ];
  const coachDescriptionClick = () => {
    navigate('/coach-description');
  };
  return (
    <React.Fragment>
      <Row className="row-top pt-2">
        <Col>
          <BreadcrumbsComponent routesList={routeList} />
        </Col>
      </Row>
      <Row>
        <Col lg="6" className="col-left">
          <Button className="ct-toggle">
            <FontAwesomeIcon icon={faAlignLeft} />
          </Button>
          <Input type="text" className="coach-search-bar" placeholder="Search name ..." />
          <Button className="coach-card-button">
            <span className="coach-btn-text">Search</span>
          </Button>
        </Col>
      </Row>
      <Row className="ct-margin">
        {coachData.map((data) => (
          <Col key={data.id} sm="12" md="6" lg="4">
            <Card
              body
              outline
              color="blue"
              className="card-component"
            >
              {/* <CardHeader className="coach-header">
        <Row>
          <Col className="col-left">
            <span className="coach-title">Jeet Jha</span>
          </Col>
          <Col className="col-right">
            <FontAwesomeIcon icon={faCaretRight} className="coachcard-icon-arrow" />
          </Col>
        </Row>
      </CardHeader> */}
              <CardBody onClick={() => { coachDescriptionClick(); window.scrollTo(0, 0); }}>
                <div className="direction">
                  <div>
                    <Row>
                      <Col className="coach-image">
                        {data.imageUrl ? (<img alt="coachImage" height="75" width="75" src={data.imageUrl} />
                        )
                          : (<img alt="coachImage" height="75" width="75" src="/images/common/broken-image.png" />)}
                      </Col>
                      <CoachStarRating />
                      <span className="total-view-people ">{data.calls} Orders</span>
                    </Row>
                  </div>
                  <div>
                    <Row className="coach-bio">
                      <div>
                        <Col className="name">
                          {data.coachName}
                        </Col>
                      </div>
                      <div>
                        <Col className="designation">
                          {data.designation}
                        </Col>
                      </div>
                      <div>
                        <Col className="subject">
                          {data.subject.map((sub) => (sub))}
                        </Col>
                      </div>
                      <div>
                        <Col className="language">
                          {data.language.map((lang) => (lang))}
                        </Col>
                      </div>
                      <div>
                        <Col className="experience">
                          Exp:{data.experience} Years
                        </Col>
                      </div>

                    </Row>
                    <Col className="coach-price"><FontAwesomeIcon icon={faIndianRupeeSign} className="price-icon" />
                      <span className="price">{data.price}<span className="minute">/min </span></span>
                    </Col>
                  </div>
                  <div>
                    <Row className="coach-box">
                      <div>
                        <Col>
                          <span className="tick-arrow"><img alt="tick icon" height="18" width="18" src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/Chat_with_astrologers/tick_icon.png" /> </span>
                        </Col>
                      </div>

                    </Row>
                  </div>
                </div>
                <div className="ct-icon-feature">
                  <Col>
                    <Button color="default" id="tooltipchat"><FontAwesomeIcon icon={faMessage} className="ct-icon-details" /></Button>
                    <UncontrolledTooltip
                      target="tooltipchat"
                    >
                      Chat
                    </UncontrolledTooltip>
                  </Col>
                  <Col>
                    <Button color="default" id="tooltipphone"><FontAwesomeIcon icon={faPhone} className="ct-icon-details" /></Button>
                    <UncontrolledTooltip
                      target="tooltipphone"
                    >
                      Phone
                    </UncontrolledTooltip>
                  </Col>
                  <Col>
                    <Button color="default" id="tooltipvideocall"><FontAwesomeIcon icon={faVideoCamera} className="ct-icon-details" /></Button>
                    <UncontrolledTooltip
                      target="tooltipvideocall"
                    >
                      Video Call
                    </UncontrolledTooltip>
                  </Col>
                </div>
              </CardBody>

            </Card>
          </Col>
        ))};
      </Row>
    </React.Fragment>
  );
};
