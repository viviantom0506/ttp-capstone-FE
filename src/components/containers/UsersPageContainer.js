import React, { Component } from "react";
import UsersPageView from "../views/UsersPageView";

class UsersPageContainer extends Component {
  render() {
    const paramsId = this.props.match.params.id;
    return <UsersPageView id={paramsId} />;
  }
}

export default UsersPageContainer;
