import React, { Component } from "react";
import { connect } from  "react-redux";
import CategoriesView from "../views/CategoriesView";
import AnimeCategoriesPageView from "../views/AnimeCategoriesPageView";
import "./animepage.css";
import { fetchAnimeByCategoriesThunk, fetchSingleAnimeThunk } from "../../thunks";
import { Redirect } from "react-router-dom";

class CategoriesContainer extends Component {
    // componentDidMount() {
    //     this.props.fetchAnimeByCategories();
    // }
    constructor() {
        super();
        this.state ={
            toggle: false,
            categories: ""
        }
    }

    handleClick = (categories) => {
        this.props.fetchAnimeByCategories(categories);
        console.log(categories);
        this.setState({categories: categories});
        this.setState({toggle: true})
    };

    // handlePage =(id) => {
    //     this.props.fetchSingleAnime(id);
    //     console.log(id);
    // }

    render() {
        console.log("before return but im in render");
        if (this.state.toggle === true) {
            console.log(this.props.animeCategoriesList)
            return (<Redirect to={{pathname:`/categories/${this.state.categories}`, 
                                    search: "?utm=your+face", 
                                    state: {
                                        categories: this.props.animeCategoriesList
                                    }}}/>)
        }
        return <CategoriesView 
            //  animeCategoriesList={this.props.animeCategoriesList}
              handleClick={this.handleClick}
            />;
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
        fetchAnimeByCategories: (categories) => dispatch(fetchAnimeByCategoriesThunk(categories)),
    };
};

export default connect(mapState, mapDispatch)(CategoriesContainer);