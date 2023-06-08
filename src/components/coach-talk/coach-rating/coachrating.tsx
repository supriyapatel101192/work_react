/* eslint-disable linebreak-style */
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {

  Col, Container, Progress, Row,
} from 'reactstrap';
import StarRating from '../../job-board/star-rating/star-rating.component';
import CoachModal from '../coach-modal/coach-modal';
import './coachrating.scss';

export const CoachRating: React.FC = () => (
  <Container className="ratingcontainer">
    <Row>
      <Col className="ratingbox" md="6">
        <div className="border-outline">
          <Row>
            <Col md="12">
              <span className="ratingheading">Ratings & Reviews</span>
            </Col>
            <Row>
              <Col md="5">
                <h2 className="ratingnumber">5.00</h2>
                <div className="ratingstar">
                  <StarRating />
                </div>
                <div className="total-view">
                  <FontAwesomeIcon className="user-icon" icon={faUser} /><span className="value-total">7667 global ratings</span>
                </div>
              </Col>
              <Col md="7">
                <Col className="flex-rating">
                  <div className="status-bar-rating">
                    <div className="number-progress-bar">5
                    </div>
                    <div className="progress-width-column">
                      <Progress
                        className="progress-bar"
                        value="60"
                      />
                    </div>
                  </div>
                </Col>
                <Col className="flex-rating">
                  <div className="status-bar-rating">
                    <div className="number-progress-bar">4
                    </div>
                    <div className="progress-width-column">
                      <Progress className="progress-bar" />
                    </div>
                  </div>
                </Col>
                <Col className="flex-rating">
                  <div className="status-bar-rating">
                    <div className="number-progress-bar">3
                    </div>
                    <div className="progress-width-column">
                      <Progress className="progress-bar" />
                    </div>
                  </div>
                </Col>
                <Col className="flex-rating">
                  <div className="status-bar-rating">
                    <div className="number-progress-bar">2
                    </div>
                    <div className="progress-width-column">
                      <Progress className="progress-bar" />
                    </div>
                  </div>
                </Col>
                <Col className="flex-rating">
                  <div className="status-bar-rating">
                    <div className="number-progress-bar">1
                    </div>
                    <div className="progress-width-column">
                      <Progress className="progress-bar" />
                    </div>
                  </div>
                </Col>
              </Col>
            </Row>
          </Row>
        </div>
        <div>
          <div className="feature-box">
            <div className="border-outline">
              <h4> Feedback</h4>
              <Row>
                <Col className="feature-heading">Knowledge</Col>
                <Col className="ratingstar">
                  <StarRating />
                </Col>
              </Row>
              <Row>
                <Col className="feature-heading">Explanation</Col>
                <Col className="ratingstar">
                  <StarRating />
                </Col>
              </Row>
              <Row>
                <Col className="feature-heading">Attitude</Col>
                <Col className="ratingstar">
                  <StarRating />
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <Row>
          <CoachModal />
        </Row>
      </Col>
    </Row>
  </Container>
);
export default CoachRating;
