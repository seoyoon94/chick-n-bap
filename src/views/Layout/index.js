import React from 'react';
import { Header, Footer } from '../../ui';

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
