import React from 'react';
import './footer.css';

import Hours from './Hours';
import Contact from './Contact';
import * as Layout from '../../layout';

const Footer = () => {
  const bps = {
    xs: 12,
    sm: 6
  };
  return (
    <footer className='c-footer'>
      <Layout.Grid>
        <Layout.Row>
          <Layout.Column
            breakpoints={bps}> 
            <Hours />
          </Layout.Column>
          <Layout.Column
            breakpoints={bps}> 
            <Contact 
              address="4400 Vestal Parkway
                       Binghamton, NY 13905"
              tel="(888) 000-0000"
              email="contact@chicknbap.com"/>
          </Layout.Column>
        </Layout.Row>
      </Layout.Grid>
    </footer>
  )
};

export default Footer;
