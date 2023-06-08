import React from 'react';
import {
  Button,
  Col, Container, Input, Row,
} from 'reactstrap';
import './account-setting.scss';

export const AccountSetting: React.FC = () => {
  const [postData, setPostData] = React.useState('');
  const handlePostDataChange = (e:any) => {
    setPostData(e.target.value);
  };
  return (
    <Container>
      <Row>
        <Col lg="12" className="ww-acnt-set-title">
          Account Setting
        </Col>
        <Col lg="6" className="ww-abtme-content">
          <Row>
            <Col lg="12">
              Email
            </Col>
            <Col lg="12">
              <Input
                type="text"
                className="ww-acnt-set-input"
                placeholder="Email"
                value={postData}
                onChange={handlePostDataChange}
              />
            </Col>
          </Row>
        </Col>
        <Col lg="6" className="ww-abtme-content">
          <Row>
            <Col lg="12">
              Password
            </Col>
            <Col lg="12">
              <Input
                type="text"
                className="ww-acnt-set-input"
                placeholder="Password"
                value={postData}
                onChange={handlePostDataChange}
              />
            </Col>
          </Row>
        </Col>
        <Col lg="12" className="ww-abtme-content">
          <Row>
            <Col lg="12">
              Address
            </Col>
            <Col lg="12">
              <Input
                type="text"
                className="ww-acnt-set-input"
                placeholder="1234 Main st"
                value={postData}
                onChange={handlePostDataChange}
              />
            </Col>
          </Row>
        </Col>
        <Col lg="12" className="ww-abtme-content">
          <Row>
            <Col lg="12">
              Address 2
            </Col>
            <Col lg="12">
              <Input
                type="text"
                className="ww-acnt-set-input"
                placeholder="Apartment, studio or floor"
                value={postData}
                onChange={handlePostDataChange}
              />
            </Col>
          </Row>
        </Col>
        <Col lg="6" className="ww-abtme-content">
          <Row>
            <Col lg="12">
              City
            </Col>
            <Col lg="12">
              <Input
                type="text"
                className="ww-acnt-set-input"
                placeholder="City"
                value={postData}
                onChange={handlePostDataChange}
              />
            </Col>
          </Row>
        </Col>
        <Col lg="4" className="ww-abtme-content">
          <Row>
            <Col lg="12">
              State
            </Col>
            <Col lg="12">
              <Input
                type="text"
                className="ww-acnt-set-input"
                placeholder="State"
                value={postData}
                onChange={handlePostDataChange}
              />
            </Col>
          </Row>
        </Col>
        <Col lg="2" className="ww-abtme-content">
          <Row>
            <Col lg="12">
              Zip
            </Col>
            <Col lg="12">
              <Input
                type="text"
                className="ww-acnt-set-input"
                placeholder="Zip"
                value={postData}
                onChange={handlePostDataChange}
              />
            </Col>
          </Row>
        </Col>
        <Col lg="12" className="ww-acnt-set-title">
          <Button className="ww-post-btn">Sign In</Button>
        </Col>
      </Row>
    </Container>
  );
};
