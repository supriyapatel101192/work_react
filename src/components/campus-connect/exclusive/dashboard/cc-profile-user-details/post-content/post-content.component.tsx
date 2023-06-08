import {
  faCamera, faHeart, faPaperclip, faReply,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  Button,
  Col, Container, Input, Row,
} from 'reactstrap';
import './post-content.scss';
import postMockData from './mock.json';

export const PostContent: React.FC = () => {
  const [postData, setPostData] = React.useState('Please type what you want....');
  const handlePostDataChange = (e:any) => {
    setPostData(e.target.value);
  };
  return (
    <Container>
      <Row>
        <Col lg="12">
          <Input
            type="textarea"
            className="post-input"
            value={postData}
            onChange={handlePostDataChange}
          />
        </Col>
      </Row>
      <Row>
        <Col xs="3" lg="1">
          <FontAwesomeIcon icon={faPaperclip} className="ww-usr-post-clip" />
        </Col>
        <Col xs="3" lg="1">
          <FontAwesomeIcon icon={faCamera} className="ww-usr-post-cam" />
        </Col>
        <Col xs="3" lg="1">
          <Button className="ww-post-btn">Post</Button>
        </Col>
      </Row>
      {postMockData.map((post) => (
        <Row className="ww-shared-posts">
          <Col xs="12" lg="12">
            <img src={post.imgUrl} alt="bg-img" className="ww-profile-bg-img" />
          </Col>
          <Col xs="12" lg="12" className="ww-usr-post-title">
            {post.title}
          </Col>
          <Col xs="12" lg="12" className="ww-usr-post-content">
            {post.content}
          </Col>
          <Col xs="12" lg="12">
            <Button className="ww-post-like-btn"> <FontAwesomeIcon icon={faHeart} className="ww-like-icon" />Like</Button>
            <Button className="ww-post-reply-btn"> <FontAwesomeIcon icon={faReply} className="ww-like-icon" />Reply</Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
};
