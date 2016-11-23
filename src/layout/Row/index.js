import React from 'react';
import '../grid.css';

const Row = ({children}) => {
  return (
    <div className="l-row">
      {children}
    </div>
  );
};

export default Row;
