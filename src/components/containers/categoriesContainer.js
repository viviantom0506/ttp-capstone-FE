import React, { Component } from "react";
import { connect } from "react-redux";
import CategoriesView from "../views/CategoriesView";
import "./animepage.css";
import { fetchAnimeByCategoriesThunk } from "../../thunks";

class CategoriesContainer extends Component {
  handleClick = (categories) => {
    //this.props.fetchAnimeByCategories(categories);
    alert(categories);
    console.log(categories);
  };
  // componentDidMount() {
  //   this.props.fetchAnimeByCategories();
  // }

  render() {
    console.log("before return but im in render");
    return (
      <CategoriesView
        animeCategoriesList={this.props.animeCategoriesList}
        handleClick={this.handleClick}
      />
    );
    // return this.props.animeCategoriesList ? (
    //     <CategoriesView
    //       animeCategoriesList={this.props.animeCategoriesList}
    //       handleClick={this.handleClick}
    //     />
    // ): null;
  }
}

const mapState = (state) => {
  console.log(state);
  return {
    animeCategoriesList: state.categoriespage.data,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchAnimeByCategories: (id) => dispatch(fetchAnimeByCategoriesThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(CategoriesContainer);
