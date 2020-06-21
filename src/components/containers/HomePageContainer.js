import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePageView from '../views/HomePageView';
import { fetchTrendingThunk, fetchSingleAnimeThunk } from '../../thunks';
import PropTypes from 'prop-types';

class HomePageContainer extends Component {
	componentDidMount() {
		this.props.fetchTrending();
	}

	handlePage = id => {
		this.props.fetchSingleAnime(id);
	};

	render() {
		return this.props.trendingAnime ? (
			<HomePageView
				trendingAnime={this.props.trendingAnime}
				handlePage={this.handlePage}
			/>
		) : null;
	}
}

const mapState = state => {
	return {
		trendingAnime: state.homepage.data,
	};
};

const mapDispatch = dispatch => {
	return {
		fetchTrending: () => dispatch(fetchTrendingThunk()),
		fetchSingleAnime: id => dispatch(fetchSingleAnimeThunk(id)),
	};
};

HomePageContainer.propTypes = {
	trendingAnime: PropTypes.array.isRequired,
	fetchTrending: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(HomePageContainer);
