import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
import './styling.css';

function UsersPageView(props) {
	return (
		<>
			<div>
				<div>
					<img
						src="https://100filmsinayear.files.wordpress.com/2011/08/my-neighbour-totoro-banner.jpg"
						className="img-fluid profileImg"
						// style={{ width: 1500, height: "auto" }}
						alt="profile banner totoro"
					/>
					<div className="email">
						<h1>{props.user.email}'s profile</h1>
					</div>
				</div>

				<Accordion defaultActiveKey="1">
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
								Favorites
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								{!props.user.animes
									? null
									: props.user.animes.map(anime => {
											return (
												<div className="d-flex flex-row align-items-center favItem">
													<img
														className="faveImg"
														src={anime.poster}
														alt={anime.name}
													/>

													<h1 className="animeName">{anime.name}</h1>
												</div>
											);
									  })}
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</div>
		</>
	);
}

export default UsersPageView;
