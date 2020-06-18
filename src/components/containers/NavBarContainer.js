import React, { Component } from "react";
import { searchAnimeThunk } from "../../thunks";
import NavBarView from "../views/NavBarView.js";
import { connect } from "react-redux";

class NavBarContainer extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
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
    event.preventDefault();
    console.log(this.state.keyword);
    this.props.searchAnime(this.state.keyword);
  };

  render() {
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
