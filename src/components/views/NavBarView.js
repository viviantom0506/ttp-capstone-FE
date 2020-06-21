import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './styling.css';
const navbarDisplay = props => {
	if (props.user.id) {
		return <Nav.Link onClick={props.handleLogout}>Logout</Nav.Link>;
	} else {
		return (
			<>
				<Nav.Link href="/login">Log In</Nav.Link>
				<Nav.Link href="/signup">Sign Up</Nav.Link>
			</>
		);
	}
	// if (props.user != {} || props.user != undefined) {
	// 	return (
	// 		<Nav.Link href="/" onClick={props.handleLogout}>
	// 			Log Out
	// 		</Nav.Link>
	// 	);
	// } else {
	// 	return (
	// 		<>
	//
	// 		</>
	// 	);
	// }
};

//const randomMonth = months[Math.floor(Math.random() * months.length)]; RANDOM ELEMENT EXAMPLE
const NavBarView = props => {
	const randomAnime = Math.floor(Math.random() * (5000 - 1)) + 1;

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Link to="/">
				<Navbar.Brand>Zenime</Navbar.Brand>
			</Link>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href={`/users/${props.user.id}`}>Profile</Nav.Link>
					<Nav.Link href={`/${randomAnime}`}>Random Anime</Nav.Link>
				</Nav>

				<Nav>
					{navbarDisplay(props)}
					<Form inline onSubmit={props.handleSubmit}>
						<FormControl
							type="text"
							name="keyword"
							placeholder="Search"
							className="mr-sm-2"
							onChange={props.handleChange}
						/>
						<Button type="submit" variant="outline-info">
							Search
						</Button>
					</Form>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBarView;
