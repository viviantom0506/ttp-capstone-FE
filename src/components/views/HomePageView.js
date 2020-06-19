import React, { useState } from "react";
import "./HomePage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from "react-responsive-carousel";
import AnimePageContainer from "../containers/AnimePageContainer";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoriesContainer from "../containers/categoriesContainer";

const HomePageView = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      {console.log("views ", typeof props.trendingAnime)}
      <div>
        <h1>Trending Anime</h1>
      </div>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        {props.trendingAnime.map((
          anime,
          index //add key //<a scr = "/:id"><img></a>
        ) => (
          <Carousel.Item>
            <img
              src={anime.attributes.coverImage.large}
              alt={anime.attributes.titles.en_jp}
              className="trendingAnime"
            ></img>
            <Carousel.Caption className=" text-light bg-dark">
              <Link
                to={`/${anime.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <h5
                  className="legend"
                  onClick={() => props.handlePage(anime.id)}
                >
                  {anime.attributes.titles.en_jp}
                </h5>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <CategoriesContainer />
      <div className="popAnimeTag">
        <h1>Most Popular Anime</h1>
      </div>
      <AnimePageContainer />
    </div>
  );
};

// HomePageView.propTypes = {
//   trendingAnime: PropTypes.array.isRequired,
// };

export default HomePageView;
