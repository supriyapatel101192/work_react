import React, { useState } from 'react';
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Col, Container, Row,
} from 'reactstrap';
import './testimonials.scss';

export const WenexTestimonials: React.FC = () => {
  const items = [
    {
      id: 1,
      altText: 'You can use the fullscreen prop to make the modal fullscreen. Specifying a breakpoint will only set the modal as fullscreen below the breakpoint size',
      caption: 'Slide 1',
    },
    {
      id: 2,
      altText: 'Slide 2 fullscreen prop to make the modal fullscreen. Specifying a breakpoint will only set the modal as fullscreen below the breakpoint size',
      caption: 'Slide 2',
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: React.SetStateAction<number>) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map((item) => (
    <CarouselItem
      // className="custom-tag"
      tag="div"
      key={item.id}
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
    >
      <div className="center-testimonial-card">
        <div className="center-testimonial-caption">
          {item.altText}
        </div>
        <div className="center-testimonial-caption">
          {item.caption}
        </div>
      </div>
    </CarouselItem>
  ));
  return (
    <Container className="text-white testimonials-bg pt-1">
      <div className="align-testimonials-center">
        <h2 className="text-testimonials-header pt-5">
          What People talk about Us
        </h2>
      </div>
      <Row>
        <Col lg="5" md="5" className="pt-5">
          Get the testimonial data here
        </Col>
        <Col lg="7" md="7" className="pt-5">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default WenexTestimonials;
