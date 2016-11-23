import React, { Component, PropTypes } from 'react';
import '../form.css';

class Submit extends Component {
  render() {
    return (
      <div className="c-form__submit">
        <input 
          type="submit" 
          value="Submit"/>
      </div>
    );
  }
};

export default Submit;
