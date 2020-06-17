import React from 'react';
import './animestyle.css';
import { Link } from 'react-router-dom';
const AnimePageView = props => {
    // onSearch = (slug) => {
    //     this.props.fetchAnimeSearch(slug);
    //     console.log(slug)
    // };
	return (
		<div className="animeflex">
			{props.animeSearch.map(anime => (
				<div>
					{/* <Link to={`/${anime.}`}> */}
						<img
							src={anime.attributes.posterImage.medium}
							alt={anime.attributes.slug}
						/>
					{/* </Link> */}
					<h4>{anime.attributes.titles.en_jp}</h4>
				</div>
			))}
    </div> 
	);
};
 
export default AnimePageView;