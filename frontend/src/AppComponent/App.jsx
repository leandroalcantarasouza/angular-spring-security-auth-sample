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
      selectedItem: 'home',
      currentScreen: <HomeComponent isLoggedIn={false}/>
    }
  }

   handleClick(event, component, menuItem) {
     this.setState({ selectedItem: menuItem, currentScreen: component });
   }

   handleMenuItemClick = (component, menuItem) => {
     this.setState({ selectedItem: menuItem, currentScreen: component});
  }

   handleIsLoggedInChange = (isLoggedIn, principal) => {
    this.setState({
      isLoggedIn : isLoggedIn,
      principal : principal,
      selectedItem: 'home',
      currentScreen: <HomeComponent isLoggedIn={isLoggedIn} principal={principal} />
    });
  }

  recuperaLinks(isLoggedIn) {

    let links = [];
    let link;
    //links.push(<li key="home" role="presentation" className="active"><a onClick={(e) => this.handleClick(e, <HomeComponent isLoggedIn={this.state.isLoggedIn} />)} href="#"><strong>HOME</strong></a></li>);
    links.push(<HomeMenuComponent key="home" handleClick={this.handleMenuItemClick} isLoggedIn={this.state.isLoggedIn} selectedItem={this.state.selectedItem} principal={this.state.principal}/>);

    if (isLoggedIn) {

      links.push(<OutroMenuComponent key="outro" handleClick={this.handleMenuItemClick} selectedItem={this.state.selectedItem}/>);
      /*link = <li key="outro" role="presentation">
        <a href="#" onClick={(e) => this.handleClick(e, <OutroComponent />)}>
          <strong>OUTRO</strong>
        </a>
      </li>;*/
      links.push(link);

      link = <LogoutComponent key="logout" handleClick={this.handleIsLoggedInChange} />;
      links.push(link);

    } else {
      links.push(<LoginMenuComponent key="login" handleIsLoggedInChange={this.handleIsLoggedInChange} handleClick={this.handleMenuItemClick} selectedItem={this.state.selectedItem} />);
      /*let link = <li key="login" role="presentation">
        <a href="#" onClick={(e) => this.handleClick(e, <LoginComponent handleIsLoggedInChange={this.handleIsLoggedInChange} />)}>
          <strong>LOGIN</strong>
        </a>
      </li>;*/
      links.push(link);
    }

    return links;
  }

  render() {

    <div>
      {this.state.currentPath === 'home' && <HomeComponent />}
      {this.state.currentPath === 'login' && <LoginComponent />}
      {/*<Route path="home" current={this.state.currentPath}>
        <HomeComponent />
      </Route>
      <Route path="login" current={this.state.currentPath}>
        <LoginComponent />
      </Route>*/}
    </div>

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
