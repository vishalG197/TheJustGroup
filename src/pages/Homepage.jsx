
import React, { lazy, Suspense } from 'react';
import Loder from '../components/Loder';
const LazySlider = lazy(() => import('../components/SliderComponent'));

const Homepage = () => {
  return (
    <Suspense fallback={<Loder/>}>
    <LazySlider />
  </Suspense>
  )
}

export default Homepage;
