import React from "react";
import { Route } from "react-router-dom";

function UsersPageView(props) {
  return (
    <div>
      <h1>User {props.user.id}'s Page</h1>
      <h1>{props.user.email}</h1>
    </div>
  );
}

export default UsersPageView;
