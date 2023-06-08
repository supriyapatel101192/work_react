/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Input, FormGroup, Label,
} from 'reactstrap';
import StarRating from '../../job-board/star-rating/star-rating.component';
import './coach-modal.scss';

export const CoachModal = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle} className="ct-review-button">
        Write a review
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>

          <div>
            <Row>
              <Col xs="9" md="9" xl="9" className="ct-coach-image">
                <img alt="coachImage" height="75" width="100" className="ct-coach-modal-image" src="images/founders/jeet.jpg" />
                <Col xs="9" md="3" xl="3" mr="2" className="ct-modal-name">
                  <h6>Jeet Jha</h6>
                </Col>
              </Col>
            </Row>
          </div>

          <Row>
            <Col xs="12" md="12" xl="12" className="ct-modal-star-margin"><StarRating /></Col>
          </Row>
        </ModalHeader>
        <ModalBody>
          <span>Review Title </span>
          <div>
            <Input className="ct-title-input" placeholder="Enter a maximum of 50 characters" />
          </div>
          <span>Comment</span>
          <div>
            <Input type="textarea" className="ct-modal-comment ct-title-input" placeholder="Enter a maximum of 3000 characters" />
          </div>
          <span>Will you recommend this coach</span>
          <FormGroup switch>
            <Label check>Yes</Label>
            <Input type="switch" className="ct-check-input" role="switch" />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" className="ct-publish-button" onClick={toggle}>
            <span className="ct-btn-text">Publish </span>
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CoachModal;
