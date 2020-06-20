import React from 'react';
import './AnimePage.css';
import { Link } from 'react-router-dom';

const AnimeCategoriesPageView = props => {
	{
		console.log(props.anime);
	}
	return (
		<div className="d-flex flex-wrap justify-content-around">
			<h1></h1>
			{props.anime.map(animeCategories => (
				<div className="anime-cell">
					<img
						className="anime-image"
						src={animeCategories.attributes.posterImage.small}
						alt={animeCategories.attributes.slug}
					/>
					<h4>{animeCategories.attributes.titles.en_jp}</h4>
				</div>
			))}
		</div>
	);
};

export default AnimeCategoriesPageView;
