import React, { Component } from 'react';
import OutroComponent from '../OutroComponent/OutroComponent';

class OutroMenuComponent extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault()
    this.props.handleClick("outro");
  }

  render() {

    let selected = "outro" === this.props.selectedItem ? "active" : "";

    return (
      <li role="presentation" className={selected}><a onClick={this.handleClick} href="javascript:void(0)"><strong>OUTRO</strong></a></li>
    );
  }
}

export default OutroMenuComponent;
