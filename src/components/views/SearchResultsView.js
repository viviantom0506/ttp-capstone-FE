import React from "react";

import { Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SearchResults.css";

const SearchResultsView = (props) => {
  return (
    <div>
      <h1>Top Results</h1>
      <div className="resultsDivs">
        {props.results
          ? props.results.map((anime) => (
              <div>
                <Link to={`/${anime.id}`}>
                  <Image
                    src={anime.attributes.posterImage.medium}
                    alt={anime.attributes.slug}
                  />
                </Link>
                <h5>
                  {anime.attributes.titles.en
                    ? anime.attributes.titles.en
                    : anime.attributes.slug}
                </h5>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default SearchResultsView;
