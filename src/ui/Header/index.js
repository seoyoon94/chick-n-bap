import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './header.css';
import Navbar from '../Navbar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const scrollTop = event.srcElement.body.scrollTop;
    if(scrollTop > this.offsetHeight) {
      this.setState({ active: true });
    }
    else {
      this.setState({ active: false })
    }
  }

  render() {
    const { links, toggleActive } = this.props;
    const classes = classNames("c-header", { "is-active": this.state.active});
    return (
      <header 
        className={classes}
        ref={(ref) => { if(ref) { this.offsetHeight = ref.offsetHeight } }}>
        <Navbar 
          links={links}
          toggleActive={toggleActive}/>
      </header>
    );
  }
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  toggleActive: PropTypes.func
};

export default Header;
