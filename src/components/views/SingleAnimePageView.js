import React, { useState } from 'react';
import { Button, Modal, Container, Media } from 'react-bootstrap';
import './SingleAnime.css';
import { tsPropertySignature } from '@babel/types';

const SingleAnimePageView = props => {
	console.log('singAPV --', props.animeData.attributes.slug);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const title = props.animeData.attributes.titles.en
		? props.animeData.attributes.titles.en
		: props.animeData.attributes.titles.en_jp;
	const ytLink = `https://www.youtube.com/embed/${props.animeData.attributes.youtubeVideoId}`;

	// const anime = props.animeData;
	return props.animeData ? (
		<>
			{props.animeData.attributes.coverImage ? (
				<img
					className="img-fluid"
					src={props.animeData.attributes.coverImage.large}
				/>
			) : (
				<img
					className="img-fluid"
					src="https://animemastersub.files.wordpress.com/2014/02/cropped-anime-mix-hd-wallpaper1.jpg"
				/>
			)}
			{/* 
			<img
				className="singleImage"
				src={props.animeData.attributes.posterImage.small}
			></img> */}
			{/* <Media>
				<img
					width={64}
					height={64}
					className="mr-3"
					src="holder.js/64x64"
					alt="Generic placeholder"
				/>
				<Media.Body>
					<h5>Media Heading</h5>
					<p>
						Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
						scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
						in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
						nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
					</p>
				</Media.Body>
	  </Media> */}
			<div className="card-parent">
				<div className="card-single card" style={{ width: 1000 }}>
					<img
						// className="singleImage"
						className="card-img-top"
						src={props.animeData.attributes.posterImage.small}
						style={{ width: 300 }}
					></img>
					<div className="card-body">
						{' '}
						<h1 className="card-title">{title}</h1>
						<p>
							<b>Episodes:</b> {props.animeData.attributes.episodeCount}
						</p>
						<p className="card-text">{props.animeData.attributes.synopsis}</p>
						<Button onClick={props.handleClick}>Add to favorites</Button>
						{props.animeData.attributes.youtubeVideoId ? (
							<Button variant="dark" onClick={handleShow}>
								Watch Trailer
							</Button>
						) : null}
						<Modal show={show} onHide={handleClose}>
							<Modal.Header closeButton>
								<Modal.Title>{title}</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<iframe
									width="450"
									height="320"
									src={ytLink}
									frameborder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								></iframe>
							</Modal.Body>
							<Modal.Footer>
								<Button variant="dark" onClick={handleClose}>
									Close
								</Button>
							</Modal.Footer>
						</Modal>
					</div>

					{/* modal controls the modal in the single page view, shows youtube video and title */}
				</div>
			</div>
		</>
	) : (
		<h1>anime not found</h1>
	);
};

export default SingleAnimePageView;
