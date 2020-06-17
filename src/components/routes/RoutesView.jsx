import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,
  UsersPageContainer,
  SingleAnimePageContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/:id" component={SingleAnimePageContainer} />
      <Route exact path="/users/:id" component={UsersPageContainer} />
    </Switch>
  );
};

export default RoutesView;
