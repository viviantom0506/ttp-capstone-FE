import React from "react";
import { Route } from "react-router-dom";

function UsersPageView(props) {
  console.log("USERPAGE VIEW USER", props.user);
  return (
    <div>
      <h1>User {props.user.id}'s Page</h1>
      <h1>{props.user.email}</h1>
      {props.user.animes.map(anime => {
        return <h1>{anime.name}</h1> 
     })}
    </div>
  );
}

export default UsersPageView;
