import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './icon.css';

const Icon = ({className, name, size, color}) => {
  let iconClass = classNames("material-icons", className, color, size);
  return (
    <i className={iconClass}>{name}</i>
  )
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string
};

Icon.defaultProps = {
  color: "orange"
};

export default Icon;
