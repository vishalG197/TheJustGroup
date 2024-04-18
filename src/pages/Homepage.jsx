
import React, { lazy, Suspense } from 'react';
import Loder from '../components/Loder';
import Welcome from '../components/Welcome';
import BrandCards from '../components/BrandCards';
const LazySlider = lazy(() => import('../components/SliderComponent'));
const Subscribe = lazy(() => import('../components/SubscribeSection'));
const Testimonial = lazy(() => import('../components/Testimonial'));
const Homepage = () => {
  return (

    <Suspense fallback={<Loder />}>
      <LazySlider />
      <Welcome />
      <BrandCards />
      <Testimonial />
      <Subscribe />
    </Suspense>

  )
}

export default Homepage;
