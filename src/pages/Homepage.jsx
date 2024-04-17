
import React, { lazy, Suspense } from 'react';
import Loder from '../components/Loder';
const LazySlider = lazy(() => import('../components/SliderComponent'));
const Subscribe = lazy(() => import('../components/SubscribeSection'));
const Homepage = () => {
  return (
    <Suspense fallback={<Loder/>}>
    <LazySlider />
<Subscribe />
  </Suspense>
  )
}

export default Homepage;
