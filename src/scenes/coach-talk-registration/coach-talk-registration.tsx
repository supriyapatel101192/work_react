/* eslint-disable linebreak-style */
import React from 'react';
import { Container } from 'reactstrap';
import CoachContentRegistrationForm from '../../components/coach-talk/coach-talk-registration/coach-content-registration-form';
import WXNavbar from '../../components/wenex/navbar/wenex.navbar';
import './coach-talk-registration.scss';

export const CoachRegistrationForm: React.FC = () => (
  <React.Fragment>
    <WXNavbar />
    <Container className="coach-form-container">
      <CoachContentRegistrationForm />
    </Container>
  </React.Fragment>
);
export default CoachRegistrationForm;
