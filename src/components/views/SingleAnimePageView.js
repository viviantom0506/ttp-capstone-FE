import React, { useState } from "react";
import { Button, Modal, Container } from "react-bootstrap";

const SingleAnimePageView = (props) => {
  console.log("singAPV --", props.animeData.attributes.slug);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const title = props.animeData.attributes.titles.en
    ? props.animeData.attributes.titles.en
    : props.animeData.attributes.titles.en_jp;
  const ytLink = `https://www.youtube.com/embed/${props.animeData.attributes.youtubeVideoId}`;

  return (
    <Container>
      <img src={props.animeData.attributes.posterImage.small}></img>
      <h1>{title}</h1>
      <p>
        <b>Episodes:</b> {props.animeData.attributes.episodeCount}
      </p>

      <p>{props.animeData.attributes.synopsis}</p>

      {/* modal controls the modal in the single page view, shows youtube video and title */}
      <Button variant="dark" onClick={handleShow}>
        Watch Trailer
      </Button>

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
    </Container>
  );
};

export default SingleAnimePageView;
