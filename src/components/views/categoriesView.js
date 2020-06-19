import React from "react";
import { Accordion, Card } from "react-bootstrap";
const CategoriesView = (props) => {
  return (
    <div>
      <Accordion defaultActiveKey="1">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h4>Click me for categories!</h4>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="container">
                <div className="d-flex flex-wrap justify-content-around">
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("comedy");
                    }}
                  >
                    Comedy
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("fantasy");
                    }}
                  >
                    Fantasy
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("romance");
                    }}
                  >
                    Romance
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("action");
                    }}
                  >
                    Action
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("school life");
                    }}
                  >
                    School Life
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("drama");
                    }}
                  >
                    Drama
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("adventure");
                    }}
                  >
                    Adventure
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("slice of life");
                    }}
                  >
                    Slice of Life
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("shoujo ai");
                    }}
                  >
                    Shoujo Ai
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("science fiction");
                    }}
                  >
                    Science Fiction
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("yaoi");
                    }}
                  >
                    Yaoi
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("sports");
                    }}
                  >
                    Sports
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("japan");
                    }}
                  >
                    Japan
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("historical");
                    }}
                  >
                    Historical
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("earth");
                    }}
                  >
                    Earth
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("thriller");
                    }}
                  >
                    Thriller
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("harem");
                    }}
                  >
                    Harem
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("mystery");
                    }}
                  >
                    Mystery
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("magic");
                    }}
                  >
                    Magic
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("present");
                    }}
                  >
                    Present
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("asia");
                    }}
                  >
                    Asia
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("kids");
                    }}
                  >
                    Kids
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("horror");
                    }}
                  >
                    Horror
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("music");
                    }}
                  >
                    Music
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("mecha");
                    }}
                  >
                    Mecha
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("psychological");
                    }}
                  >
                    Psychological
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("shounen ai");
                    }}
                  >
                    Shounen Ai
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("super power");
                    }}
                  >
                    Super Power
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("martial arts");
                    }}
                  >
                    Martial Arts
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("demon");
                    }}
                  >
                    Demon
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("military");
                    }}
                  >
                    Military
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("plot continuity");
                    }}
                  >
                    Plot Continuity
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("fantasy world");
                    }}
                  >
                    Fantasy World
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("shounen");
                    }}
                  >
                    Shounen
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("violence");
                    }}
                  >
                    Violence
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("supernatural");
                    }}
                  >
                    Supernatural
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("seinen");
                    }}
                  >
                    Seinen
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("parody");
                    }}
                  >
                    Parody
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("motorsport");
                    }}
                  >
                    Motorsport
                  </button>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      props.handleClick("space");
                    }}
                  >
                    Space
                  </button>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default CategoriesView;
