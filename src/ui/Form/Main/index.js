import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../form.css';

const Main = ({
  action,
  children,
  className
}) => {
  return (
    <form 
      action={action}
      className="c-form">
      {children}
    </form>
  );
};

Main.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Main;
