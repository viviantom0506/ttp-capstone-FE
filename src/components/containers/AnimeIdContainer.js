import React, { Component } from "react";
import { connect } from "react-redux";
import AnimePageView from "../views/AnimePageView";

import {fetchAnimeListThunk} from "../../thunks";
import PropTypes from "prop-types";

class AnimeIdContainer extends Component {
    componentDidMount() {
    this.props.fetchAnime();
    }
  
  
  render() {
    console.log("before return but im in render")
      return this.props.animeList ? (
      <AnimeSinglePageView animeList={this.props.animeList} />
    ) : null;
      // < AnimePageView animeList={this.props.animeList, console.log("HELLO FROM ANIME pg cont",this.props.animeList)} />
     
  }
  
  }

  export default connect(mapState, mapDispatch)(AnimeIdContainer);
