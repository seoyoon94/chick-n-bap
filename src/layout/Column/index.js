import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import '../grid.css';


function createColumns(bps) {
  const baseClass = "l-col";
  return Object.keys(bps).reduce((all, bp) => {
    all[`${baseClass}-${bp}-${bps[bp]}`] = true;
    return all;
  }, {});
}

const Column = ({
  breakpoints,
  children
}) => {
  return (
    <div className={classNames(createColumns(breakpoints))}>
      {children}
    </div>
  );
};

Column.propTypes = {
  breakpoints: PropTypes.object.isRequired,
  children: PropTypes.node
};

export const makeColumn = bps => WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <Column breakpoints={bps}>
          <WrappedComponent {...this.props}/>
        </Column>
      );
    }
  };
};


export default Column;
