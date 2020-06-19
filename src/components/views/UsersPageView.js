import React from "react";
import { Route } from "react-router-dom";

function UsersPageView(props) {
  return (
    <div>
      <h1>User {props.id}'s Page</h1>
    </div>
  );
}

export default UsersPageView;
