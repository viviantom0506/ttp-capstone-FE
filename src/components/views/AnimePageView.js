import React from "react";
import "./animestyle.css";
import { Container, Row, Col } from "react-bootstrap";
const AnimePageView = (props) => {
  return (
    <div className="animeflex">
      {props.animeList.map((anime) => (
        <div>
          <img src={anime.attributes.posterImage.medium} />
          <h3>{anime.attributes.titles.en_jp}</h3>
        </div>
      ))}
    </div>
  );
};

export default AnimePageView;
