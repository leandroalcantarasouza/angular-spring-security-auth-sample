import React, { Component } from 'react';
import OutroComponent from '../OutroComponent/OutroComponent';
import LoginComponent from '../LoginComponent/LoginComponent';
import LogoutComponent from '../LogoutComponent/LogoutComponent';
import HomeComponent from '../HomeComponent/HomeComponent';
import HomeMenuComponent from '../HomeMenuComponent/HomeMenuComponent';
import OutroMenuComponent from '../OutroMenuComponent/OutroMenuComponent';
import LoginMenuComponent from '../LoginMenuComponent/LoginMenuComponent';

class App extends Component {

   constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      principal: '',
      selectedItem: 'home'
    }
  }

   handleMenuItemClick = (menuItem) => {
     this.setState({ selectedItem: menuItem});
  }

   handleIsLoggedInChange = (isLoggedIn, principal) => {
    this.setState({
      isLoggedIn : isLoggedIn,
      principal : principal,
      selectedItem: 'home'
    });
  }

  recuperaLinks(isLoggedIn) {

    let links = [];
    links.push(<HomeMenuComponent key="home" handleClick={this.handleMenuItemClick} selectedItem={this.state.selectedItem}/>);

    if (isLoggedIn) {

      links.push(<OutroMenuComponent key="outro" handleClick={this.handleMenuItemClick} selectedItem={this.state.selectedItem}/>);
      links.push(<LogoutComponent key="logout" handleClick={this.handleIsLoggedInChange} />);

    } else {
      links.push(<LoginMenuComponent key="login" handleClick={this.handleMenuItemClick} selectedItem={this.state.selectedItem} />);
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
          {this.state.selectedItem === 'home' && <HomeComponent isLoggedIn={this.state.isLoggedIn} principal={this.state.principal} />}
          {this.state.selectedItem === 'login' && <LoginComponent handleIsLoggedInChange={this.handleIsLoggedInChange} />}
          {this.state.selectedItem === 'outro' && <OutroComponent />}
        </div>
  </div>
    );
  }
}

export default App;
