import {
  Button,
  Col, Container, Row,
} from 'reactstrap';
import { ProfileTab } from '../cc-profile-user-details/profile-tabs/profile-tabs.component';
import './cc-profile.scss';

export const CCProfile: React.FC = () => (
  <Container className="cc-profile-container">
    <Row>
      <Col className="cc-profile-bg">
        <Row>
          <Col xs="12" lg="12" className="cc-profile-bg-img-col">
            <img src="/work.png" alt="bg-img" className="cc-profile-bg-img" />
          </Col>
        </Row>
        <Row>
          <div className="cc-profile-img-col">
            <img src="/wenex.png" alt="bg-img" className="cc-profile-img" />
          </div>
          <Col xs="2" lg="2" />
          <Col xs="3" lg="3" className="cc-usr-name">
            Mitchell C. Shay
          </Col>
          <Col xs="7" lg="7" className="cc-usr-data">
            hello@email.com
          </Col>
        </Row>
        <Row>
          <Col xs="2" lg="2" />
          <Col xs="3" lg="3" className="cc-usr-data">
            UX / UI Designerddd
          </Col>
          <Col xs="7" lg="7" className="cc-usr-data">
            Experienced/Fresher
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col xs="4" lg="4" className="cc-profile-col-left">
        <Row>
          <Col xs="4" lg="4" className="cc-usr-data-val">
            150
          </Col>
          <Col xs="4" lg="4" className="cc-usr-data-val">
            140
          </Col>
          <Col xs="4" lg="4" className="cc-usr-data-val">
            45
          </Col>
        </Row>
        <Row>
          <Col xs="4" lg="4" className="cc-usr-data-label">
            Follower
          </Col>
          <Col xs="4" lg="4" className="cc-usr-data-label">
            Place Stay
          </Col>
          <Col xs="4" lg="4" className="cc-usr-data-label">
            Reviews
          </Col>
        </Row>
        <Row>
          <Col xs="5" lg="5" className="cc-usr-follow-col">
            <Button className="cc-usr-btn">Follow</Button>
          </Col>
          <Col xs="7" lg="7" className="cc-usr-msg-col">
            <Button className="cc-usr-btn">Send Message</Button>
          </Col>
          <Col xs="12" lg="12" className="cc-usr-hl">
            <span className="cc-usr-hl-heading">Today Highlights</span>
            <span className="cc-usr-hl-more">More</span>
            <Row className="cc-usr-hl">
              <Col xs="12" lg="12">
                <img src="/work.png" alt="bg-img" className="cc-profile-bg-img" />
              </Col>
              <Col xs="12" lg="12" className="cc-usr-hl-content">
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </Col>
            </Row>
          </Col>
          {/**  duplicate data */}
          <Col xs="12" lg="12" className="cc-usr-hl">
            <span className="cc-usr-hl-heading">Today Highlights</span>
            <span className="cc-usr-hl-more">More</span>
            <Row className="cc-usr-hl">
              <Col xs="12" lg="12">
                <img src="/work.png" alt="bg-img" className="cc-profile-bg-img" />
              </Col>
              <Col xs="12" lg="12" className="cc-usr-hl-content">
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </Col>
            </Row>
          </Col>
          <Col xs="12" lg="12" className="cc-usr-hl">
            <span className="cc-usr-hl-heading">Today Highlights</span>
            <span className="cc-usr-hl-more">More</span>
            <Row className="cc-usr-hl">
              <Col xs="12" lg="12">
                <img src="/work.png" alt="bg-img" className="cc-profile-bg-img" />
              </Col>
              <Col xs="12" lg="12" className="cc-usr-hl-content">
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col xs="7" lg="7" className="cc-profile-col-right">
        <ProfileTab />
      </Col>
    </Row>
  </Container>
);
