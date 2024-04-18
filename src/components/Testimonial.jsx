// TestimonialSlider.js
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import testimonialsData from "./testimonialsData";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SliderWrapper = styled.div`
  width: 100%;
  // margin: auto;
 background-color: #FDF7E4;
 padding-top:20px;
 h1{
  text-align: center;
  color: #30497a;
  
  paddin-top:20px;

}
`;

const TestimonialSlider = () => {
  return (
    <SliderWrapper>
      <h1>What Our Customers Say</h1>
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
