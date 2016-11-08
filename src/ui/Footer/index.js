import React from 'react';
import './footer.css';

import Hours from './Hours';
import Contact from './Contact';

const Footer = () => {
  return (
    <footer>
      <div className='footer__wrapper'>
        <Hours />
        <Contact 
          tel="(888) 000-0000"
          email="contact@chicknbap.com"/>
      </div>
    </footer>
  )
};

export default Footer;
