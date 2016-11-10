import React, { PropTypes } from 'react';
import '../profile.css';

const Bio = ({bio, name, title}) => {
  return (
    <div className='c-profile__bio'>
      <h2 className='c-profile__name'>
        {name} 
      </h2>
      { !!title && <h3 className='c-profile__title'>{title}</h3> }
      <p>{bio}</p>
    </div>
  );
};

Bio.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  bio: PropTypes.string.isRequired
};

export default Bio;
