import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnimePageView from '../views/AnimePageView';
import './animepage.css';
import { fetchAnimeListThunk, fetchSingleAnimeThunk } from '../../thunks';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

class AnimePageContainer extends Component {
	constructor() {
		super();
		this.state = {
			page: 0,
		};
	}
	componentDidMount() {
		this.props.fetchAnime(this.state.page);
	}

	handlePage = id => {
		this.props.fetchSingleAnime(id);
		//<SingleAnimePageContainer id ={id} />
	};

	handleNext = () => {
		const newPage = this.state.page + 18;
		this.setState({ page: newPage });
		this.props.fetchAnime(newPage);
	};

	handlePrev = () => {
		const newPage = this.state.page - 18;
		return this.state.page === 0
			? this.state
			: (this.setState({ page: newPage }), this.props.fetchAnime(newPage));
	};

	render() {
		return this.props.animeList ? (
			<>
				<AnimePageView
					animeList={this.props.animeList}
					handlePage={this.handlePage}
					next={this.handleNext}
					prev={this.handlePrev}
				/>

				<nav aria-label="Page navigation example">
					<ul class="pagination">
						<li class="page-item">
							<button className="btn btn-dark" onClick={this.handlePrev}>
								Previous
							</button>
						</li>
						<li class="page-item">
							<button className="btn btn-dark" onClick={this.handleNext}>
								Next
							</button>
						</li>
					</ul>
				</nav>
			</>
		) : (
			<Container>
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</Container>
		);
	}
}

const mapState = state => {
	return {
		animeList: state.animepage.data,
	};
};

const mapDispatch = dispatch => {
	return {
		fetchAnime: page => dispatch(fetchAnimeListThunk(page)),
		fetchSingleAnime: id => dispatch(fetchSingleAnimeThunk(id)),
	};
};

export default connect(mapState, mapDispatch)(AnimePageContainer);
