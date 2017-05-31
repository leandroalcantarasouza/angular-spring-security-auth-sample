import React, { Component } from 'react';
import LoginService from '../LoginComponent/LoginService';

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginService = new LoginService();
    this.state = {
      username: '', password: '', hasError: false
    };
  }

  handleSubmit(event) {
    event.preventDefault()
    this.loginService.login(this.state.username, this.state.password)
      .then(() => {
      this.props.handleIsLoggedInChange(true);
    }).catch( (error) => {
      this.setState({ hasError: true });
    });

  }

  handleChange(e, valor) {
    var change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }


  render() {

    let hasError = this.state.hasError ? <div className="alert alert-danger">
      There was a problem logging in. Please try again.
        </div> : "";

    return (
    <div>
        {hasError}
      <div className="panel panel-default">
        <div className="panel-heading text-center">
          <h3 className="text-primary">Login</h3>
        </div>
        <form role="form" onSubmit={this.handleSubmit}>

          <div className="panel-body">
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" value={this.state.username} className="form-control" id="username" name="username" onChange={this.handleChange.bind(this)}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" value={this.state.password} className="form-control" id="password" name="password" onChange={this.handleChange.bind(this)}/>
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
