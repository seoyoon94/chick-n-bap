import React from 'react';
import '../blurb.css';

const BlurbTitle = ({children}) => {
  return (
    <h2 className='c-blurb__title'>
      {children}
    </h2>
  );
};

export default BlurbTitle;
