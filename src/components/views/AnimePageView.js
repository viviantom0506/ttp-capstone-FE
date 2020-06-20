import React from 'react';
import './animestyle.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const AnimePageView = props => {
	return (
		<div className="d-flex flex-wrap justify-content-around">
			{props.animeList.map(anime => (
				<div className="img-fluid p-5 ">
					<Link to={`/${anime.id}`}>
						<Image
							src={anime.attributes.posterImage.small}
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
