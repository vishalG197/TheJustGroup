// TestimonialCard.js
import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  // box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  background-color: #FDF7E4;

`;

const Image = styled.div`
  
  width: 100px;
  // border: 1px solid #e5e5e5;
  img{
  
    
    border-radius: 50%;
    margin-bottom: 20px;
  }
  
`;

const Name = styled.h3`
  color: #333333;
  font-size: 24px;
  margin-bottom: 5px;
`;

const Role = styled.p`
font-weight: bold;
  color: #666666;
  // font-size: 18px;
  margin-bottom: 15px;
`;

const TestimonialText = styled.p`
  color: #444444;
  font-style: italic;
    font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
  :before{
    content: '"';
  }
  :after{
    
    content: '"';
  }
`;

const TestimonialCard = ({ testimonial }) => {
    return (
        <CardWrapper>
            <Image>
                <img src={testimonial.image} alt={testimonial.name} />
            </Image>

            <div>
                <Name>{testimonial.name}</Name>
                <Role>{testimonial.role}</Role>
                <TestimonialText>{testimonial.testimonial}</TestimonialText>
            </div>
        </CardWrapper>
    );
};


export default TestimonialCard;
