import React, { Component } from "react";
import SearchResultsView from "../views/SearchResultsView";
import { connect } from "react-redux";
import { searchAnimeThunk } from "../../thunks";
export class SearchResultsContainer extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
    };
  }

  handleNext = () => {
    const newPage = this.state.page + 18;
    this.setState({ page: newPage });
    this.props.searchAnime(this.props.location.state.keyword, newPage);
  };

  handlePrev = () => {
    const newPage = this.state.page - 18;
    return this.state.page == 0
      ? this.state
      : (this.setState({ page: newPage }),
        this.props.searchAnime(this.props.location.state.keyword, newPage));
  };

  render() {
    return (
      <div>
        <SearchResultsView
          results={this.props.results}
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
        {console.log(this.props.location.state.keyword)}
      </div>
    );
  }
}

const mapState = (state) => {
  console.log("Hellofrom SRC", state);
  return {
    results: state.search.data,
  };
};

const mapDispatch = (dispatch) => {
  return {
    searchAnime: (keyword, page) => dispatch(searchAnimeThunk((keyword, page))),
  };
};

export default connect(mapState, mapDispatch)(SearchResultsContainer);
