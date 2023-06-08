import React from 'react';
import {
  Card,
  CardBody,
  CardImg,
  Col, Container, Row,
} from 'reactstrap';
import { useNavigate } from 'react-router';
import WXNavbar from '../navbar/wenex.navbar';
import './register.scss';

export const WenexRegisterPath: React.FC = () => {
  const history = useNavigate();
  const handleFreshers = () => {
    history('/register/campus-connect');
    window.scrollTo(0, 0);
  };
  const handleExperinced = () => {
    history('/register/we-wire');
    window.scrollTo(0, 0);
  };
  return (
    <React.Fragment>
      <WXNavbar />
      <Container>
        <Row>
          <Col lg={{ size: 6, order: 2 }} md={{ size: 6, order: 1 }} xs={{ order: 1 }} className="wx-register-head-col-bg-form wx-register-container">
            <div className="pt-5">
              <a href="/home" className="nav-logo-cc">
                <img style={{ width: '150px' }} src="/images/wewire/we-wire-logo-dark.png" alt="campusconnectLogo" />
              </a>
              <div className="wx-register-align-center pt-3">
                <Card className="register-card-container wx-register-align-center wx-register-card-pointer" onClick={handleExperinced}>
                  <h5 className="pt-3">I am Experienced</h5>
                  <CardImg
                    className="register-card-container-img pt-2"
                    src="/images/register/experinced.png"
                  />
                  <CardBody>
                    <div className="pt-2">
                      <h6 className="wx-register-text-lite-grey">Get your desired jobs</h6>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div className="pt-3 my-3 mx-5">
                <h6 className="wx-register-text-lite-grey">We at WeWire ensures that you get the best matched job and that too hasle free.
                </h6>
              </div>
            </div>
          </Col>
          <Col lg={{ size: 6, order: 1 }} md={{ size: 6, order: 2 }} xs={{ order: 2 }} className="wx-register-head-col-bg-img wx-register-container">
            <div className="pt-5">
              <a href="/campus-connect" className="nav-logo-cc">
                <img style={{ width: '200px' }} src="/images/campusconnect/cc-logo-dark.png" alt="campusconnectLogo" />
              </a>
              <div className="wx-register-align-center pt-3">
                <Card className="register-card-container wx-register-align-center wx-register-card-pointer" onClick={handleFreshers}>
                  <h5 className="pt-3">I am Fresher</h5>
                  <CardImg
                    className="register-card-container-img pt-2"
                    src="/images/register/freshers.png"
                  />
                  <CardBody>
                    <div className="pt-2">
                      <h6 className="wx-register-text-lite-grey">An endeavour to get Jobs</h6>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div className="pt-3 my-3 mx-5">
                <h6 className="wx-register-text-lite-grey">With CampusConnect we tend to bring the platform
                  for the college students helping them out to get introduced to corporate world.
                </h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default WenexRegisterPath;
