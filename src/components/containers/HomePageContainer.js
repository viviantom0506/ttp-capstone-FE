import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePageView from '../views/HomePageView';
import { fetchTrendingThunk } from '../../thunks';
import PropTypes from 'prop-types';

class HomePageContainer extends Component {
  componentDidMount() {
    this.props.fetchTrending();
  }

  render() {
    console.log("from HP container ", this.props.trendingAnime);
    return this.props.trendingAnime ? (
      <HomePageView trendingAnime={this.props.trendingAnime} />
    ) : null;
  }
}

const mapState = (state) => {
  console.log(state);
  return {
    trendingAnime: state.homepage.data,
  };
};

const mapDispatch = dispatch => {
  return {
    fetchTrending: () => dispatch(fetchTrendingThunk())
  };
};

HomePageContainer.propTypes = {
  trendingAnime: PropTypes.array.isRequired,
  fetchTrending: PropTypes.func.isRequired
};

export default connect(mapState, mapDispatch)(HomePageContainer);
