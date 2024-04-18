// import React from 'react';
// import styled from 'styled-components';

// const BrandCards = () => { 
//   return (
//     <Container>
//       <h1>Our Brands</h1>
//       <div className='brands'>
//         <div>
//           <img src="https://justjeans.jgl.com.au/JJ/aurora/images/espot/static/about/24AW/JJ24AW_AboutUs02.jpg" alt="Image 1" />
//           {/* <p>Just Jeans</p> */}
//           <div><img src="https://seeklogo.com/images/J/Just_jeans-logo-17845338A7-seeklogo.com.png" alt="" /></div>
//           {/* <Button><a href="">Shop Now</a></Button> */}
//         </div>
//         <div>
//           <img src="https://portmans.jgl.com.au/RJ/aurora/images/espot/static/about/PO23AW_AboutUs@2x_2.jpg" alt="Image 2" />
//           <div><img src="https://seeklogo.com/images/J/Just_jeans-logo-17845338A7-seeklogo.com.png" alt="" /></div>
//           {/* <p>Portmans</p>
//           <Button><a href="">Shop Now</a></Button> */}
//         </div>
//         <div>
//           <img src="https://dotti.jgl.com.au/DT/aurora/images/popup/DT_DESKTP_PopUp_SignUp_1.jpg" alt="Image 3" />
//           <div><img src="https://seeklogo.com/images/J/Just_jeans-logo-17845338A7-seeklogo.com.png" alt="" /></div>
//           {/* <p>Dotti</p>
//           <Button><a href="">Shop Now</a></Button> */}
//         </div>
//         <div>
//           <img src="https://jayjays.jgl.com.au/MJ/aurora/images/products/large/930386_navystripe_back_l.jpg?i10c=img.resize(width:480)" alt="Image 4" />
//           <div><img src="https://seeklogo.com/images/J/Just_jeans-logo-17845338A7-seeklogo.com.png" alt="" /></div>
//           {/* <p>Jay Jays</p>
//           <Button><a href="">Shop Now</a></Button> */}
//         </div>
//         <div>
//           <img src="https://jacquie.jgl.com.au/EJ/aurora/images/products/large/518022_perfectplum_l.jpg?i10c=img.resize(width:480)" alt="Image 5" />
//           <div><img src="https://seeklogo.com/images/J/Just_jeans-logo-17845338A7-seeklogo.com.png" alt="" /></div>
//           {/* <p>Jacquie</p>
//           <Button><a href="">Shop Now</a></Button> */}
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default BrandCards;

// // const Container = styled.div`
// //   width: 100%;
// //   padding: 50px;
// //   background-color: #f0f0f0;
// //   h1 {
// //     text-align: center;
// //     color: #30497a;
// //     margin: 10px;
// //   }
// //   .brands {
// //     display: grid;
// //     grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
// //     gap: 35px;
// //   }
// //   .brands > div {
// //     background-color: #ffffff;
// //     padding: 10px;
// //     border-radius: 10px;
// //     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
// //     transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
// //     position: relative;
// //   }
// //   .brands > div:hover {
// //     transform: translateY(-5px);
// //     box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
// //   }
// //   img {
// //     width: 100%;
// //     height: 100% ;
// //     border-radius: 10px;
// //   }
// //   p {
// //     text-align: center;
// //     font-weight:bold;
// //     font-size:20px;
// //     margin-top: 10px;
   
// //   }

// //   @media screen and (max-width: 768px) {
// //     .brands > div {
// //       padding: 5px;
// //     }
// //   }
// // `;

// // const Button = styled.button`
// //   position: absolute;
// //   bottom: 5px;
// //   left: 50%;
// //   transform: translateX(-50%);
// //   background-color: #30497a;
// //   color: #fff;
// //   border: none;
// //   padding: 10px 10px;
// //   border-radius: 5px;
// //   cursor: pointer;
// //   transition: background-color 0.3s ease;
// //   &:hover {
// //     background-color: #283c63;
// //   }
// //   a {
// //     text-decoration: none;
// //     color: inherit;
// //   }
// // `;


import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  h1 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 36px;
  }

  .brands {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    @media(max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
    gap: 20px;
  }

  .brand-card {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 10px 10px 0 0;
    }

    &:hover {
      transform: scale(1.05);
    }

    .brand-logo {
      position: absolute;
      bottom: 20px;
      left: 10px;
      width: 50px;
      height: auto;
    }
  }
`;

const BrandCards = () => {
  return (
    <Container>
      <h1>Our Brands</h1>
      <div className='brands'>
       
          <div className="brand-card">
            <a href="https://justjeans.jgl.com.au/">
            <img src="https://justjeans.jgl.com.au/JJ/aurora/images/espot/static/about/24AW/JJ24AW_AboutUs02.jpg" alt="Image 1" />
            <img className="brand-logo" src="https://seeklogo.com/images/J/Just_jeans-logo-17845338A7-seeklogo.com.png" alt="" />
            </a>
          </div>
          <div className="brand-card">
            <a href="https://portmans.jgl.com.au/">
            <img src="https://portmans.jgl.com.au/RJ/aurora/images/espot/static/about/PO23AW_AboutUs@2x_2.jpg"  />
            <img className="brand-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHp2qD9Ofs00hRm8DV96TgGgmkzbKM6KI5oq0nhUUGQ&s" alt="" />
            </a>
          </div>
          <div className="brand-card">
            <a href="https://dotti.jgl.com.au/">
            <img src="https://dotti.jgl.com.au/DT/aurora/images/popup/DT_DESKTP_PopUp_SignUp_1.jpg" alt="Image 3" />
            <img className="brand-logo" src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/ciqk9vxtldjuyqpji6oq" alt="" />
            </a>
          </div>
          <div className="brand-card">
            <a href="https://jayjays.jgl.com.au/">
            <img src="https://jayjays.jgl.com.au/MJ/aurora/images/products/large/930386_navystripe_back_l.jpg?i10c=img.resize(width:480)" alt="Image 4" />
            <img className="brand-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Jay_Jays_Logo.jpg/800px-Jay_Jays_Logo.jpg" alt="" />
            </a>
          </div>
          <div className="brand-card">
            <a href="https://jacquie.jgl.com.au/">
            <img src="https://jacquie.jgl.com.au/EJ/aurora/images/products/large/518022_perfectplum_l.jpg?i10c=img.resize(width:480)" alt="Image 5" />
            <img className="brand-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjiDLjk66KdK3Fm1iN_8yeMFSlsq-7LXDmfl11xRyEw&s" alt="" />
            </a>
          </div>
       
      </div>
    </Container>
  );
};

export default BrandCards;


