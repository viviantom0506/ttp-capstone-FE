import React, { Component } from "react";
import { connect } from "react-redux";
import AnimeSearchView from "../views/AnimeSearchView";
import { fetchAnimeSearchThunk } from "../../thunks";
import NavBarContainer from "../containers/NavBarContainer";


export class AnimeSearchContainer extends Component {
    state = {
        keyword: "",
    };

    componentDidMount() {
        this.props.fetchAnimeSearch();
    };

    onChange = (slug) => {
        this.setState({keyword: slug.target.value})
        
        this.props.fetchAnimeSearch(this.state.keyword)
        console.log(slug)
    };

    onSubmit = (event) => {
        event.preventDefault();
        console.log(event);

        
    }
   
    render() {
        console.log("from search cont")
        return this.props.animeSearch ? (
            <NavBarContainer animeSearch={this.props.animeSearch}
            onChange={this.onChange} onSubmit={this.onSubmit} value={this.state.keyword}/>
        ) : null;
        

    }
    }

    const mapState = (state) => {
        console.log(state);
        return {
            animeSearch: state.animeSearch.data,
        };
    };

    const mapDispatch = (dispatch) => {
        return {
            fetchAnimeSearch: (slug) => dispatch(fetchAnimeSearchThunk(slug)),

        };
    };

    export default connect(mapState, mapDispatch)(AnimeSearchContainer);
