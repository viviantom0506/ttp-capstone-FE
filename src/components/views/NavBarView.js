import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavBarView = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Anime Project</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#Profile">Profile</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={props.onChange} value={props.value}/>
        <Button variant="outline-info"  onClick = {props.onSubmit}  >Search</Button>
      </Form>
    </Navbar>
  );
};
// onSubmit={props.animeList}

export default NavBarView;
