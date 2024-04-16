
import React, { lazy, Suspense } from 'react';
import Loder from '../components/Loder';
const LazySlider = lazy(() => import('../components/Slider'));

const Homepage = () => {
  return (
    <Suspense fallback={<Loder/>}>
    <LazySlider />
    <h1>Home Page</h1>
  </Suspense>
  )
}

export default Homepage;
