import React, { useState } from 'react';
import './styling.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import { Carousel } from "react-responsive-carousel";
import AnimePageContainer from '../containers/AnimePageContainer';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CategoriesContainer from '../containers/categoriesContainer';
import './styling.css';
const HomePageView = props => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<div>
			<Carousel activeIndex={index} onSelect={handleSelect}>
				{props.trendingAnime.map((
					anime,
					index, //add key //<a scr = "/:id"><img></a>
				) => (
					<Carousel.Item>
						<img
							src={anime.attributes.coverImage.large}
							alt={anime.attributes.titles.en_jp}
							className="trendingAnime"
						></img>
						<Carousel.Caption className="text-light">
							<Link
								to={`/${anime.id}`}
								style={{ textDecoration: 'none', color: 'white' }}
							>
								<div className="carText">
									<h4
										className="legend"
										onClick={() => props.handlePage(anime.id)}
									>
										{anime.attributes.titles.en_jp}
									</h4>
								</div>
							</Link>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
			<CategoriesContainer />

			<div className="popAnimeTag">
				<img
					src="https://66.media.tumblr.com/efb3a6fc5a0e76829798bdb3d735ecf5/tumblr_mrnj0g6qza1rfjowdo1_500.gif"
					alt="pikachu gif"
				/>
				<h1>Popluar Anime</h1>
			</div>
			<AnimePageContainer />
		</div>
	);
};

// HomePageView.propTypes = {
//   trendingAnime: PropTypes.array.isRequired,
// };

export default HomePageView;
