import React, { Component } from "react";
import { connect } from "react-redux";
import HomePageView from "../views/HomePageView";
import { fetchTrendingThunk } from "../../thunks";

class HomePageContainer extends Component {
  render() {
    return <HomePageView />;
  }
}

export default HomePageContainer;
