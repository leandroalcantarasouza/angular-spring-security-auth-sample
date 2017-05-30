import React, { Component } from 'react';
import LoginService from '../LoginComponent/LoginService';

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginService = new LoginService();
  }

  handleSubmit(event) {
    event.preventDefault()
    this.loginService.login("admin", "admin")
      .then(() => {
      this.props.handleIsLoggedInChange(true);
    }).catch( (error) => {
      console.log(error);
    });

  }

  render() {

    return (
    <div>

        <div className="alert alert-danger">
          There was a problem logging in. Please try again.
        </div>
      <div className="panel panel-default">
        <div className="panel-heading text-center">
          <h3 className="text-primary">Login</h3>
        </div>
        <form role="form" onSubmit={this.handleSubmit}>

          <div className="panel-body">
            <div className="form-group">
                <label htmlFor="username">Username:</label> <input type="text"
                className="form-control" id="username" name="username"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label> <input type="password"
                className="form-control" id="password" name="password"/>
            </div>

          </div>
          <div className="panel-footer">
            <button type="submit" className="center-block btn btn-primary"><h4>Autenticar</h4></button>
          </div>
        </form>
      </div>
    </div>
    );
  }
}

export default LoginComponent;
