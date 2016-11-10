import React, { PropTypes } from 'react';
import './hero.css';

const Hero = ({imgSrc}) => {
  return (
    <div 
      className="hero" 
      style={{backgroundImage: 'url(' + imgSrc + ')'}}/>
  );
};

Hero.propTypes = {
  imgSrc: PropTypes.string
};

export default Hero;
