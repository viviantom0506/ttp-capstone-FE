import React, { Component } from "react";
import { connect } from "react-redux";
import HomePageView from "../views/HomePageView";

class HomePageContainer extends Component {
  render() {
    return <HomePageView />;
  }
}

export default HomePageContainer;
