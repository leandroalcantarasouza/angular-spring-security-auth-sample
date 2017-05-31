import React, { Component } from 'react';
import HomeComponent from '../HomeComponent/HomeComponent';

class HomeMenuComponent extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault()
    this.props.handleClick(<HomeComponent isLoggedIn={this.props.isLoggedIn}/>, "home");
  }

  render() {

    let selected = "home" === this.props.selectedItem ? "active" : "";

    return (
      <li role="presentation" className={selected}><a onClick={this.handleClick} href="#"><strong>HOME</strong></a></li>
    );
  }
}

export default HomeMenuComponent;
