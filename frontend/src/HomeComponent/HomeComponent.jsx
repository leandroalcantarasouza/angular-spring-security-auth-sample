import React, { Component } from 'react';
import LoginService from '../LoginComponent/LoginService';
import { Greeting } from '../Common/Greeting'

class HomeComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Greeting: null
    }
    this.loginService = new LoginService();
  }

  componentDidMount() {
    let isLoggedIn = this.props.isLoggedIn;
    if (isLoggedIn) {
      this.loginService.getResource().then(data => {
        this.setState({ Greeting: new Greeting(data) });
      });
    }

  }

  render() {

    const notLoggedInMessage = <div>
      <br /><br />
      <p className="text-center text-info">Login to see your greeting</p>
    </div>

    const loggedInMessage = <div className="text-center text-info">principal
        <br/>
        <p>Hello</p>
        <p>The ID is</p>
        <p>The content is</p>
      </div>

    let mensagemLogin = this.props.isLoggedIn ? loggedInMessage : notLoggedInMessage

    return (
      <div className="panel panel-default">
        <div className="panel-heading text-center">
          <h1><small className="text-info">Greeting</small></h1>
        </div>
        {mensagemLogin}
      </div>
    );
  }
}

export default HomeComponent;
