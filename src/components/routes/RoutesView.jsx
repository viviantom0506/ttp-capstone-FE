import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  HomePageContainer,
  UsersPageContainer,
  SingleAnimePageContainer,
  SearchResultsContainer,
  Login,
  Signup
} from '../containers';

const RoutesView = props => {
  const { isLoggedIn } = props;

  return (
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/results/:term" component={SearchResultsContainer} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      {isLoggedIn && (
        <Switch>
          {/* Routes placed within this section are only available after
          logging in */}
          <Route exact path="/users/:id" component={UsersPageContainer} />
        </Switch>
      )}
      {/* Displays our Login component as a fallback */}
      <Route exact path="/:id" component={SingleAnimePageContainer} />
      <Route component={Login} />
    </Switch>
  );
};

export default RoutesView;
