import axios from "axios";

//Action Types
const FETCH_TRENDING = "FETCH_TRENDING";
const FETCH_ANIME = "FETCH_ANIME";
//ACTION CREATORS;
const fetchTrending = (trendingAnime) => {
  return {
    type: FETCH_TRENDING,
    payload: trendingAnime,
  };
};

const fetchAnime = (animeList) => {
  return {
    type: FETCH_ANIME,
    payload: animeList,
  };
};

//THUNK CREATOR

export const fetchTrendingThunk = () => (dispatch) => {
  return axios
    .get("https://kitsu.io/api/edge/trending/anime")
    .then((res) => {
      console.log("from thunk creator ", res.data);
      return res.data;
    })
    .then((trendingAnime) => {
      return dispatch(fetchTrending(trendingAnime));
    })
    .catch((err) => console.log(err));
};

export const fetchAnimeListThunk = () => (dispatch) => {
  return axios 
  .get("https://kitsu.io/api/edge/anime/")
  .then((res) => {
    console.log("Anime thunk ", res.data);
    return res.data;
  })
  .then((animeList) => {
    return dispatch(fetchAnime(animeList));
  })
  .catch((err) => console.log(err));
}

//REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TRENDING:
      console.log("from reducer", action.payload);
      return action.payload;
    case FETCH_ANIME:
      console.log("from reducer animeeee", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
