import React, { Component } from "react";
import { connect } from "react-redux";
import AnimePageView from "../views/AnimePageView";
import "./animepage.css";
import { fetchAnimeListThunk } from "../../thunks";
import PropTypes from "prop-types";

class AnimePageContainer extends Component {
  componentDidMount() {
    this.props.fetchAnime();
  }

  render() {
    console.log("before return but im in render");
    return this.props.animeList ? (
      <AnimePageView animeList={this.props.animeList} />
    ) : null;
    // < AnimePageView animeList={this.props.animeList, console.log("HELLO FROM ANIME pg cont",this.props.animeList)} />
  }
}

const mapState = (state) => {
  console.log(state);
  return {
    animeList: state.animepage.data,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchAnime: () => dispatch(fetchAnimeListThunk()),
  };
};

AnimePageContainer.propTypes = {
  animeList: PropTypes.array.isRequired,
  fetchAnime: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(AnimePageContainer);
