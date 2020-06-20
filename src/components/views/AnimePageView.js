import React from 'react';
import './animestyle.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const AnimePageView = props => {
	return (
		<div className="d-flex flex-wrap justify-content-around">
			{props.animeList.map(anime => (
				<div className="anime-cells">
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
