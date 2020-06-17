import React from "react";
import "./animestyle.css";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const AnimePageView = (props) => {
  return (
    <div className="animeflex">
      {props.animeList.map((anime) => (
        <div>
          <Link to={`/${anime.id}`}>
            <Image
              src={anime.attributes.posterImage.medium}
              alt={anime.attributes.slug}
              onClick={() => props.handlePage(anime.id)}
              rounded
            />
          </Link>
          <h4>{anime.attributes.titles.en_jp}</h4>
        </div>
      ))}
    </div>
  );
};

export default AnimePageView;
