import React from 'react';
import styled from 'styled-components';

const BrandCards = () => { 
  return (
    <Container>
      <h1>Our Brands</h1>
      <div className='brands'>
        <div>
          <img src="https://justjeans.jgl.com.au/JJ/aurora/images/espot/static/about/24AW/JJ24AW_AboutUs02.jpg" alt="Image 1" />
          <p>Just Jeans</p>
          <Button><a href="">Shop Now</a></Button>
        </div>
        <div>
          <img src="https://portmans.jgl.com.au/RJ/aurora/images/espot/static/about/PO23AW_AboutUs@2x_2.jpg" alt="Image 2" />
          <p>Portmans</p>
          <Button><a href="">Shop Now</a></Button>
        </div>
        <div>
          <img src="https://dotti.jgl.com.au/DT/aurora/images/popup/DT_DESKTP_PopUp_SignUp_1.jpg" alt="Image 3" />
          <p>Dotti</p>
          <Button><a href="">Shop Now</a></Button>
        </div>
        <div>
          <img src="https://jayjays.jgl.com.au/MJ/aurora/images/products/large/930386_navystripe_back_l.jpg?i10c=img.resize(width:480)" alt="Image 4" />
          <p>Jay Jays</p>
          <Button><a href="">Shop Now</a></Button>
        </div>
        <div>
          <img src="https://jacquie.jgl.com.au/EJ/aurora/images/products/large/518022_perfectplum_l.jpg?i10c=img.resize(width:480)" alt="Image 5" />
          <p>Jacquie</p>
          <Button><a href="">Shop Now</a></Button>
        </div>
      </div>
    </Container>
  );
};

export default BrandCards;

const Container = styled.div`
  width: 100%;
  padding: 50px;
  background-color: #f0f0f0;
  h1 {
    text-align: center;
    color: #30497a;
    margin: 10px;
  }
  .brands {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 35px;
  }
  .brands > div {
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    position: relative;
  }
  .brands > div:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
  img {
    width: 100%;
    height: 100% ;
    border-radius: 10px;
  }
  p {
    text-align: center;
    font-weight:bold;
    font-size:20px;
    margin-top: 10px;
   
  }

  @media screen and (max-width: 768px) {
    .brands > div {
      padding: 5px;
    }
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #30497a;
  color: #fff;
  border: none;
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #283c63;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;