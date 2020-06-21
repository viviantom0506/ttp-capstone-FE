import React, { Component } from "react";
import UsersPageView from "../views/UsersPageView";
import { connect } from "react-redux";
import { me, fetchAnimeListThunk, getUserAndAnimesThunk } from "../../thunks";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class UsersPageContainer extends Component {
  componentDidMount(props) {
    console.log("users page container mounted");
    this.props.loadInitialData(this.props.match.params.id);
    this.props.fetchAnimeId();
  }
  render() {
    //this.props.getUserAndAnimes(this.props.match.params.id);
    // let finalUsersAnime;
    console.log(this.props.AllAnime);
    if (!this.props.allAnime) {
      return null;
    } else {
      //this.props.anime.filter(anime => {this.props.user.animeList.find(anime.id)})
      console.log(this.props.allAnime);
      // console.log(this.props.user.animeList);
      //   const currentUser = this.props.user;

      // finalUsersAnime = this.props.allAnime.filter(anime => currentUser.animeList.find(userListAnime => anime.id == userListAnime));
      // const finalUsersAnime = this.props.allAnime.filter(anime => this.props.user.animeList.includes(anime.id));
      //console.log(finalUsersAnime)
      //console.log(this.props.anime.filter(anime => {this.props.user.animeList.find(anime.id)}))
    }
    const paramsId = this.props.match.params.id;
    console.log(paramsId);
    console.log(this.props.user);
    if (paramsId == this.props.user.id) {
      //if the user is logged in and the profile is unreachable, use (==) not (===)
      console.log("yes they match");
      return <UsersPageView id={paramsId} user={this.props.user} />;
    } else if (this.props.user.id) {
      console.log("nope");
      return <h1>You don't have access to this page</h1>;
    } else {
      return (
        <>
          <h1>You are not logged in.</h1>
          <Link to="/login">
            <Button className="btn btn-dark">Login</Button>
          </Link>
          <Link to="/signup">
            <Button className="btn btn-alert">Signup</Button>
          </Link>
        </>
      );
    }
  }
}

const mapState = (state, ownProps) => {
  console.log(ownProps);
  console.log(state);
  console.log(state.animepage.data);

  return {
    // state: state,
    user: state.user,
    params: ownProps.match.params,
    allAnime: state.animepage.data,

    // cookies: ownProps.cookies
  };
};
const mapDispatch = (dispatch) => {
  return {
    loadInitialData: (userId) => dispatch(me(userId)),
    fetchAnimeId: () => dispatch(fetchAnimeListThunk()),
    getUserAndAnimes: (userId) => dispatch(getUserAndAnimesThunk(userId)),
  };
};

export default connect(mapState, mapDispatch)(UsersPageContainer);
