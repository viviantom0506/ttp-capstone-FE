import axios from 'axios';
// import { useCookies } from 'react-cookie';

// ACTION TYPES
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const GET_USER_AND_ANIMES = 'GET_USER_AND_ANIMES';

// ACTION CREATORS
const getUser = user => {
	return {
		type: GET_USER,
		payload: user,
	};
};

const removeUser = () => {
	return {
		type: REMOVE_USER,
	};
};

const getUserAndAnimes = user => {
	return {
		type: GET_USER_AND_ANIMES,
		payload: user,
	};
};

// THUNK CREATORS

export const getUserAndAnimesThunk = userId => async dispatch => {
	await axios
		.get(`http://localhost:3001/api/users/${userId}`)
		//.then((res) => console.log(res))
		.then(res => res.data)
		.then(userAndAnimes => dispatch(getUserAndAnimes(userAndAnimes)))
		.catch(err => console.log(err));
};

export const me = userId => async dispatch => {
	try {
		// const res = await axios.get(`http://localhost:3001/users/${userId}`, {
		//   withCredentials: true
		// });
		const res = await axios.get(`http://localhost:3001/auth/me`, {
			withCredentials: true,
		});

		dispatch(getUser(res.data || {}));
	} catch (err) {
		console.error(err);
	}
};

export const auth = (email, password, method) => async dispatch => {
	let res;
	// const [cookies] = useCookies(['name']);
	// console.log('user.js file, this is cookies:', cookies);
	try {
		res = await axios.post(
			`http://localhost:3001/auth/${method}`,
			{ email, password },
			{ withCredentials: true },
		);
	} catch (authError) {
		return dispatch(getUser({ error: authError }));
	}

	try {
		dispatch(getUser(res.data));
	} catch (dispatchOrHistoryErr) {
		console.error(dispatchOrHistoryErr);
	}
};

export const logout = () => async dispatch => {
	try {
		await axios.delete('http://localhost:3001/auth/logout', {
			withCredentials: true,
		});
		dispatch(removeUser());
	} catch (err) {
		console.error(err);
	}
};

// REDUCER
const reducer = (state = {}, action) => {
	switch (action.type) {
		case GET_USER:
			return action.payload;
		case REMOVE_USER:
			return {};
		case GET_USER_AND_ANIMES:
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
