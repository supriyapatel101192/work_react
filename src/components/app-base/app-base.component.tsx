import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { JobBoardComponent } from '../../scenes/job-board/job-board.component';
import { WeWireComponent } from '../../scenes/we-wire/we-wire.component';
import WenexComponent from '../../scenes/wenex/wenex.component';
import JobDescriptionPage from '../job-board/job-description-page/job-description-page.component';
import EHPublicComponent from '../../scenes/eaze-hire/public/eazehire.component';
import { WewireLogin } from '../we-wire/login/wenex.login';
import { EHLogin } from '../eaze-hire/exclusive/login/eazehire.login';
import WenexComingSoon from '../../scenes/wenex/wenex.coming-soon';
import EHContactus from '../eaze-hire/contact-us/eazehire.contactus';
import WenexRegisterPath from '../wenex/register-path/register';
import WeWireRegister from '../we-wire/we-wire-register/we-wire-register';
import CampusConnectRegister from '../campus-connect/register/campus-connect-register';
import CCComponent from '../../scenes/campus-connect/public/campusconnect.component';
import { EHPrivateComponent } from '../../scenes/eaze-hire/private/eazehire.component';
import { CCPrivateComponent } from '../../scenes/campus-connect/private/campusconnect.component';
import CoachTalkComponent from '../../scenes/coach-talk/coachtalk.components';
import { CoachDescriptionPage } from '../coach-talk/coachtalk-description/coach-talk-description-page.component';
import { CoachRating } from '../coach-talk/coach-rating/coachrating';
import CoachRegistrationForm from '../../scenes/coach-talk-registration/coach-talk-registration';

const AppBase: React.FC = (): ReactElement => (
  <div>
    {/* update routing as per pages */}
    <Routes>
      <Route path="/" element={<WenexComponent />} />
      <Route path="/home" element={<WenexComponent />} />
      <Route path="/coming-soon" element={<WenexComingSoon />} />
      <Route path="/login" element={<WewireLogin />} />
      <Route path="/register" element={<WenexRegisterPath />} />
      <Route path="/register/we-wire" element={<WeWireRegister />} />
      <Route path="/campus-connect" element={<CCComponent />} />
      <Route path="/campus-connect/exclusive/*" element={<CCPrivateComponent />} />
      <Route path="/register/campus-connect" element={<CampusConnectRegister />} />
      <Route path="/job-board" element={<JobBoardComponent />} />
      <Route path="/job-board/:jobId" element={<JobDescriptionPage />} />
      <Route path="/we-wire/*" element={<WeWireComponent />} />
      <Route path="/eaze-hire" element={<EHPublicComponent />} />
      <Route path="/eaze-hire/request-demo" element={<EHContactus />} />
      <Route path="/eaze-hire/login" element={<EHLogin />} />
      <Route path="/eaze-hire/exclusive/*" element={<EHPrivateComponent />} />
      <Route path="/we-train" element={<>weTrain</>} />
      <Route path="/coach-talk" element={<CoachTalkComponent />} />
      <Route path="/coach-description" element={<CoachDescriptionPage />} />
      <Route path="/coach-rating" element={<CoachRating />} />
      <Route path="/coach-registration" element={<CoachRegistrationForm />} />
    </Routes>
  </div>
);

export default AppBase;
