import React, { PropTypes } from 'react';
import './profile.css';

import Avatar from './Avatar';
import Bio from './Bio';

const Profile = ({bio, imgSrc, name, title}) => {
  return (
    <div className="c-profile">
      <Avatar src={imgSrc} />
      <Bio 
        bio={bio}
        name={name}
        title={title} />
    </div>
  );
};

Profile.propTypes = {
  bio: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  imgSrc: PropTypes.string.isRequired
};

export default Profile;
