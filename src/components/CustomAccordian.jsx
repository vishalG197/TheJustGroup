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
  width: 95%;
`;

const AccordionItem = styled.div`
//   margin-bottom: 1px;
border: 1px solid #ffff;

  
`;

const AccordionButton = styled.button`

  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #f0f0f0;
  border: none;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  outline: none;
  div{
    font-size: 20px;
    color: #30497a;
    
  }
  div a{
    text-decoration: none;
    color: #30497a;
  }
`;


const AccordionContent = styled.div`
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  animation: ${fadeIn} 0.5s ease;
  
`;

const NestedLink = styled.a`
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #30497a;
  background-color:#ffff;
  border: 1px solid #f0f0f0;
`;

const NestedAccordionContent = styled.div`
//   margin-left: 20px;

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

                    <div ><a href=""> About </a></div> <div>{openIndex === 0 ? '-' : '+'}</div>
                </AccordionButton>
                <AccordionContent isOpen={openIndex === 0}>
                    <NestedAccordionContent>
                        <NestedLink href="#">Our History</NestedLink>
                        <NestedLink href="#">Our People</NestedLink>
                        <NestedLink href="#">Our Investor</NestedLink>

                    </NestedAccordionContent>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem>
                <AccordionButton onClick={() => toggleAccordion(1)}>
                    <div><a href="">Our Brands</a></div> <div>{openIndex === 1 ? '-' : '+'}</div>
                </AccordionButton>
                <AccordionContent isOpen={openIndex === 1}>
                    <NestedAccordionContent>
                        <NestedLink href="#">Just Jeans</NestedLink>
                        <NestedLink href="#">Portmans</NestedLink>
                        <NestedLink href="#">Dotti</NestedLink>
                        <NestedLink href="#">Jay Jays</NestedLink>
                        <NestedLink href="#">Jacqui E</NestedLink>
                    </NestedAccordionContent>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem>
                <AccordionButton onClick={() => toggleAccordion(2)}>
                    <div><a href="">Better Practices</a></div> <div>{openIndex === 2 ? '-' : '+'}</div>
                </AccordionButton>
                <AccordionContent isOpen={openIndex === 2}>
                    <NestedAccordionContent>
                        <NestedLink href="#">Our Commitment</NestedLink>

                    </NestedAccordionContent>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem>
                <AccordionButton onClick={() => toggleAccordion(3)}>
                    <div><a href="">Careers</a></div> <div>{openIndex === 3 ? '-' : '+'}</div>
                </AccordionButton>
                <AccordionContent isOpen={openIndex === 3}>
                    <NestedAccordionContent>
                        <NestedLink href="#">Retail Stores</NestedLink>
                        <NestedLink href="#">Support Office</NestedLink>
                        <NestedLink href="#">Distribution Centre</NestedLink>
                        <NestedLink href="#">Job Search</NestedLink>
                        <NestedLink href="#">Existing Applicants</NestedLink>

                    </NestedAccordionContent>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem>
            <AccordionButton onClick={() => toggleAccordion(4)}>
                <div><a href="">Contact</a></div> <div>{openIndex === 4 ? '-' : '+'}</div>
            </AccordionButton>
            <AccordionContent isOpen={openIndex === 4}>
                <NestedAccordionContent>
                    <NestedLink href="#">Corporate Gift Cards</NestedLink>
                    <NestedLink href="#">Just Group Enquiries</NestedLink>
                    <NestedLink href="#">Brand Enquiries</NestedLink>
                </NestedAccordionContent>
            </AccordionContent>
        </AccordionItem>
        </AccordionWrapper >
    );
};

export default CustomAccordion;
