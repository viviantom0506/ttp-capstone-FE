import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,
  UsersPageContainer,
  AnimePageContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/:id" component={AnimePageContainer} />
      <Route exact path="/users/:id" component={UsersPageContainer} />
      </Switch>
  );
};

export default RoutesView;
