// TestimonialSlider.js
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import testimonialsData from "./testimonialsData";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SliderWrapper = styled.div`
  width: 100%;
  margin: auto;
 background-color: #FDF7E4;
`;

const TestimonialSlider = () => {
  return (
    <SliderWrapper>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </Carousel>
    </SliderWrapper>
  );
};

export default TestimonialSlider;
