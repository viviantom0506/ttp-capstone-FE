import React from "react";
import PropTypes from "prop-types";

const HomePageView = (props) => {
  return (
    <div>
      {console.log("views ", typeof props.trendingAnime)}
      <h1>{props.trendingAnime[0].attributes.slug}</h1>
    </div>
  );
};

// HomePageView.propTypes = {
//   trendingAnime: PropTypes.array.isRequired,
// };

export default HomePageView;
