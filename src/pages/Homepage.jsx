
import React, { lazy, Suspense } from 'react';
import Loder from '../components/Loder';
import Sample from '../components/Sample';
import Sample1 from '../components/Sample1';
const LazySlider = lazy(() => import('../components/SliderComponent'));
const Subscribe = lazy(() => import('../components/SubscribeSection'));
const Testimonial = lazy(() => import('../components/Testimonial'));
const Homepage = () => {
  return (

    <Suspense fallback={<Loder/>}>
    <LazySlider />



    


      <Sample />
      <Sample1 />
      <Testimonial/>
      <Subscribe />
    </Suspense>

  )
}

export default Homepage;
