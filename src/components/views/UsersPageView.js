import React from "react";
import NavBarContainer from "../containers/NavBarContainer";
import { Route } from "react-router-dom";

function UsersPageView(props) {
  return (
    <div>
      <NavBarContainer />
      <h1>User {props.id}'s Page</h1>
    </div>
  );
}

export default UsersPageView;
