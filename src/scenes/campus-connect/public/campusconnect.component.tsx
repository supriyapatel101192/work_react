import React from 'react';
import './campusconnect.scss';
import { Container } from 'reactstrap';
import EHNavbar from '../../../components/campus-connect/navbar/campus-connect.navbar';
import CCKnowCC from '../../../components/campus-connect/main-content/know-campus-connect/cc.knowcc';
import CCWhyCC from '../../../components/campus-connect/main-content/why-campus-connect/cc.whycc';
import CCScope from '../../../components/campus-connect/main-content/scope-campus-connect/cc.scopes';
import WXFooter from '../wenex.footer';

export const CCComponent: React.FC = () => {
  React.useEffect(() => {
    document.body.classList.toggle('index-page');
    return function cleanup() {
      document.body.classList.toggle('index-page');
    };
  }, []);
  return (
    <Container className="cc-container">
      <EHNavbar />
      <CCKnowCC />
      <CCWhyCC />
      <CCScope />
      <div className="cc-footer">
        <WXFooter />
      </div>
    </Container>
  );
};

export default CCComponent;
