import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import {
  Button, CardImg, Col, Container, Row,
} from 'reactstrap';
import './know-wenex.scss';

export const WenexProfile: React.FC = () => {
  const history = useNavigate();
  return (
    <Container className="know-wenex-bg">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <Row className="row-grid justify-content-between align-items-center text-left pt-5">
        <Col lg="6" md="6">
          <h4 className="display-5 text-lite-header-know-wnx">
            Transform the way hiring{' '} <br />
            <span className="text-lite-header-know-wnx">happens</span>
          </h4>
          <h4 className="text-white text-wrap pt-5">
            WeNexCorp is a next gen technology company aiming to transform the way hiring happens in India by eliminating the time lags and adding science to the art of recruitment.
          </h4>
          <div className="wx-email-register my-5">
            <Button onClick={() => { history('/register'); window.scrollTo(0, 0); }} className="wx-btn-filled">Get Started <FontAwesomeIcon icon={faCaretRight} /></Button>
          </div>
        </Col>
        <Col lg="6" md="6">
          <CardImg
            alt="..."
            style={{ opacity: '.60' }}
            src="images/common/navWenex.png"
            top
          />
        </Col>
      </Row>
    </Container>
  );
};

export default WenexProfile;
