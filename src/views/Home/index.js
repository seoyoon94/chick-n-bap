import React from 'react';

import { Blurb, Hero } from '../../ui';
import banner from '../../assets/images/banner.jpg';
import blurbs from './blurbs';

const Home = () => {
  return (
    <div>
      <Hero 
        imgSrc={banner}/>
      <Blurb.BlurbsList
        blurbs={blurbs} />
    </div>
  );
};

export default Home;
