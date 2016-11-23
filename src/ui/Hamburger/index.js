import React, { PropTypes } from 'react';
import './hamburger.css';

const Hamburger = ({
  onClick
}) => {
  return (
    <button 
      className='c-hamburger'
      onClick={onClick}>
      <span className="c-hamburger__bar"></span>
      <span className="c-hamburger__bar"></span>
      <span className="c-hamburger__bar"></span>
    </button>
  )
};

Hamburger.propTypes = {
  onClick: PropTypes.func
}

export default Hamburger;
