import React, { Component } from "react";
import { searchAnimeThunk } from "../../thunks";
import NavBarView from "../views/NavBarView.js";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class NavBarContainer extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
      returnResults: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.searchAnime(this.state.keyword);
  }
  handleChange = (event) => {
    this.setState({
      keyword: event.target.value,
    });
    console.log(this.state.keyword);
  };

  handleSubmit = (event) => {
    console.log(this.state.keyword);
    this.setState({ returnResults: true });
    this.props.searchAnime(this.state.keyword);
  };

  render() {
    console.log("props.results => ", this.props.results);
    if (this.state.returnResults === true) {
      this.setState({ returnResults: false });
      return (
        <Redirect
          to={{
            pathname: `/results/${this.state.keyword}`,
            search: "?utm=your+face",
            state: {
              results: this.props.results,
              keyword: this.props.keyword,
            },
          }}
        />
      );
    }

    return (
      <NavBarView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapState = (state) => {
  console.log("from the navbar Container for search====>", state.search.data);
  return {
    results: state.search.data,
  };
};

const mapDispatch = (dispatch) => {
  return {
    searchAnime: (searchTerm) => dispatch(searchAnimeThunk(searchTerm)),
  };
};

export default connect(mapState, mapDispatch)(NavBarContainer);
