import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import '../form.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      active: false,
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if(e.target.value.length > 0) {
      this.setState({ active: true });
    }
    else {
      this.setState({ active: false });
    }
    this.setState({ value: e.target.value });
  }

  render() {
    const { className, id, label, placeholder, type } = this.props;
    const { active, value } = this.state;
    const classes = classNames("c-input__field", { "is-active": active })
    return (
      <div className={classes}>
        <input 
          id={id} 
          onChange={this.handleChange}
          type={type} 
          placeholder={placeholder}
          value={value}/>
        <label htmlFor={id}>{label}</label>
      </div>
    );

  }
};

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default Input;
