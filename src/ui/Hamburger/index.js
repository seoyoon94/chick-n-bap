import React from 'react';
import './hamburger.css';

const Hamburger = () => {
  return (
    <button className='c-hamburger'>
      <span className="c-hamburger__bar"></span>
      <span className="c-hamburger__bar"></span>
      <span className="c-hamburger__bar"></span>
    </button>
  )
};

export default Hamburger;
