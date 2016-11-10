import React from 'react';
import '../blurb.css';

const BlurbDescription = ({children}) => {
  return (
    <p className="c-blurb__description">
      {children}
    </p>
  );
};

export default BlurbDescription;
