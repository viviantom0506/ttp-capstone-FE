import React from "react";

import { Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styling.css";

const SearchResultsView = (props) => {
  return (
    <div>
      <div className="searchHead">
        <img src="https://rs1231.pbsrc.com/albums/ee503/adrian66645/Combate%20Mortal%20Total%20Album/naruto_standing1.gif~c200" />
        <h1>Top Results</h1>
      </div>

      <div className="d-flex flex-wrap justify-content-around">
        {props.results
          ? props.results.map((anime) => (
              <div className="anime-cells">
                <Link to={`/${anime.id}`}>
                  <Image
                    className="anime-image"
                    src={anime.attributes.posterImage.medium}
                    alt={anime.attributes.slug}
                    rounded
                    fluid
                  />
                </Link>
                <p>
                  {anime.attributes.titles.en
                    ? anime.attributes.titles.en
                    : anime.attributes.slug}
                </p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default SearchResultsView;
