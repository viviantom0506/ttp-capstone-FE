import React from "react";
import "./styling.css";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const AnimePageView = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-around m-3">
      {props.animeList.map((anime) => (
        <div className="anime-cells p-1">
          <Link to={`/${anime.id}`}>
            <Image
              className="anime-image"
              src={anime.attributes.posterImage.small}
              alt={anime.attributes.slug}
              onClick={() => props.handlePage(anime.id)}
              rounded
              fluid
            />
          </Link>
          <p>{anime.attributes.titles.en_jp}</p>
        </div>
      ))}
    </div>
  );
};

export default AnimePageView;
