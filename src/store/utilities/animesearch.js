import axios from "axios";

const SEARCH_ANIME = "SEARCH_ANIME";

const searchAnime = (results) => {
  return {
    type: SEARCH_ANIME,
    payload: results,
  };
};

export const searchAnimeThunk = (searchTerm, page) => (dispatch) => {
  ///anime?filter[text]=cowboy%20bebop
  return axios
    .get(
      "https://kitsu.io/api/edge/anime?filter[text]=" +
        searchTerm +
        "?&page[limit]=18&page[offset]=" +
        page,
      {
        //   params: {
        //     filter: {
        //       text: "naruto",
        //     },
        //   },
      }
    )
    .then((res) => {
      console.log("Search Anime Thunk ", res.data);
      return res.data;
    })
    .then((animeResult) => {
      return dispatch(searchAnime(animeResult));
    })
    .catch((err) => console.log(err));
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_ANIME:
      console.log("from search reducer", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
