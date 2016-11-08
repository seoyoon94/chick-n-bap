import React, { PropTypes } from 'react';
import '../blurb.css';

const BlurbDescription = ({children}) => {
  return (
    <p className="blurb__description">{children}</p>
  );
};

export default BlurbDescription;
