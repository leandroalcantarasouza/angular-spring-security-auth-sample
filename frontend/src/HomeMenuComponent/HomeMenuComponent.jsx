import React, { Component } from 'react';

class HomeMenuComponent extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault()
    this.props.handleClick("home");
  }

  render() {

    let selected = "home" === this.props.selectedItem ? "active" : "";

    return (
      <li role="presentation" className={selected}><a onClick={this.handleClick} href="javascript:void(0)"><strong>HOME</strong></a></li>
    );
  }
}

export default HomeMenuComponent;
