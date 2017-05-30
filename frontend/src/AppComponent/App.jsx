import React, { Component } from 'react';
import OutroComponent from '../OutroComponent/OutroComponent';
import LoginComponent from '../LoginComponent/LoginComponent';
import LogoutComponent from '../LogoutComponent/LogoutComponent';
import HomeComponent from '../HomeComponent/HomeComponent';

class App extends Component {

   constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentScreen: <HomeComponent isLoggedIn={false}/>
    }
  }

   handleClick(event, component) {
    this.setState({ currentScreen: component });
  }

  handleIsLoggedInChange = (isLoggedIn) => {
    this.setState({ isLoggedIn });
    this.setState({ currentScreen: <HomeComponent isLoggedIn={this.state.isLoggedIn}/> });
  }

  recuperaLinks(isLoggedIn) {

    let links = [];
    let link;
    links.push(<li key="home" role="presentation"><a onClick={(e) => this.handleClick(e, <HomeComponent isLoggedIn={this.state.isLoggedIn} />)} href="#"><strong>HOME</strong></a></li>);

    if (isLoggedIn) {

      link = <li key="outro" role="presentation">
        <a href="#" onClick={(e) => this.handleClick(e, <OutroComponent />)}>
          <strong>OUTRO</strong>
        </a>
      </li>;
      links.push(link);

      link = <LogoutComponent key="logout" handleIsLoggedInChange={(e) => this.handleIsLoggedInChange(e, false)} />;
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
