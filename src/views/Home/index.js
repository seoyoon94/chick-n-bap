import React from 'react';

import { Blurb, Hero } from '../../ui';
import * as Layout from '../../layout';
import banner from '../../assets/images/banner.jpg';
import blurbs from './blurbs';

const Home = () => {
  let BlurbColumn = Layout.makeColumn({
    xs: 12,
    sm: 6,
    md: 4
  })(Blurb.Blurb);
  let columns = blurbs.map(blurb => <BlurbColumn key={blurb.title} {...blurb} />);
  return (
    <div>
      <Hero 
        imgSrc={banner}/>
      <Layout.Grid> 
        <Layout.Row>
          {columns}
        </Layout.Row>
      </Layout.Grid>
    </div>
  );
};

export default Home;
