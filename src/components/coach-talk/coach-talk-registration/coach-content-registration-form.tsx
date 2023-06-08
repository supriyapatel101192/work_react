/* eslint-disable linebreak-style */
import React from 'react';
import {
  Button, Col, Container, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import './coach-content-registration-form.scss';

export const CoachContentRegistationForm : React.FC = () => (
  <Container>
    <Row className="form-row-top">
      <Col md="12">
        <h1>Welcome! </h1>
      </Col>

    </Row>

    <Row>
      <Col xs="6" md="6">
        <h4 className="coach-register-heading">Register your Account</h4>
      </Col>
      <Col xs="6" md="6">
        <span className="ct-coach-Registration-image">
          <img alt="coachFormImage" height="200" width="200" className="ct-coach-form-image" src="images/founders/jeet.jpg" />
        </span>
      </Col>
    </Row>

    <Form>

      <Col xs="12" md="12">
        <Label className="ct-label mt-2"> Full Name</Label>
        <Input className="ct-background-color " />
      </Col>

      <Col sm="12" md="12">
        <Label className="ct-label">Designation</Label>
        <Input className="ct-background-color " placeholder="Enter your designation along with the company Name" />
      </Col>

      <Col sm="12" md="12">
        <Label className="ct-label"> Subject</Label>
        <Input className="ct-background-color " />
      </Col>

      <Col sm="6" md="6">
        <Label className="ct-label">Languages Known</Label>
        <Input className="ct-background-color " />
      </Col>

      <Col sm="6" md="6">
        <Label className="ct-label">Experience</Label>
        <Input className="ct-background-color" />
      </Col>

      <Col sm="12" md="12">
        <Label className="ct-label">Address</Label>
        <Input className="ct-background-color" placeholder="Flat No" />
        <Input className="ct-background-color" placeholder="Street/Area/Locality" />
      </Col>

      <Col sm="12" md="12">
        <FormGroup className="ct-label">
          City
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            className="ct-background-color"
          >
            <option>
              Banglore
            </option>
            <option>
              Pune
            </option>
            <option>
              Gurugram
            </option>
            <option>
              Hyderabad
            </option>
            <option>
              Chennai
            </option>
          </Input>
        </FormGroup>
      </Col>
      <Col sm="12" md="12">
        <FormGroup className="ct-label">
          State
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            className="ct-background-color"
          >
            <option>
              Karnataka
            </option>
            <option>
              Andhra Pradesh
            </option>
            <option>
              New Delhi
            </option>
            <option>
              Maharashtra
            </option>
            <option>
              Kerela
            </option>
          </Input>
        </FormGroup>
      </Col>
      <Col sm="12" md="12">
        <Label className="ct-label">Pin Code</Label>
        <Input className="ct-background-color" placeholder="Enter your pincode" />
        <FormGroup>
          <Label for="exampleEmail" className="ct-label">
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Enter your Email"
            type="email"
            className="ct-background-color"
          />
        </FormGroup>
      </Col>
      <Col sm="12" md="12">
        <Label className="ct-label">Phone No</Label>
        <Input className="ct-background-color" />
      </Col>
      <Col sm="12" md="12">
        <FormGroup>
          <Label for="exampleText" className="ct-label">
            Tell us something about you
          </Label>
          <Input
            id="exampleText"
            name="text"
            type="textarea"
            className="ct-background-color"
          />
        </FormGroup>
      </Col>
      <FormGroup>
        <Label for="exampleFile" className="ct-label">
          File
        </Label>
        <Input
          id="exampleFile"
          name="file"
          type="file"
          className="ct-background-color"
        />

      </FormGroup>

      <FormGroup check>
        <Input type="checkbox" />
        {' '}
        <Label check>
          I here by declare that all the information i have given above is true and i am accepting all the terms and conditions of Wenexcorp
        </Label>
      </FormGroup>
      <Button className="ct-form-submit-button">
        Submit
      </Button>

    </Form>
  </Container>
);
export default CoachContentRegistationForm;
