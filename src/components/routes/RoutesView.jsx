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
import { useCookies } from 'react-cookie';
import { withCookies } from 'react-cookie';

const RoutesView = props => {
  // const [cookies, setCookie] = useCookies(['name']);
  // setCookie('name', 'bLAH', { path: '/' });
  const { isLoggedIn, cookies } = props;
  console.log(cookies);
  console.log(cookies.cookies);
  // console.log('from routesview', cookies);

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
          {/* <Route
            exact
            path="/users/:id"
            render={() => <UsersPageContainer cookies={props.cookies} />}
          /> */}
          <Route
            exact
            path="/users/:id"
            component={UsersPageContainer}
            cookies={props.cookies}
          />
        </Switch>
      )}
      {/* Displays our Login component as a fallback */}
      <Route exact path="/:id" component={SingleAnimePageContainer} />
      <Route component={Login} />
    </Switch>
  );
};

export default withCookies(RoutesView);
