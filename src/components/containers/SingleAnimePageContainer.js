import React, { Component } from "react";
import { connect } from "react-redux";
import SingleAnimePageView from "../views/SingleAnimePageView";
import { fetchSingleAnimeThunk } from "../../thunks";
import NavBarContainer from "../containers/NavBarContainer";

export class SingleAnimePageContainer extends Component {
  state = {
    animeId: 0,
  };
  //   handleSearch = (id) => {
  //     this.props.fetchSingleAnime(id);
  //     this.setState({ animeId: id });
  //   };

  componentDidMount() {
    this.props.fetchSingleAnime(this.props.match.params.id);
  }

  render() {
    console.log("from singleAPC render", this.props.anime);

    return !this.props.anime ? null : (
      <div>
        <SingleAnimePageView animeData={this.props.anime} />
      </div>
    );
  }
}

const mapState = (state) => {
  console.log("from single anime Page container", state.singleAnime.data);
  return {
    anime: state.singleAnime.data,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchSingleAnime: (id) => dispatch(fetchSingleAnimeThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleAnimePageContainer);
