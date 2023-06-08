import React, { MutableRefObject, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';
import WnxNavBar from '../../components/wenex/navbar/wenex.navbar';
import KnowWnx from '../../components/wenex/main-content/know-wenex/wenex.knowwenex';
import ProfileWnx from '../../components/wenex/main-content/profile-wenex/wenex.profile';
import AboutWnx from '../../components/wenex/main-content/about-wenex/wenex.about';
import WhyWnx from '../../components/wenex/main-content/why-wenex/wenex.whywenex';
import ProductWnx from '../../components/wenex/main-content/product-wenex/wenex.products';
import TeamsWnx from '../../components/wenex/main-content/teams-wenex/wenex.teams';
import WnxFooter from './wenex.footer';
import WenexContactus from '../../components/wenex/contact-us/wenex.contactus';
// import WenexTestimonials from '../../components/wenex/main-content/testimonials-wenex/wenex.testimonial';

export const WenexComponent: React.FC = () => {
  const location = useLocation();
  const aboutDiv = useRef() as MutableRefObject<HTMLDivElement>;
  const connectDiv = useRef() as MutableRefObject<HTMLDivElement>;
  React.useEffect(() => {
    document.body.classList.toggle('index-page');
    document.body.style.backgroundColor = '#FFFFFF';
    return function cleanup() {
      document.body.classList.toggle('index-page');
      document.body.style.backgroundColor = '#FFFFFF'; // #150a45
    };
  }, []);
  React.useLayoutEffect(() => {
    if (location.hash === '#about') {
      aboutDiv.current.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#connect') {
      connectDiv.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <Container className="wnx-container">
      <WnxNavBar />
      <KnowWnx />
      <ProfileWnx />
      <AboutWnx />
      <WhyWnx />
      <ProductWnx />
      <div ref={connectDiv}>
        <WenexContactus />
      </div>
      <TeamsWnx />
      {/* <WenexTestimonials /> */}
      <div className="footer">
        <WnxFooter />
      </div>
    </Container>
  );
};

export default WenexComponent;

// eslint-disable-next-line no-lone-blocks
{ /* <React.Fragment>
      <Container className="wnx-container">
        <WnxNavBar />
        <KnowWnx />
        <ProfileWnx />
        <AboutWnx />
        <div className="pt-5">
          <WhyWnx />
        </div>
        <div className="pt-5">
          <ProductWnx />
        </div>
        <div ref={connectDiv} className="pt-5">
          <WenexContactus />
        </div>
        <div className="padding-end pt-5">
          <TeamsWnx />
        </div>
      </Container>
      <div className="footer">
        <WnxFooter />
      </div>
    </React.Fragment> */ }
