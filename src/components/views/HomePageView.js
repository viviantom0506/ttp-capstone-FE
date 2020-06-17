import React from "react";
import PropTypes from "prop-types";
import "./HomePage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import NavBarContainer from "../containers/NavBarContainer";
import { Container } from "react-bootstrap";

const HomePageView = (props) => {
  return (
    <div>
      {console.log("views ", typeof props.trendingAnime)}
      <div>
        <NavBarContainer />
      </div>
      <Container fluid>
        <Carousel>
          {props.trendingAnime.map((
            anime,
            index //add key //<a scr = "/:id"><img></a>
          ) => (
            <div>
              <img
                src={anime.attributes.coverImage.large}
                alt={anime.attributes.titles.en_jp}
              ></img>
              <h5 className="legend">{anime.attributes.titles.en_jp}</h5>
            </div>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

// HomePageView.propTypes = {
//   trendingAnime: PropTypes.array.isRequired,
// };

export default HomePageView;
