import axios from 'axios';
const FETCH_SINGLE_ANIME = 'FETCH_SINGLE_ANIME';
const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';

const fetchSingleAnime = singleAnime => {
	return {
		type: FETCH_SINGLE_ANIME,
		payload: singleAnime,
	};
};

const addToFavorites = animeId => {
	return {
		type: ADD_TO_FAVORITES,
		payload: animeId,
	};
};

export const addToFavoritesThunk = (anime, animeId, userId) => dispatch => {
	const editedAnime = anime;
	editedAnime.userId = userId;
	axios
		.post('http://localhost:3001/api/animes/', editedAnime)
		.then(res => {
			return res.data;
		})
		//return axios.put(`http://localhost:3001/api/animes/${animeId}`, { userId })
		//.then((res) =>res.data)
		.then(anime => dispatch(addToFavorites(anime)))
		.catch(err => console.log(err));
};

export const fetchSingleAnimeThunk = id => dispatch => {
	return axios
		.get('https://kitsu.io/api/edge/anime/' + id)
		.then(res => {
			return res.data;
		})
		.then(singleAnime => {
			return dispatch(fetchSingleAnime(singleAnime));
		})
		.catch(err => console.log(err));
};

const reducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_SINGLE_ANIME:
			return action.payload;
		case ADD_TO_FAVORITES:
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
