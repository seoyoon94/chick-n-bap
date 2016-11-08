import React from 'react';

import { Blurb, Hero, Footer } from '../../ui';

const Home = () => {
  return (
    <div>
      <Hero />
      <Blurb 
        title="Menu"
        description="Description"/>
      <Blurb 
        title="About Us"
        description="Description"/>
      <Footer />
    </div>
  );
};

export default Home;
