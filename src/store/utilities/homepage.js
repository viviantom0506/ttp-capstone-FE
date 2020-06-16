import axios from "axios";

//Action Types
const FETCH_TRENDING = "FETCH_TRENDING";

//ACTION CREATORS;
const fetchTrending = (trendingAnime) => {
  return {
    type: FETCH_TRENDING,
    payload: trendingAnime,
  };
};

//THUNK CREATOR

export const fetchTrendingThunk = () => (dispatch) => {
  return axios
    .get("https://kitsu.io/api/edge/trending/anime")
    .then((res) => res.data)
    .then((trendingAnime) => dispatch(fetchTrending(trendingAnime)))
    .catch((err) => console.log(err));
};

//REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TRENDING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
