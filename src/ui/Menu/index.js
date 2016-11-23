import React, { PropTypes } from 'react';
import './menu.css';

const Main = ({children}) => {
  return (
    <div className="c-menu">
      <h2>Menu</h2>
      <ol className="c-menu__procedures">
        {children}
      </ol>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired
};

const Procedure = ({children, title}) => {
  return (
    <li className="c-menu__procedure">
      <h3>{title}</h3>
      <div className="c-menu__options">
        {children}
      </div>
    </li>
  );
};

Procedure.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const Option = ({children, title}) => {
  return (
    <div className="c-menu__option">
      <h4>{title}</h4>
      {children}
    </div>
  );
};

Option.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

const Item = ({
  description,
  icon,
  ingredients,
  price
}) => {
  return (
    <div className="c-menu__item">
      {icon}
      <h5>{description}</h5>
      { Array.isArray(ingredients) ? 
        <p className='c-menu__ingredients'>{ingredients.join(", ")}</p> : 
        <p className='c-menu__ingredients'>{ingredients}</p> 
      }
      { !!price && <p className="c-menu__price">${price}</p> }
    </div>
  );
};

Item.propTypes = {
  description: PropTypes.string.isRequired,
  icon: PropTypes.node,
  ingredients: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  price: PropTypes.number
};

export { 
  Item,
  Main,
  Option,
  Procedure
};
