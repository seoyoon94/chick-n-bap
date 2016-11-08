import React, { PropTypes } from 'react';
import './blurb.css';

import BlurbTitle from './BlurbTitle';
import BlurbDescription from './BlurbDescription';

const Blurb = ({title, description}) => {
  return (
    <section className='blurb'>
      <BlurbTitle>{title}</BlurbTitle>
      <BlurbDescription>{description}</BlurbDescription>
    </section>
  );
};

Blurb.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Blurb;
