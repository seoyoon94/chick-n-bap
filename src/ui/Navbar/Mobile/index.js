import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import '../navbar.css';

const Mobile = ({
  active,
  links
}) => {
  const classes = classNames('c-navbar__mobile', { 'is-active': active })
  return (
    <div className={classes}>
      <nav>
        <ul>
          { links.map( link => <li key={link.title}><Link to={link.path}>{link.title}</Link></li>) }
        </ul>
      </nav>
    </div>
  );
};

Mobile.propTypes = {
  active: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.object)
};

export default Mobile;
