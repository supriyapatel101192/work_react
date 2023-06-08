import React from 'react';
import {
  Row,
} from 'reactstrap';
import Iframe from 'react-iframe';
import './video.scss';

export const VideoDetails: React.FC = () => (
  <div className="video-container">
    <Row>
      {/* <iframe src="http://localhost:3001/?name=jeet&meetingId=abc-def&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI1Zjk5ODkzNS00ZmNhLTQ4ZGUtOTJlNy03MzAyMGI1NmQxOGIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2NzQxMzM0NiwiZXhwIjoxNjY4MDE4MTQ2fQ.tDQBM3oicr9tNdTJbvI-RZwa6RJDVtMaXCKVyCdfgVs" height="600px" title="test1" /> */}
      <Iframe
        url="http://localhost:3001/?name=jeet&meetingId=abc-def&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI1Zjk5ODkzNS00ZmNhLTQ4ZGUtOTJlNy03MzAyMGI1NmQxOGIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2NzQxMzM0NiwiZXhwIjoxNjY4MDE4MTQ2fQ.tDQBM3oicr9tNdTJbvI-RZwa6RJDVtMaXCKVyCdfgVs"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"
      />
    </Row>
  </div>
);
