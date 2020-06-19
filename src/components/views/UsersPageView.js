import React from "react";
import { Route } from "react-router-dom";

function UsersPageView(props) {
  console.log(props.favorites);
  return (
    <div>
      <h1>User {props.user.id}'s Page</h1>
      <h1>{props.user.email}</h1>
      {props.favorites.map(anime => {
        return <h1>{anime.attributes.slug}</h1>
      })}
    </div>
  );
}

export default UsersPageView;
