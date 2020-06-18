import React from "react"
import AnimeCategoriesPageView from "../views/AnimeCategoriesPageView";

const AnimeCategoriesPageContainer = (props) => {
    return (
        <div>
            <h1>Hello World</h1>
            {console.log(props.location.state.categories)}
            {/* <AnimeCategoriesPageView anime={props.location.state.categories}/> */}
        </div>
    )
}

export default AnimeCategoriesPageContainer