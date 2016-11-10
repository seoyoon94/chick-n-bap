import React from 'react';
import { Link } from 'react-router';
import './navbar.css';

import Hamburger from '../Hamburger';

const Navbar = () => {
  return (
    <div className='c-navbar'>
      <Link to="/" className='c-navbar__logo' />
      <Hamburger />
      <nav className='c-nav'>
        <ul>
          <li>Menu</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Press</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
