import React, { Component } from 'react';
import { searchAnimeThunk, logout } from '../../thunks';
import NavBarView from '../views/NavBarView.js';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

class NavBarContainer extends Component {
	constructor() {
		super();
		this.state = {
			keyword: '',
			returnResults: false,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		//this.props.searchAnime(this.state.keyword);
	}
	handleChange = event => {
		this.setState({
			keyword: event.target.value,
		});
	};

	handleSubmit = event => {
		this.props.searchAnime(this.state.keyword);
		this.setState({ returnResults: true });
	};

	handleLogout = () => {
		this.props.logout();
		this.props.history.push('/');
	};
	//

	render() {
		const word = this.state.keyword;

		if (this.state.returnResults === true) {
			this.setState({ returnResults: false });
			return (
				<Redirect
					to={{
						pathname: `/results/${word}`,
						search: '?utm=your+face',
						state: { keyword: this.state.keyword },
					}}
				/>
			);
		}

		return (
			<>
				<NavBarView
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					user={this.props.user}
					handleLogout={this.handleLogout}
				/>
			</>
		);
	}
}

const mapState = state => {
	return {
		results: state.search.data,
		user: state.user,
	};
};

const mapDispatch = dispatch => {
	return {
		searchAnime: searchTerm => dispatch(searchAnimeThunk(searchTerm)),
		logout: () => dispatch(logout()),
	};
};

export default withRouter(connect(mapState, mapDispatch)(NavBarContainer));
