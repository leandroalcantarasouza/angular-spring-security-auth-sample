import React, { Component } from 'react';
import LoginService from '../LoginComponent/LoginService';

class LogoutComponent extends Component {

  constructor(props) {
    super(props);
    this.loginService = new LoginService();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault()
    this.loginService.logout()
      .then(() => {
        this.props.handleClick(false);
    });
  }

  render() {

    return (
      <li role="presentation"><a href="javascript:void(0)" onClick={this.handleClick}>
        <strong>LOGOUT</strong>
      </a></li>
    );
  }
}

export default LogoutComponent;
