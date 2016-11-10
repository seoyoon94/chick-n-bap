import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import './button.css';

const Button = ({children, color, link, styles}) => {
  let buttonClass = classNames("c-button", styles, color);
  return (
    <Link to={link} className={buttonClass}>
      {children}
    </Link>
  );
};

Button.propTypes = {
  styles: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.string
};

export default Button;
