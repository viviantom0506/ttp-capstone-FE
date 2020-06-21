import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './styling.css';

const SingleAnimePageView = props => {
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
					className="img-fluid header-img"
					src={props.animeData.attributes.coverImage.large}
					alt={props.animeData.attributes.slug}
				/>
			) : (
				<img
					className="img-fluid"
					src="https://i.imgur.com/49OiK1s.jpg"
					style={{ width: '100%', marginTop: -24, height: 'auto' }}
					alt={props.animeData.attributes.slug}
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
			<div className="card-parent container-fluid">
				<div className="d-flex flex-row align-items-center card-single card bg-dark text-white singleCard">
					<img
						// className="singleImage"
						className="card-img-top rounded"
						src={props.animeData.attributes.posterImage.medium}
						style={{ width: 300 }}
						alt={props.animeData.attributes.slug}
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
							<Button variant="danger" onClick={handleShow}>
								Watch Trailer
							</Button>
						) : null}
						<div className="container-fluid">
							<Modal show={show} onHide={handleClose}>
								<Modal.Header closeButton>
									<Modal.Title>{title}</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<iframe
										width="450"
										height="300"
										src={ytLink}
										frameborder="0"
										allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
										allowfullscreen
										title="video"
									></iframe>
								</Modal.Body>
								<Modal.Footer>
									<Button variant="dark" onClick={handleClose}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>
						</div>
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
