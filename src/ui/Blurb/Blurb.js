import React, { PropTypes } from 'react';
import './blurb.css';

import BlurbTitle from './BlurbTitle';
import BlurbDescription from './BlurbDescription';
import Icon from '../Icon';
import Button from '../Button';

const Blurb = ({button, description, icon, title}) => {
  return (
    <section className='c-blurb'>
      <BlurbTitle>
        {title}
      </BlurbTitle>
      { !!icon && <h3 className="c-blurb__icon"><Icon name={icon} /></h3> }
      <BlurbDescription>{description}</BlurbDescription>
      { !!button && <Button className="c-blurb__button" link={button.address}>{button.description}</Button> }
    </section>
  );
};

Blurb.propTypes = {
  button: PropTypes.object,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Blurb;
