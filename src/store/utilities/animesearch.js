import axios from "axios";

import {Link} from 'react-router-dom';
const FETCH_SEARCH = "FETCH_SEARCH";

const fetchSearch = (animeSearch) => {
    return {
        type: FETCH_SEARCH,
        payload: animeSearch,
    };
};

export const fetchAnimeSearchThunk = () => (dispatch) => {
    return axios 
    .get("https://kitsu.io/api/edge/anime")
    .then((res) => {
        console.log("Search thunk!", res.data);
        return res.data;
    })
    .then((animeSearch) => {
        return dispatch(fetchSearch(animeSearch));
    })
    .catch((err) => console.log(err));
};

const reducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_SEARCH: 
            console.log("search reducer", action.payload);
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
   