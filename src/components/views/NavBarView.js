import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavBarView = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>Anime Project</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/users/:id">Profile</Nav.Link>
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
