import React from "react";
import NavBarContainer from "../containers/NavBarContainer";
import NavBarView from "../views/NavBarView";
import { Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SearchResults.css";

const SearchResultsView = (props) => {
  return (
    <div>
      <NavBarContainer />
      <h1>Top Results</h1>
      <div className="resultsDivs">
        {props.results.map((anime) => (
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
        ))}
      </div>
    </div>
  );
};

export default SearchResultsView;
