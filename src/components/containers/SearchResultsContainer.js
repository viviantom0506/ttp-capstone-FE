import React, { Component } from "react";
import SearchResultsView from "../views/SearchResultsView";
export class SearchResultsContainer extends Component {
  render() {
    return (
      <div>
        <SearchResultsView
          results={this.props.location.state.results}
          keyword={this.props.location.state.keyword}
        />
      </div>
    );
  }
}

export default SearchResultsContainer;
