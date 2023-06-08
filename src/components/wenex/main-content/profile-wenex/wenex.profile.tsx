import ReactPlayer from 'react-player';
import {
  Col, Container, Row,
} from 'reactstrap';
import './profile.scss';

export const WenexKnowWenex: React.FC = () => (
  <Container className="pt-5 text-white profile-bg">
    <div className="align-profile-center">
      <h2 className="text-profile-header pt-5">
        ONE stop solution for all
      </h2>
    </div>
    <Row className="align-profile-center pt-5 mx-1">
      <Col lg="6" md="6">
        <ReactPlayer
          url="https://wenex-public-media.s3.ap-southeast-1.amazonaws.com/videos/wenex-video.mp4"
          style={{ boxShadow: '0 10px 20px 0px rgba(10, 0, 10, 0.6)', background: 'white', opacity: '.92' }}
          controls
          width="90%"
          height="320px"
        />
      </Col>
      <Col lg="5" md="5" className="mx-4">
        <h1 className="text-profile-connect mx-0 text-wrap">Connect</h1>
        <h4 className="text-profile-grey mx-0 text-wrap">
          Finds the best talent with Human-Machine collaboration for lateral as well as Campus hires.
        </h4>
      </Col>
    </Row>
  </Container>
);

export default WenexKnowWenex;
