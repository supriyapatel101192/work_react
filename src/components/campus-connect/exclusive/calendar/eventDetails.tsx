import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './calendar.scss';

export const EventDetails: React.FC = () => (
  <Container className="fc-day-today">
    <Row className="pt-2">
      <Col>
        Hello this is my Title
      </Col>
    </Row>
  </Container>
);
export default EventDetails;
