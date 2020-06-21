import React from "react";
import AnimeCategoriesPageView from "../views/AnimeCategoriesPageView";
import { connect } from "react-redux";

const AnimeCategoriesPageContainer = (props) => {
  return (
    <div cl>
      <div className="catPageHeader">
        <img
          src="https://media0.giphy.com/media/Q7pDtp0bIvJFgRsHHN/source.gif"
          alt="nezuko gif"
        />
        <h1> Top matches for: {props.match.params.categories}</h1>
      </div>
      {console.log("Magic Tavern Cat", props.animeCat)}
      <AnimeCategoriesPageView anime={props.animeCat} />
    </div>
  );
};
const mapState = (state) => {
  console.log("Hello from the magic tavern =>", state.categoriespage.data);
  return {
    animeCat: state.categoriespage.data,
  };
};
export default connect(mapState)(AnimeCategoriesPageContainer);
