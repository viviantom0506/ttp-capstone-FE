import React, { Component } from 'react';
import { searchAnimeThunk, logout } from '../../thunks';
import NavBarView from '../views/NavBarView.js';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
		console.log(this.state.keyword);
	};

	handleSubmit = event => {
		console.log(this.state.keyword);

		this.props.searchAnime(this.state.keyword);
		this.setState({ returnResults: true });
	};

	handleLogout = () => {
		console.log('HELHLALNLDLLE LOG');
		this.props.logout();
		this.props.history.push('/');
	};
	//

	// componentDidUpdate(prevProps) {
	// 	if (this.state.user != prevProps.user) {
	// 		console.log('NOT THE SAMEEEEEE');
	// 		console.log(prevProps.user);
	// 		console.log(this.state.user);
	// 	}
	// }
	render() {
		const word = this.state.keyword;
		console.log('props.results => ', this.props.results);
		if (this.state.returnResults === true) {
			this.setState({ returnResults: false });
			return (
				<Redirect
					to={{
						pathname: `/results/${word}`,
						search: '?utm=your+face',
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
	console.log('from the navbar Container for search====>', state.search.data);
	console.log('NAVBAR CONTAINER STATE: ', state);
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

export default connect(mapState, mapDispatch)(NavBarContainer);
