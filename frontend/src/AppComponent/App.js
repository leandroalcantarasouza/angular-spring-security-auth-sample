import React, { Component } from 'react';
import './App.css';
import OutroComponent from '../OutroComponent/OutroComponent';
import LoginComponent from '../LoginComponent/LoginComponent';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentScreen : null
    }
  }

  handleClick(event, component) {
    this.setState({ currentScreen: component});
  }

  handleIsLoggedInChange = (isLoggedIn) => {
    this.setState({ isLoggedIn });
    this.setState({ currentScreen: null });
  }

  recuperaLinks(isLoggedIn) {

    let links = [];
    if (isLoggedIn) {
      let link = <li key="logout" role="presentation">
        <a href="#" onClick={(e) => this.handleIsLoggedInChange(false)}>
          <strong>LOGOUT</strong>
        </a>
      </li>;
      links.push(link);
      link = <li key="outro" role="presentation">
        <a href="#" onClick={(e) => this.handleClick(e, <OutroComponent />)}>
          <strong>OUTRO</strong>
        </a>
      </li>;
      links.push(link);

    } else {
      let link = <li key="login" role="presentation">
        <a href="#" onClick={(e) => this.handleClick(e, <LoginComponent handleIsLoggedInChange={this.handleIsLoggedInChange} />)}>
          <strong>LOGIN</strong>
        </a>
      </li>;
      links.push(link);
    }

    return links;
  }

  render() {

    return (
      <div className="totalContentWrapper" id="outer">

        <div className="contentWrapper" id="inner">
          <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="collapse navbar-collapse">
                  <ul className="nav nav-pills">
                  <li role="presentation"><a href="#"><strong>HOME</strong></a></li>
                  {this.recuperaLinks(this.state.isLoggedIn).map((link) =>
                   link
                  )}
                </ul>
              </div>
            </div>
          </nav>
          <br/><br/><br/>
          </div>
        <div className="container">
          {this.state.currentScreen}
        </div>
  </div>
    );
  }
}

export default App;
