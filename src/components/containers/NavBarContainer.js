import React, { Component } from "react";

import NavBarView from "../views/NavBarView.js";

class NavBarContainer extends Component {
  render() {
    return <NavBarView onChange={this.props.onChange} onClick={this.props.onClick}
     value={this.props.value}
    />;
  }
}

export default NavBarContainer;
