import React from "react";

const AnimePageView = (props) => {
  return (
    <div>
      <h1>Naruto</h1>
    
    {props.animeList.map((anime,
      )=> (
        <h5>{anime.attributes.titles.en}</h5>
      ))}
      </div>
  );
}

export default AnimePageView;
