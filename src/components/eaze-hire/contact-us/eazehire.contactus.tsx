import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  Container,
  Row,
  Col,
  Modal,
} from 'reactstrap';
import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretRight, faClose,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';
import { clearContactUsPostReq, contactUsPostReq } from '../../../store/wenex/actions';
import { APIHeaderWX } from '../../../utils/constants';
import { ContactUsInput } from '../../../services/contact-us/contact-us.types';
import WNXEHFooter from '../../../scenes/eaze-hire/wenex.footer';
import EHNavbar from '../navbar/eazehire.navbar';

export const EHContactus: React.FC = () => {
  const dispatch = useDispatch();
  const contactUsResponse = useSelector((state: RootState) => state.wenex.contactUs);
  const [showAlert, setShowAlert] = useState(false);
  const [contactUsData, setContactUsData] = useState<ContactUsInput>({
    userType: 'UNK',
    descAbout: 'EH',
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
        descAbout: 'EH',
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
    <React.Fragment>
      <EHNavbar />
      <Container className="contact-container-eh pt-5">
        <div className="px-md-1 text-left my-lg mx-2">
          <h1 className="text-lite-header display-5">
            Request a Demo
          </h1>
        </div>
        <div className="eh-contact-outer mx-5">
          <div className="eh-contact-inner">
            <img
              alt="..."
              height="auto"
              width="100%"
              src="/images/common/contact.gif"
            />
          </div>
        </div>
        <Row className="pt-3 m-1 mx-4">
          <Col lg="4">
            <h3 className="display-4 pt-2">
              Support throughout{' '}
              <span className="">journey</span>
            </h3>
            <h4 className=" mb-3">
              Experience the best user experience
            </h4>
          </Col>
          <Col lg="2" className="align-center-wnx pt-5">
            <img
              alt="..."
              style={{ opacity: 0.4 }}
              className="wnx-contact-us-img"
              src="/images/common/email.gif"
            />
          </Col>
          <Col className="mb-lg-auto" lg="6">
            <div className="eh-contact-card">
              <Form className="pt-1">
                <Input
                  placeholder="Full Name"
                  type="text"
                  className="eh-input-contact"
                  value={contactUsData.name}
                  onChange={handleNameChange}
                />
                <Input
                  placeholder="Email"
                  className="eh-input-contact"
                  type="text"
                  value={contactUsData.email}
                  onChange={handleEmailChange}
                />
                <Input
                  placeholder="Phone (10 Digit Number)"
                  type="number"
                  className="eh-input-contact"
                  value={contactUsData.phone}
                  onChange={handlePhoneChange}
                />
                <Input
                  placeholder="Message"
                  cols="80"
                  className="eh-input-contact"
                  type="textarea"
                  rows="4"
                  value={contactUsData.description}
                  onChange={handleMessageChange}
                />
              </Form>
              <div className="pt-2">
                <Button className="eh-contact-btn-filled" onClick={handleSubmit}>Submit <FontAwesomeIcon icon={faCaretRight} /></Button>
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
            <p>Your request has been recieved.<br />Someone from EazeHire will reach you shortly.</p>
          </div>
        </Modal>
      </Container>
      <div className="eh-footer">
        <WNXEHFooter />
      </div>
    </React.Fragment>
  );
};
export default EHContactus;
