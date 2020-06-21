import React, { Component } from "react";
import { connect } from "react-redux";
import CategoriesView from "../views/categoriesView";
import "./animepage.css";
import { fetchAnimeByCategoriesThunk } from "../../thunks";
import { Redirect } from "react-router-dom";

class CategoriesContainer extends Component {
  // componentDidMount() {
  //     this.props.fetchAnimeByCategories();
  // }
  constructor() {
    super();
    this.state = {
      click: false,
      categories: "",
    };
  }

  handleClick = (categories) => {
    this.props.fetchAnimeByCategories(categories);
    console.log(categories);
    this.setState({ categories: categories });
    this.setState({ click: true });
  };

  // handlePage =(id) => {
  //     this.props.fetchSingleAnime(id);
  //     console.log(id);
  // }

  render() {
    console.log("before return but im in render");
    if (this.state.click === true) {
      console.log(this.props.animeCategoriesList);
      return this.props.animeCategoriesList ? (
        <Redirect
          to={{
            pathname: `/categories/${this.state.categories}`,
            search: "?utm=your+face",
            state: {
              categories: this.props.animeCategoriesList,
            },
          }}
        />
      ) : null;
    }
    return (
      <CategoriesView
        //  animeCategoriesList={this.props.animeCategoriesList}
        handleClick={this.handleClick}
      />
    );
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
    fetchAnimeByCategories: (categories) =>
      dispatch(fetchAnimeByCategoriesThunk(categories)),
  };
};

export default connect(mapState, mapDispatch)(CategoriesContainer);
