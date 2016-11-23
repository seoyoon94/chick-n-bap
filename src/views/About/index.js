import React from 'react';

import blurbs from './blurbs';
import items from './timeline';
import profiles from './profiles';
import banner from '../../assets/images/about.jpg';
import { Blurb, Hero, Profile, Timeline } from '../../ui';
import * as Layout from '../../layout';

const About = () => {
  return (
    <div>
      <Hero
        imgSrc={banner} />
      <Layout.Grid>
        <Layout.Row>
          <Layout.Column
            breakpoints={{
              xs: 12
            }}>
            <Blurb.Blurb {...blurbs[0]}/>
          </Layout.Column>
          <Layout.Column
            breakpoints={{
              xs: 12
            }}>
            <Profile.List profiles={profiles} />
          </Layout.Column>
          <Layout.Column
            breakpoints={{
              xs: 12
            }}>
            <Timeline items={items}/>
          </Layout.Column>
        </Layout.Row>
      </Layout.Grid>
    </div>
  );
};

export default About;
