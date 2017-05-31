import React, { Component } from 'react';
import LoginComponent from '../LoginComponent/LoginComponent';

class LoginMenuComponent extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault()
    this.props.handleClick("login");
  }

  render() {

    let selected = "login" === this.props.selectedItem ? "active" : "";

    return (
      <li role="presentation" className={selected}>
        <a href="javascript:void(0)" onClick={this.handleClick}>
          <strong>LOGIN</strong>
        </a>
      </li>
    );
  }
}

export default LoginMenuComponent;
