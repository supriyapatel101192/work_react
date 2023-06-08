import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Modal,
} from 'reactstrap';
import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretRight, faClose, faEnvelope, faPhone, faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';
import { clearContactUsPostReq, contactUsPostReq } from '../../../store/wenex/actions';
import { APIHeaderWX } from '../../../utils/constants';
import { ContactUsInput } from '../../../services/contact-us/contact-us.types';

export const WenexContactus: React.FC = () => {
  const dispatch = useDispatch();
  const contactUsResponse = useSelector((state: RootState) => state.wenex.contactUs);
  const [showAlert, setShowAlert] = useState(false);
  const [contactUsData, setContactUsData] = useState<ContactUsInput>({
    userType: 'UNK',
    descAbout: 'WX',
    description: '',
    dialCode: 1,
    email: '',
    name: '',
    phone: '',
  });

  React.useEffect(() => {
    if (contactUsResponse.message) {
      dispatch(clearContactUsPostReq());
      setShowAlert(true);
      setContactUsData({
        userType: 'UNK',
        descAbout: 'WX',
        description: '',
        dialCode: 1,
        email: '',
        name: '',
        phone: '',
      });
    }
  }, [contactUsResponse.message]);

  const handleNameChange = (e: any) => {
    setContactUsData({ ...contactUsData, name: e.target.value });
  };
  const handlePhoneChange = (e: any) => {
    setContactUsData({ ...contactUsData, phone: e.target.value });
  };
  const handleEmailChange = (e: any) => {
    setContactUsData({ ...contactUsData, email: e.target.value });
  };
  const handleMessageChange = (e: any) => {
    setContactUsData({ ...contactUsData, description: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(contactUsPostReq({
      inputBody: contactUsData,
      requestType: APIHeaderWX.REQ_ADD_CONTACT_WNX,
    }));
  };
  return (
    <Container className="text-white contact-bg pt-1">
      <div className="align-profile-center">
        <h2 className="text-profile-header pt-5">
          Contact Us
        </h2>
      </div>
      <div className="wnx-contact-outer">
        <div className="wnx-contact-inner">
          <img
            alt="..."
            height="auto"
            width="100%"
            src="/images/common/contact.gif"
          />
        </div>
      </div>
      <Row className="pt-5 m-1">
        <Col lg="5">
          <h3 className="display-4 text-contact-header pt-2 mx-3">
            Support throughout{' '}
            <span className="text-contact-header">journey</span>
          </h3>
          <h4 className="contact-text-grey mx-3 pt-4">
            AI driven support system helps you to get your
            queries resolved in much efficient and quicker way.
          </h4>
        </Col>
        <Col lg="2" className="align-center-wnx pt-5">
          <img
            alt="..."
            style={{ opacity: 0.8 }}
            className="wnx-contact-us-img"
            src="images/common/email.gif"
          />
        </Col>
        <Col className="mb-lg-auto" lg="5">
          <div className="wnx-contact-card">
            <Form>
              <InputGroup>
                <InputGroupText className="wx-input-contact">
                  <FontAwesomeIcon icon={faUserAlt} />
                </InputGroupText>
                <Input
                  placeholder="Full Name"
                  type="text"
                  className="wx-input-contact"
                  value={contactUsData.name}
                  onChange={handleNameChange}
                />
              </InputGroup>
              <InputGroup className="pt-3">
                <InputGroupText className="wx-input-contact">
                  <FontAwesomeIcon icon={faEnvelope} />
                </InputGroupText>
                <Input
                  placeholder="Email"
                  className="wx-input-contact"
                  type="text"
                  value={contactUsData.email}
                  onChange={handleEmailChange}
                />
              </InputGroup>
              <InputGroup className="pt-3">
                <InputGroupText className="wx-input-contact">
                  <FontAwesomeIcon icon={faPhone} />
                </InputGroupText>
                <Input
                  placeholder="Phone (10 Digit Number)"
                  type="number"
                  className="wx-input-contact"
                  value={contactUsData.phone}
                  onChange={handlePhoneChange}
                />
              </InputGroup>
              <InputGroup className="pt-3">
                <Input
                  placeholder="Message"
                  cols="80"
                  className="wx-input-contact"
                  type="textarea"
                  rows="4"
                  value={contactUsData.description}
                  onChange={handleMessageChange}
                />
              </InputGroup>
            </Form>
            <div className="wnx-contact-center my-2 pt-4">
              <Button className="btn-contact-filled" onClick={handleSubmit}>Submit <FontAwesomeIcon icon={faCaretRight} /></Button>
            </div>
          </div>
        </Col>
      </Row>
      <Modal
        modalClassName="wnx-modal-mini wnx-modal-primary"
        isOpen={showAlert}
        toggle={() => setShowAlert(false)}
      >
        <div className="wnx-modal-header justify-content-end">
          <Button
            className="btn-neutral"
            onClick={() => setShowAlert(false)}
          >
            <i className="fab"><FontAwesomeIcon icon={faClose} /></i>
          </Button>
        </div>
        <div className="wnx-modal-body">
          <p>Your request has been recieved.<br />Someone from WenexCorp will reach you shortly.</p>
        </div>
      </Modal>
    </Container>
  );
};
export default WenexContactus;
