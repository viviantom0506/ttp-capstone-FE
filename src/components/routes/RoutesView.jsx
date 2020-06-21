import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,
  UsersPageContainer,
  SingleAnimePageContainer,
  SearchResultsContainer,
  Login,
  Signup,
  AnimeCategoriesPageContainer,
} from "../containers";

const RoutesView = (props) => {
  // const [cookies, setCookie] = useCookies(['name']);
  // setCookie('name', 'bLAH', { path: '/' });
  // const { isLoggedIn } = props;
  // console.log(cookies);
  // console.log(cookies.cookies);
  // console.log('from routesview', cookies);

  return (
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/results/:term" component={SearchResultsContainer} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route
        exact
        path="/categories/:categories"
        component={AnimeCategoriesPageContainer}
      />
      <Route exact path="/:id" component={SingleAnimePageContainer} />
      {/* <Route exact path = "/logout" component={Logout}/> */}

      <Route exact path="/users/:id" component={UsersPageContainer} />
      {/* {isLoggedIn && (
				<Switch>
					{/* Routes placed within this section are only available after
          logging in */}
      {/* <Route
            exact
            path="/users/:id"
            render={() => <UsersPageContainer cookies={props.cookies} />}
          /> */}
      {/* <Route
						exact
						path="/users/:id"
						component={UsersPageContainer}
						// cookies={props.cookies}
					/>
				</Switch>
					)} */}
      {/* Displays our Login component as a fallback */}

      {/* <Route exact path="/users/:id" component={UsersPageContainer} /> */}

      {/* <Route component={Login} /> */}
    </Switch>
  );
};

export default RoutesView;
