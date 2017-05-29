import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    }
  }

  recuperaLinks(isLoggedIn) {

    let links = [];
    if (isLoggedIn) {
      links.push(<li key="logout" role="presentation"><a><strong>LOGOUT</strong></a></li>);
      links.push(<li key="outro" role="presentation"><a><strong>OUTRO</strong></a></li>);

    } else {
      links.push(<li key="login" role="presentation"><a><strong>LOGIN</strong></a></li>);
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
                  <li role="presentation"><a><strong>HOME</strong></a></li>
                  {this.recuperaLinks(this.state.isLoggedIn).map((link) =>
                   link
                  )}
                </ul>
              </div>
            </div>
          </nav>
          <br/><br/><br/>
          </div>
      <div className="container"></div>
  </div>
    );
  }
}

export default App;
