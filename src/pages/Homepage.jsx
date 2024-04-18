
import React, { lazy, Suspense } from 'react';
import Loder from '../components/Loder';
const LazySlider = lazy(() => import('../components/SliderComponent'));
const Subscribe = lazy(() => import('../components/SubscribeSection'));
const Testimonial = lazy(() => import('../components/Testimonial'));
const Homepage = () => {
  return (
    <Suspense fallback={<Loder/>}>
    <LazySlider />



      <div style={{width:'100%'}}>
        <img width={'100%'} src="https://t4.ftcdn.net/jpg/04/17/42/57/240_F_417425751_z8Rg86FJnDc8vUSC5Frj3CgD4owjLQTB.jpg" alt="" />
      </div>
    
<Testimonial/>
<Subscribe />
  </Suspense>
  )
}

export default Homepage;
