import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AccordionWrapper = styled.div`
  width: 85%;
`;

const AccordionItem = styled.div`
  margin-bottom: 10px;
`;

const AccordionButton = styled.button`
  width: 100%;
  background-color: #f0f0f0;
  border: none;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  outline: none;
`;

const AccordionContent = styled.div`
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  animation: ${fadeIn} 0.5s ease;
`;

const NestedLink = styled.a`
  display: block;
  padding: 5px 40px;
  text-decoration: none;
  color: #333;
`;

const NestedAccordionContent = styled.div`
  margin-left: 20px;
`;

const CustomAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AccordionWrapper>
      <AccordionItem>
        <AccordionButton onClick={() => toggleAccordion(0)}>
         <a href=""> About {openIndex === 0 ? '-' : '+'}</a>
        </AccordionButton>
        <AccordionContent isOpen={openIndex === 0}>
          <NestedAccordionContent>
            <NestedLink href="#">Nested Link 1</NestedLink>
            <NestedLink href="#">Nested Link 2</NestedLink>
            <NestedLink href="#">Nested Link 3</NestedLink>
          </NestedAccordionContent>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton onClick={() => toggleAccordion(1)}>
          Accordion Item 2 {openIndex === 1 ? '-' : '+'}
        </AccordionButton>
        <AccordionContent isOpen={openIndex === 1}>
          <NestedAccordionContent>
            <NestedLink href="#">Nested Link 1</NestedLink>
            <NestedLink href="#">Nested Link 2</NestedLink>
          </NestedAccordionContent>
        </AccordionContent>
      </AccordionItem>
    </AccordionWrapper>
  );
};

export default CustomAccordion;
