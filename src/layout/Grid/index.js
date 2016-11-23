import React from 'react';
import '../grid.css';

const Grid = ({children}) => {
  return (
    <div className="l-grid">
      {children}
    </div>
  );
};

export default Grid;
