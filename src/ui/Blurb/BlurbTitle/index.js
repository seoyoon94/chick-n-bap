import React, { PropTypes } from 'react';
import '../blurb.css';

const BlurbDescription = ({children}) => {
  return (
    <h3 className='blurb__title'>{children}</h3>
  );
};

export default BlurbDescription;
