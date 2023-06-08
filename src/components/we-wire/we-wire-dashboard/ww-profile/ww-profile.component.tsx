import {
  Button,
  Col, Container, Row,
} from 'reactstrap';
import { ProfileTab } from '../ww-profile-user-details/profile-tabs/profile-tabs.component';
import './ww-profile.scss';

export const WWProfile: React.FC = () => (
  <Container className="ww-profile-container">
    <Row className="ww-profile-pg">
      <Col className="ww-profile-bg">
        <Row>
          <Col xs="12" lg="12" className="ww-profile-bg-img-col">
            <img src="/work.png" alt="bg-img" className="ww-profile-bg-img" />
          </Col>
        </Row>
        <Row>
          <div className="ww-profile-img-col">
            <img src="/wenex.png" alt="bg-img" className="ww-profile-img" />
          </div>
          <Col xs="2" lg="2" />
          <Col xs="3" lg="3" className="ww-usr-name">
            Mitchell C. Shay
          </Col>
          <Col xs="7" lg="7" className="ww-usr-data">
            hello@email.com
          </Col>
        </Row>
        <Row>
          <Col xs="2" lg="2" />
          <Col xs="3" lg="3" className="ww-usr-data">
            UX / UI Designerddd
          </Col>
          <Col xs="7" lg="7" className="ww-usr-data">
            Experienced/Fresher
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col xs="4" lg="4" className="ww-profile-col-left">
        <Row>
          <Col xs="4" lg="4" className="ww-usr-data-val">
            150
          </Col>
          <Col xs="4" lg="4" className="ww-usr-data-val">
            140
          </Col>
          <Col xs="4" lg="4" className="ww-usr-data-val">
            45
          </Col>
        </Row>
        <Row>
          <Col xs="4" lg="4" className="ww-usr-data-label">
            Follower
          </Col>
          <Col xs="4" lg="4" className="ww-usr-data-label">
            Place Stay
          </Col>
          <Col xs="4" lg="4" className="ww-usr-data-label">
            Reviews
          </Col>
        </Row>
        <Row>
          <Col xs="5" lg="5" className="ww-usr-follow-col">
            <Button className="ww-usr-btn">Follow</Button>
          </Col>
          <Col xs="7" lg="7" className="ww-usr-msg-col">
            <Button className="ww-usr-btn">Send Message</Button>
          </Col>
          <Col xs="12" lg="12" className="ww-usr-hl">
            <span className="ww-usr-hl-heading">Today Highlights</span>
            <span className="ww-usr-hl-more">More</span>
            <Row className="ww-usr-hl">
              <Col xs="12" lg="12">
                <img src="/work.png" alt="bg-img" className="ww-profile-bg-img" />
              </Col>
              <Col xs="12" lg="12" className="ww-usr-hl-content">
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </Col>
            </Row>
          </Col>
          {/**  duplicate data */}
          <Col xs="12" lg="12" className="ww-usr-hl">
            <span className="ww-usr-hl-heading">Today Highlights</span>
            <span className="ww-usr-hl-more">More</span>
            <Row className="ww-usr-hl">
              <Col xs="12" lg="12">
                <img src="/work.png" alt="bg-img" className="ww-profile-bg-img" />
              </Col>
              <Col xs="12" lg="12" className="ww-usr-hl-content">
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </Col>
            </Row>
          </Col>
          <Col xs="12" lg="12" className="ww-usr-hl">
            <span className="ww-usr-hl-heading">Today Highlights</span>
            <span className="ww-usr-hl-more">More</span>
            <Row className="ww-usr-hl">
              <Col xs="12" lg="12">
                <img src="/work.png" alt="bg-img" className="ww-profile-bg-img" />
              </Col>
              <Col xs="12" lg="12" className="ww-usr-hl-content">
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col xs="7" lg="7" className="ww-profile-col-right">
        <ProfileTab />
      </Col>
    </Row>
  </Container>
);
