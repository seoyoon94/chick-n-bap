import React from 'react';

import banner from '../../assets/images/banner.jpg';
import blurbs from './blurbs.json';
import { Blurb, Hero } from '../../ui';

const Menu = () => {
  return (
    <div>
      <Hero imgSrc={banner}/>
      <Blurb.BlurbsList blurbs={blurbs} />
    </div>
  );
};

export default Menu;
