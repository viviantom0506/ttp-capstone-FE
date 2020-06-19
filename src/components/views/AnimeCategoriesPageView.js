import React from "react";
import "./animestyle.css";
import { Link } from "react-router-dom";

const AnimeCategoriesPageView = (props) => {
    {console.log(props.anime)}
    return (
        <div className="animeflex">
            {props.anime.map((animeCategories) => (
                <div>
                    <img
                     src={animeCategories.attributes.posterImage.medium}
                     alt={animeCategories.attributes.slug}
                    />
                    <h4>{animeCategories.attributes.titles.en_jp}</h4>
                </div>
            ))}
        </div>
    );
};

export default AnimeCategoriesPageView