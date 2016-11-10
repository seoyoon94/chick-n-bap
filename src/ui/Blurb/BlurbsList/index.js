import React, { PropTypes } from 'react';
import Blurb from '../Blurb';
import '../blurb.css';

const BlurbsList = ({blurbs}) => {
  return (
    <div className='l-blurbs-list'>
      { blurbs.map( blurb => 
        <Blurb 
          key={blurb.title} 
          button={blurb.button}
          title={blurb.title} 
          description={blurb.description}
          icon={blurb.iconName} /> ) }
    </div>
  );
};

BlurbsList.propTypes = {
  blurbs: PropTypes.array.isRequired
};

export default BlurbsList;
