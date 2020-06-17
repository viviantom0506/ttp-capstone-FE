import React from "react";

const SingleAnimePageView = (props) => {
  console.log("singAPV --", props.animeData.attributes.slug);
  const anime = props.animeData;
  return (
    <div>
      <img src={props.animeData.attributes.posterImage.small}></img>
      <h1>{props.animeData.attributes.slug}</h1>
      <p>{props.animeData.attributes.synopsis}</p>
    </div>
  );
};

export default SingleAnimePageView;
