import React from 'react';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollToTopArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };

  return (
    <ArrowButton onClick={scrollToTop}>
      <ArrowIcon />
    </ArrowButton>
  );
}

export default ScrollToTopArrow;

const ArrowButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ArrowIcon = styled(IoIosArrowUp)`
  color: #30497a; /* Change the color here */
  font-size: 20px;
`;
