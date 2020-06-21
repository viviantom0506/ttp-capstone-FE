import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleAnimePageView from '../views/SingleAnimePageView';
import {
	fetchSingleAnimeThunk,
	addToFavoritesThunk,
	getUserAndAnimesThunk,
} from '../../thunks';

export class SingleAnimePageContainer extends Component {
	state = {
		animeId: 0,
	};

	componentDidMount() {
		this.props.fetchSingleAnime(this.props.match.params.id);
	}

	handleClick = () => {
		//thunk here
		this.props.getUserAndAnimes(this.props.userId);
		const favoriteAnime = {
			kitsuId: this.props.anime.id,
			name: this.props.anime.attributes.slug,
			poster: this.props.anime.attributes.posterImage.small,
		};
		this.props.addToFavorites(
			favoriteAnime,
			this.props.anime.id,
			this.props.userId,
		);
		alert('Added to favorites');
	};

	render() {
		return !this.props.anime ? null : (
			<div>
				<SingleAnimePageView
					animeData={this.props.anime}
					handleClick={this.handleClick}
				/>
			</div>
		);
	}
}

const mapState = state => {
	return {
		anime: state.singleAnime.data,
		userId: state.user.id,
	};
};

const mapDispatch = dispatch => {
	return {
		fetchSingleAnime: id => dispatch(fetchSingleAnimeThunk(id)),
		addToFavorites: (anime, animeId, userId) =>
			dispatch(addToFavoritesThunk(anime, animeId, userId)),
		getUserAndAnimes: userId => dispatch(getUserAndAnimesThunk(userId)),
	};
};

export default connect(mapState, mapDispatch)(SingleAnimePageContainer);
