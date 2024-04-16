import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavbarDiv>
      <div className="logo">
        <Link to='/'>
          <img src={'https://www.justgroup.com.au/images/logo.png'} alt='Company Logo' />
        </Link>
      </div>
      <div className="links">
        <NavLink to="/about"
          onMouseEnter={() => document.getElementById('about_dropdown').style.display = 'block'}
          onMouseLeave={() => document.getElementById('about_dropdown').style.display = 'none'}
        >About</NavLink>
        <DropDown
          onMouseEnter={() => document.getElementById('about_dropdown').style.display = 'block'}
          onMouseLeave={() => document.getElementById('about_dropdown').style.display = 'none'}
          id='about_dropdown' style={{ display: 'none' }} >
          <ul>
            <li><b>OUR HISTORY</b></li>
            <li><b>OUR PEOPLE</b></li>
            <ul>
              <li>Bord of Directors</li>
              <li>Senior Leaders</li>
            </ul>
            <li><b>OUR INVESTORS</b></li>
            <ul>
              <li>PMV</li>
            </ul>
          </ul>
        </DropDown>

        <NavLink to="/our_brands"
          onMouseEnter={() => document.getElementById('brands_dropdown').style.display = 'block'}
          onMouseLeave={() => document.getElementById('brands_dropdown').style.display = 'none'}
        >Our Brands</NavLink>
        <DropDown id='brands_dropdown' style={{ display: 'none', width: '480px' }}
          onMouseEnter={() => document.getElementById('brands_dropdown').style.display = 'block'}
          onMouseLeave={() => document.getElementById('brands_dropdown').style.display = 'none'}
        >
          <ul>
            <li><b>PETER ALEXANDER</b></li>
            <li><b> JUST JEANS</b></li>
            <li><b>PORTMANS</b></li>
            <li><b>DOTTI</b></li>
            <li><b>JAY JAYS</b></li>
            <li><b>JACQUI E</b></li>
            <li><b>SMIGGLE </b></li>
          </ul>
        </DropDown>
        <NavLink to="/better_practices"
          onMouseEnter={() => document.getElementById('practieces_dropdown').style.display = 'block'}
          onMouseLeave={() => document.getElementById('practieces_dropdown').style.display = 'none'}
        >Better Practices</NavLink>
        <DropDown id='practieces_dropdown' style={{ display: 'none', width: '340px' }}
          onMouseEnter={() => document.getElementById('practieces_dropdown').style.display = 'block'}
          onMouseLeave={() => document.getElementById('practieces_dropdown').style.display = 'none'}
        >
          <ul>
            <li><b>OUR COMMITMENT</b></li>
            <ul>
              <li>People</li>
              <li>Partners</li>
              <li>Planet</li>
              <li>Product</li>
            </ul>
          </ul>
        </DropDown>
        <NavLink to="/careers"
          onMouseEnter={() => document.getElementById('careers_dropdown').style.display = 'block'}
          onMouseLeave={() => document.getElementById('careers_dropdown').style.display = 'none'}
        >Careers</NavLink>
        <DropDown id='careers_dropdown' style={{ display: 'none', width: '290px' }}
          onMouseEnter={() => document.getElementById('careers_dropdown').style.display = 'block'}
          onMouseLeave={() => document.getElementById('careers_dropdown').style.display = 'none'}
        >
          <ul>
            <li><b>RETAIL STORES</b></li>
            <li><b>SUPPORT OFFICE</b></li>
            <li><b>DISTRIBUTION CENTRE</b></li>
            <li><b>JOB SEARCH</b></li>
            <li><b>EXISTING APPLICANTS</b></li>
          </ul>
        </DropDown>
        <NavLink to="/contact"
          onMouseEnter={() => document.getElementById('contacts_dropdown').style.display = 'block'}
          onMouseLeave={() => document.getElementById('contacts_dropdown').style.display = 'none'}
        >Contact</NavLink>
        <DropDown id='contacts_dropdown' style={{ display: 'none', width: '290px' }}
          onMouseEnter={() => document.getElementById('contacts_dropdown').style.display = 'block'}
          onMouseLeave={() => document.getElementById('contacts_dropdown').style.display = 'none'}
        >
          <ul>
            <li><b>CORPORATE GIFT CARDS</b></li>
            <li><b>JUST GROUP ENQUIRIES</b></li>
            <li><b>BRAND ENQUIRIES</b></li>
          </ul>
        </DropDown>
      </div>
      <div className='humburger'>
        {!open?<RxHamburgerMenu onClick={()=>setOpen(!open)}  />:<MdClose onClick={()=>setOpen(!open)}/>}
        
      </div>
    </NavbarDiv>
  )
}

export default Navbar;

const NavbarDiv = styled.div`
 width:100%;
  color: black;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index:10;
  
  .humburger{
    display:none;
    color:#30497a;
    font-size:40px;
    @media (max-width: 600px){
      font-size:30px;
    }
    @media (max-width: 400px){
      font-size:20px;
    }
    @media (max-width: 300px){
      font-size:15px;
    }
    @media (max-width: 960px){
      display:block;
    }
    
  }
 

  .logo{
    height:100%;
    width:40%;
  }
.logo img {
    height: 100%;
    width:100%;
  }

 
.links {
    display: flex;
    gap: 40px;
    align-items: center;
    
  @media (max-width: 960px) {
    font-size: 0.9rem;
    display:none;
   
  }
  
  }
`;

const NavLink = styled(Link)`
 
  color: #30497a;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s ease;
  padding:20px 0;
  
  
  @media (max-width: 1180px) {
   padding:50px 0;
   
  
  }

  
  &:hover {
    border-bottom-color: #30497a;   
  }
`;
const DropDown = styled.div`
 

  position: absolute;
  top: 100px;
  right: 10px;
  padding:10px;
  width: 570px;



  background-color: white;
  transition: border-bottom 0.3s ease;
  z-index:20;

  ul {
    list-style: none;
    margin:3px;
    padding: 5px;
  }

  li {
    padding: 5px;
    color: #30497a;
  }
 
  
`;