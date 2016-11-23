import React, { PropTypes } from 'react';
import '../profile.css';

const Avatar = ({src}) => {
  return (
    <div className="c-profile__avatar-container">
      <img 
        className="c-profile__avatar"
        src={src} 
        alt="Profile" />
    </div>
  );
};

Avatar.propTypes = {
 src: PropTypes.string.isRequired 
};

export default Avatar;
