import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,
  UsersPageContainer,
  SingleAnimePageContainer,
  SearchResultsContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/:id" component={SingleAnimePageContainer} />
      <Route exact path="/users/:id" component={UsersPageContainer} />
      <Route exact paht="/results/:term" component={SearchResultsContainer} />
    </Switch>
  );
};

export default RoutesView;
