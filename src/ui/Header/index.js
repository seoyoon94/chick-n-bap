import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className='c-header'>
      <div className='c-navbar'>
        <a href="/" className='c-navbar__logo' />
        <nav>
          <ul>
            <li>Menu</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Press</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
