import axios from 'axios';

const SEARCH_ANIME = 'SEARCH_ANIME';

const searchAnime = results => {
	return {
		type: SEARCH_ANIME,
		payload: results,
	};
};

export const searchAnimeThunk = (searchTerm, page) => dispatch => {
	///anime?filter[text]=cowboy%20bebop
	return axios
		.get(
			'https://kitsu.io/api/edge/anime?filter[text]=' +
				searchTerm +
				'?&page[limit]=18&page[offset]=' +
				page,
			{},
		)
		.then(res => {
			return res.data;
		})
		.then(animeResult => {
			return dispatch(searchAnime(animeResult));
		})
		.catch(err => console.log(err));
};

const reducer = (state = [], action) => {
	switch (action.type) {
		case SEARCH_ANIME:
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
