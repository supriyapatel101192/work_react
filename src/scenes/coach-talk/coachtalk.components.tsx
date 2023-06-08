/* eslint-disable linebreak-style */
import React from 'react';
import {

  Container,

} from 'reactstrap';
import { CoachContent } from '../../components/coach-talk/content/content.coachcomponent';
import WnxNavBar from '../../components/wenex/navbar/wenex.navbar';
import { WNXCTFooter } from './coach.footer';
import './coachtalk.scss';

export const CoachTalkComponent: React.FC = () => (
  <React.Fragment>
    <WnxNavBar />
    <Container className="coach-container">
      <CoachContent />
    </Container>
    <div className="ct-footer">
      <WNXCTFooter />
    </div>
  </React.Fragment>
);
export default CoachTalkComponent;
