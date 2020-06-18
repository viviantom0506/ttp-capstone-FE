// import axios from 'axios';

// //ACTION TYPES
// const SIGN_IN = 'SIGN_IN';
// const SIGN_OUT = 'SIGN_OUT';

// //ACTION CREATOR
// export const signIn = user => {
//   return {
//     type: SIGN_IN,
//     payload: user
//   };
// };

// export const signOut = () => {
//   return {
//     type: SIGN_OUT
//   };
// };

// //THUNK CREATOR
// export const signInThunk = () => dispatch => {
//   return (
//     axios
//       .get('https://localhost:3001/auth/google')
//       .then(res => {
//         console.log('from thunk creator ', res.data);
//         return res.data;
//       })
//       //   .then((trendingAnime) => {
//       //     return dispatch(fetchTrending(trendingAnime));
//       //   })
//       .catch(err => console.log(err))
//   );
// };

// //REDUCER

// const INITIAL_STATE = {
//   isAuthenticated: null,
//   user: null,
//   token: ''
// };

// export default (state = { INITIAL_STATE }, action) => {
//   switch (action.type) {
//     case SIGN_IN:
//       return { ...state, isAuthenticated: true, user: action.payload };
//     case SIGN_OUT:
//       return { ...state, isAuthenticated: false, user: null, token: '' };
//     default:
//       return state;
//   }
// };

// //ACTION CREATORS;
// const fetchTrending = trendingAnime => {
//   return {
//     type: FETCH_TRENDING,
//     payload: trendingAnime
//   };
// };

// //THUNK CREATOR

// export const fetchTrendingThunk = () => dispatch => {
//   return axios
//     .get('https://kitsu.io/api/edge/trending/anime')
//     .then(res => {
//       console.log('from thunk creator ', res.data);
//       return res.data;
//     })
//     .then(trendingAnime => {
//       return dispatch(fetchTrending(trendingAnime));
//     })
//     .catch(err => console.log(err));
// };

// //REDUCER
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case FETCH_TRENDING:
//       console.log('from reducer', action.payload);
//       return action.payload;

//     default:
//       return state;
//   }
// };

// export default reducer;
