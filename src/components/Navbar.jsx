import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {


  return (
    <NavbarDiv>
      <div className="logo">
        <Link to='/'>
          <img src={'https://www.justgroup.com.au/images/logo.png'} alt='Company Logo'/>
        </Link>
      </div>
      <div className="links">
        <NavLink to="/about">About</NavLink>
        <DropDown>
          <list>
            <li>Our Brands</li>
            <li>Better Practices</li>
            <li>Careers</li>
            <li>Contact</li>
          </list>
        </DropDown>
       
        <NavLink to="/our_brands">Our Brands</NavLink>
        <NavLink to="/better_practices">Better Practices</NavLink>
        <NavLink to="/careers">Careers</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </NavbarDiv>
  )
}

export default Navbar;

const NavbarDiv = styled.div`
  color: black;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: gray;
  .logo img {
    height: 140px;
  }

  .links {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`;

const NavLink = styled(Link)`
 
  color: #30497a;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s ease;
  padding:10px 0;
  &:hover {
    border-bottom-color: #30497a;
    .DropDown{
      display:block;
    };
  }
`; 
const DropDown = styled.div`
 display:none;
 position:absolute;
 top:110px;
 right:10px;
 height:200px;
 width:550px;
 background-color:teal;
`





