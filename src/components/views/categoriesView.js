import React from "react";

const CategoriesView = (props) => {
    return (
        <div>
        <h1>Categories</h1>
        <p onClick={() => {props.handleClick("comedy")}}>Comedy</p>
        <p onClick={() => {props.handleClick("fantasy")}}>Fantasy</p>
        <p onClick={() => {props.handleClick("romance")}}>Romance</p>
        <p onClick={() => {props.handleClick("action")}}>Action</p>
        <p onClick={() => {props.handleClick("school life")}}>School Life</p>
        <p onClick={() => {props.handleClick("drama")}}>Drama</p>
        <p onClick={() => {props.handleClick("adventure")}}>Adventure</p>
        <p onClick={() => {props.handleClick("slice of life")}}>Slice of Life</p>
        <p onClick={() => {props.handleClick("shoujo ai")}}>Shoujo Ai</p>
        <p onClick={() => {props.handleClick("science fiction")}}>Science Fiction</p>
        <p onClick={() => {props.handleClick("yaoi")}}>Yaoi</p> 
        <p onClick={() => {props.handleClick("sports")}}>Sports</p>
        <p onClick={() => {props.handleClick("japan")}}>Japan</p>
        <p onClick={() => {props.handleClick("historical")}}>Historical</p>
        <p onClick={() => {props.handleClick("earth")}}>Earth</p> 
        <p onClick={() => {props.handleClick("thriller")}}>Thriller</p>
        <p onClick={() => {props.handleClick("harem")}}>Harem</p>
        <p onClick={() => {props.handleClick("mystery")}}>Mystery</p>
        <p onClick={() => {props.handleClick("magic")}}>Magic</p>
        <p onClick={() => {props.handleClick("present")}}>Present</p>
        <p onClick={() => {props.handleClick("asia")}}>Asia</p>
        <p onClick={() => {props.handleClick("kids")}}>Kids</p>
        <p onClick={() => {props.handleClick("horror")}}>Horror</p>
        <p onClick={() => {props.handleClick("music")}}>Music</p>
        <p onClick={() => {props.handleClick("mecha")}}>Mecha</p>
        <p onClick={() => {props.handleClick("psychological")}}>Psychological</p>
        <p onClick={() => {props.handleClick("shounen ai")}}>Shounen Ai</p>
        <p onClick={() => {props.handleClick("super power")}}>Super Power</p>
        <p onClick={() => {props.handleClick("martial arts")}}>Martial Arts</p>
        <p onClick={() => {props.handleClick("demon")}}>Demon</p>
        <p onClick={() => {props.handleClick("military")}}>Military</p>
        <p onClick={() => {props.handleClick("plot continuity")}}>Plot Continuity</p>
        <p onClick={() => {props.handleClick("fantasy world")}}>Fantasy World</p>
        <p onClick={() => {props.handleClick("shounen")}}>Shounen</p>
        <p onClick={() => {props.handleClick("violence")}}>Violence</p>
        <p onClick={() => {props.handleClick("supernatural")}}>Supernatural</p>
        <p onClick={() => {props.handleClick("seinen")}}>Seinen</p>
        <p onClick={() => {props.handleClick("parody")}}>Parody</p>
        <p onClick={() => {props.handleClick("motorsport")}}>Motorsport</p>
        <p onClick={() => {props.handleClick("space")}}>Space</p>
        </div>
    )
}

export default CategoriesView;