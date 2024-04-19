
import React, { lazy, Suspense } from 'react';
import Loder from '../components/Loder';
import Welcome from '../components/Welcome';
import BrandCards from '../components/BrandCards';
import MoreBrand from '../components/MoreBrand';
const LazySlider = lazy(() => import('../components/SliderComponent'));
const Subscribe = lazy(() => import('../components/SubscribeSection'));
const Homepage = () => {
  return (
    <Suspense fallback={<Loder />}>
      <LazySlider />
      <Welcome />
      <BrandCards />
      <Subscribe />
      {/* <MoreBrand /> */}
    </Suspense>

  )
}

export default Homepage;
