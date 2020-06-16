import React from "react";
import PropTypes from "prop-types";

const HomePageView = (props) => {
  return (
    <div>
      {!props.trendingAnime ? console.log("no trending") : console.log(props)}

      {/* {props.trendingAnime.map((anime) => (
      <h1>{anime.attributes.slug}</h1>
     ))} */}
    </div>
  );
};

HomePageView.propTypes = {
  trendingAnime: PropTypes.array.isRequired,
};

export default HomePageView;
