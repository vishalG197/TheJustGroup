import React from 'react';
import styled from 'styled-components';

const Sample1 = () => {
  return (
    <Container>
      <div className='brands'>
        <div>
          <img src="https://justjeans.jgl.com.au/JJ/aurora/images/espot/static/about/24AW/JJ24AW_AboutUs02.jpg" alt="Image 1" />
          <p>Just Jeans</p>
        </div>
        <div>
          <img src="https://portmans.jgl.com.au/RJ/aurora/images/espot/static/about/PO23AW_AboutUs@2x_2.jpg" alt="Image 2" />
          <p>Portmans</p>
        </div>
        <div>
          <img src="https://dotti.jgl.com.au/DT/aurora/images/popup/DT_DESKTP_PopUp_SignUp_1.jpg" alt="Image 3" />
          <p>Dotti</p>
        </div>
        <div>
          <img src="https://jayjays.jgl.com.au/MJ/aurora/images/products/large/930386_navystripe_back_l.jpg?i10c=img.resize(width:480)" alt="Image 4" />
          <p>Jay Jays</p>
        </div>
        <div>
          <img src="https://jacquie.jgl.com.au/EJ/aurora/images/products/large/518022_perfectplum_l.jpg?i10c=img.resize(width:480)" alt="Image 5" />
          <p>Jacquie</p>
        </div>
      </div>
    </Container>
  );
};

export default Sample1;

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f0f0f0;
  
  .brands {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Responsive grid */
    gap: 20px;
  }

  .brands > div {
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .brands > div:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  p {
    text-align: center;
    margin-top: 10px;
  }
`;

