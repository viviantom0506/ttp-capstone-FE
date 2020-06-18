import axios from "axios";
const FETCH_ANIME_BY_CATEGORIES = "FETCH_ANIME_BY_CATEGORIES";

const fetchAnimeByCategories = (animeList) => {
    return {
        type: FETCH_ANIME_BY_CATEGORIES,
        payload: animeList,
    };
};

export const fetchAnimeByCategoriesThunk = (categories) => (dispatch) => {
    return axios
      .get("https://kitsu.io/api/edge/anime?filter[categories]=" + categories)
      .then((res) => {
          console.log("categories thunk ",res.data);
          return res.data;
      })
      .then((animeList) => {
          return dispatch(fetchAnimeByCategories(animeList));
      })
      .catch((err) => console.log(err));
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ANIME_BY_CATEGORIES:
            console.log("from reducer", action.payload);
            return action.payload;
        default:
            return state;
    }
};

export default reducer;