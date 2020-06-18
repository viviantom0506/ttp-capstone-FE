import React from "react";
import { Router, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

//const randomMonth = months[Math.floor(Math.random() * months.length)]; RANDOM ELEMENT EXAMPLE
const NavBarView = (props) => {
  const randomAnime = Math.floor(Math.random() * (3000 - 1000)) + 1000;

  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>Anime Project</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/users/:id">Profile</Nav.Link>
        <Nav.Link href={`/${randomAnime}`}>Random Anime</Nav.Link>
      </Nav>
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
    </Navbar>
  );
};

export default NavBarView;
