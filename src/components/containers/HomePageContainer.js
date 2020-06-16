import React, { Component } from "react";
import { connect } from "react-redux";
import HomePageView from "../views/HomePageView";
import { fetchTrendingThunk } from "../../thunks";
import PropTypes from "prop-types";

class HomePageContainer extends Component {
  componentDidMount() {
    this.props.fetchTrending();
  }

  render() {
    return <HomePageView trendingAnime={this.props.trendingAnime} />;
  }
}

const mapState = (state) => {
  return {
    trendingAnime: state.trendingAnime,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchTrending: () => dispatch(fetchTrendingThunk()),
  };
};

HomePageContainer.propTypes = {
  trendingAnime: PropTypes.array.isRequired,
  fetchTrending: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(HomePageContainer);
