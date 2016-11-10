import React, { PropTypes } from 'react';
import '../profile.css';

const Avatar = ({src}) => {
  return (
    <img 
      className="c-profile__avatar"
      src={src} 
      alt="Profile" />
  );
};

Avatar.propTypes = {
 src: PropTypes.string.isRequired 
};

export default Avatar;
