import React, { Component } from "react";
import { connect } from "react-redux";
import AnimePageView from "../views/AnimePageView";
import "./animepage.css";
import { fetchAnimeListThunk, fetchSingleAnimeThunk } from "../../thunks";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

class AnimePageContainer extends Component {
  componentDidMount() {
    this.props.fetchAnime();
  }

  handlePage = (id) => {
    this.props.fetchSingleAnime(id);
    //<SingleAnimePageContainer id ={id} />
    console.log(id);
  };

  render() {
    console.log("before return but im in render");
    return this.props.animeList ? (
      <AnimePageView
        animeList={this.props.animeList}
        handlePage={this.handlePage}
      />
    ) : (
      <Container>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
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
    fetchSingleAnime: (id) => dispatch(fetchSingleAnimeThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(AnimePageContainer);
