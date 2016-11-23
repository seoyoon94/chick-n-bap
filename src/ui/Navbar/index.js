import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './navbar.css';

import Mobile from './Mobile';
import Hamburger from '../Hamburger';

const Navbar = ({
  links,
  toggleActive
}) => {
  return (
    <div className='c-navbar'>
      <Link to="/" className='c-navbar__logo' />
      <Hamburger 
        onClick={toggleActive}/>
      <nav className='c-nav'>
        <ul className='c-nav__menu'>
          { links.map( link => <li key={link.title}><Link to={link.path}>{link.title}</Link></li> ) }
        </ul>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  toggleActive: PropTypes.func
};

export default Navbar;
export { Mobile };
