import React, { Component } from 'react';
import { Header, Footer, Navbar } from '../../ui';

const links = [
  {
    title: "Menu", 
    path: "/menu"
  },
  
  {
    title: "About Us", 
    path: '/about'
  },

  {
    title: "Contact Us", 
    path: '/contact'
  },

  {
    title: "Social",
    path: '/social'
  }
];

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div className='l-layout'>
        <Header 
          links={links}
          toggleActive={this.toggleMenu}/>
          {children}
        <Footer />
        <Navbar.Mobile 
          active={this.state.active}
          links={links}/>
      </div>
    );
  }
};

export default Layout;
