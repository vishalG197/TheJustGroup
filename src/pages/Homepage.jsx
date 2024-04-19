
import React, { lazy, Suspense } from 'react';
import Loder from '../components/Loder';
import ScrollToTopArrow from '../components/ScrollToStop';
// import Welcome from '../components/Welcome';
// import BrandCards from '../components/BrandCards';
// import img from '../assets/gift-banner.png';
// import styled from 'styled-components';
// import MoreBrand from '../components/MoreBrand';

const LazySlider = lazy(() => import('../components/SliderComponent'));
const Subscribe = lazy(() => import('../components/SubscribeSection'));
const Welcome = lazy(() => import('../components/Welcome'));
const BrandCards = lazy(() => import('../components/BrandCards'));
const Homepage = () => {
  return (
    <Suspense fallback={<Loder />}>
      <LazySlider />
      <Welcome />
      <BrandCards />
     
      {/* <MoreBrand /> */}
      {/* <BannerDiv>
       <a href=""><img src={img} alt="gift" /></a> 
      </BannerDiv> */}
      <Subscribe />
      <ScrollToTopArrow/>
    </Suspense>

  )
}

export default Homepage;
// const BannerDiv = styled.div`
//   width: auto;

//   img {
//     width: 100%;
//     height: auto;
//     display: block; /* Ensures that the image is displayed as a block element */
//   }
// `;