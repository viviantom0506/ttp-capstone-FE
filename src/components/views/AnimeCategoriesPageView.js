import React from "react";
import "./styling.css";
import { Link } from "react-router-dom";
import { Container, Image } from "react-bootstrap";

const AnimeCategoriesPageView = (props) => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-around p-5 m-5">
        {props.anime.map((anime) => (
          <div className="anime-cells">
            <Link to={`/${anime.id}`}>
              <Image
                className="anime-image cat-img"
                src={anime.attributes.posterImage.medium}
                alt={anime.attributes.slug}
                rounded
                fluid
              />
            </Link>
            <p>{anime.attributes.titles.en_jp}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AnimeCategoriesPageView;
