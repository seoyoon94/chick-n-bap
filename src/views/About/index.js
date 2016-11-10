import React from 'react';

import blurbs from './blurbs';
import profiles from './profiles';
import { Blurb, Profile } from '../../ui';

const About = () => {
  return (
    <div>
      <Blurb.BlurbsList blurbs={blurbs} />
      <Profile.List profiles={profiles} />
    </div>
  );
};

export default About;
