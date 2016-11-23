import React, { PropTypes } from 'react';
import './timeline.css';

const Timeline = ({items}) => {
  return (
    <div className="c-timeline">
      <h2>Timeline</h2>
      {
        items.map( ({year, description}) => 
          <div key={year} className="c-timeline__item">
            <h3 className="c-timeline__year">{year}</h3>
            <p>{description}</p>
          </div>
        )
      }
    </div>
  );
};

Timeline.propTypes = {
  items: PropTypes.array.isRequired
};

export default Timeline;
