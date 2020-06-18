import axios from "axios";
const FETCH_SINGLE_ANIME = "FETCH_SINGLE_ANIME";

const fetchSingleAnime = (singleAnime) => {
  return {
    type: FETCH_SINGLE_ANIME,
    payload: singleAnime,
  };
};

export const fetchSingleAnimeThunk = (id) => (dispatch) => {
  return axios
    .get("https://kitsu.io/api/edge/anime/" + id)
    .then((res) => {
      console.log("Anime thunk ", res.data);
      return res.data;
    })
    .then((singleAnime) => {
      return dispatch(fetchSingleAnime(singleAnime));
    })
    .catch((err) => console.log(err));
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SINGLE_ANIME:
      console.log("single anime reducer -- ", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
