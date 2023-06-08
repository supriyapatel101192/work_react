/* eslint-disable linebreak-style */
import React from 'react';
import {
  Button,
  Col, Container, Form, Input, Row,
} from 'reactstrap';

export const CCResumeContact:React.FC = () => (
  <Container>
    <Row>
      <Col lg="11" md="11" sm="12">
        <Form className="mx-3">
          <Row>
            <Col lg="12">
              <div className="pt-4">
                <h6 className="cc-label-objective">Objective</h6>
                <Input
                  placeholder="Enter Your Objective Here"
                  type="textarea"
                  required
                  className="cc-obj-input-group"
                />
              </div>
            </Col>
            <Col>
              <div>
                <Button className="cc-obj-save-button">SAVE CONTACT FORM</Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  </Container>
);
export default CCResumeContact;
