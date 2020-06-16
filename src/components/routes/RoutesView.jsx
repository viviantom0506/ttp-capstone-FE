import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { HomePageContainer } from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      {/* <Route exact path="/users/:id" component={} /> */}
      {/* <Route exact path="/:id" component={} /> */}
    </Switch>
  );
};

export default RoutesView;
