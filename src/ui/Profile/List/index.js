import React, { PropTypes } from 'react';
import '../profile.css';

import Profile from '../Profile';

const List = ({profiles}) => {
  return (
    <div className='l-profile-list'>
      { profiles.map( profile => <Profile key={profile.name} {...profile} /> ) }
    </div>
  );
};

List.propTypes = {
  profiles: PropTypes.array.isRequired
};

export default List;
