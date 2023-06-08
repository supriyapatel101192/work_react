import React from 'react';
import './eazehire.scss';
import { Container } from 'reactstrap';
import EHNavbar from '../../../components/eaze-hire/navbar/eazehire.navbar';
import EHKnowEH from '../../../components/eaze-hire/main-content/know-eaze-hire/eazehire.knoweazehire';
import EHWhyEH from '../../../components/eaze-hire/main-content/why-eaze-hire/eazehire.whyeazehire';
import EHScope from '../../../components/eaze-hire/main-content/scope-eaze-hire/eazehire.scopes';
import WXFooter from '../wenex.footer';

export const EHPublicComponent: React.FC = () => {
  React.useEffect(() => {
    document.body.classList.toggle('index-page');
    return function cleanup() {
      document.body.classList.toggle('index-page');
    };
  }, []);
  return (
    <Container className="eh-container">
      <EHNavbar />
      <EHKnowEH />
      <EHWhyEH />
      <EHScope />
      <div className="eh-footer">
        <WXFooter />
      </div>
    </Container>
  );
};

export default EHPublicComponent;
