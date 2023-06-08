import {
  Container, Row,
} from 'reactstrap';
import React from 'react';
import WenexNavBar from '../../components/wenex/navbar/wenex.navbar';
import WnxFooter from './wenex.footer';

export const WenexComingSoon: React.FC = () => (
  <React.Fragment>
    <Container className="pt-5 login-container-wnx">
      <WenexNavBar />
      <Row className="align-center-login-wnx pt-3">
        <img
          alt="..."
          style={{ height: 'auto', width: '400px' }}
          src="/images/common/coming-soon.png"
        />
      </Row>
    </Container>
    <div className="footer pt-5">
      <WnxFooter />
    </div>
  </React.Fragment>
);

export default WenexComingSoon;
