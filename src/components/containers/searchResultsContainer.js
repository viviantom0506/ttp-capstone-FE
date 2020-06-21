import React, { Component } from 'react';
import SearchResultsView from '../views/SearchResultsView';
import { connect } from 'react-redux';
export class SearchResultsContainer extends Component {
	render() {
		return (
			<div>
				<SearchResultsView
					results={this.props.results}
					// keyword={this.props.location.state.keyword}
				/>
			</div>
		);
	}
}

const mapState = state => {
	return {
		results: state.search.data,
	};
};
export default connect(mapState)(SearchResultsContainer);
