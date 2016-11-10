import React from 'react';
import './footer.css';

import Hours from './Hours';
import Contact from './Contact';

const Footer = () => {
  return (
    <footer className='c-footer'>
      <div className='c-footer__wrapper'>
        <Hours />
        <Contact 
          address="4400 Vestal Parkway
                   Binghamton, NY 13905"
          tel="(888) 000-0000"
          email="contact@chicknbap.com"/>
        
      </div>
    </footer>
  )
};

export default Footer;
