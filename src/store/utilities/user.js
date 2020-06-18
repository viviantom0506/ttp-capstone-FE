import axios from 'axios';

// ACTION TYPES
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';

// ACTION CREATORS
const getUser = user => {
  return {
    type: GET_USER,
    payload: user
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER
  };
};

// THUNK CREATORS
export const me = userId => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:3001/users/${userId}`, {
      withCredentials: true
    });
    dispatch(getUser(res.data || {}));
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};

export const auth = (email, password, method) => async dispatch => {
  let res;
  try {
    res = await axios.post(
      `http://localhost:3001/auth/${method}`,
      { email, password },
      { withCredentials: true }
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
      withCredentials: true
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
    default:
      return state;
  }
};

export default reducer;

// import axios from "axios";

// //action types for users
// const FETCH_USER_PROFILE = "FETCH_USER_PROFILE";
// const CREATE_USER_PROFILE = "CREATE_USER_PROFILE";

// //actions

// //action to fetch the user id from the database
// const fetchUserProfiles = (profileId) => {
//   return {
//     type: FETCH_USER_PROFILE,
//     payload: profileId,
//   };
// };

// // action to add a new user profile

// const createUserProfile = (profile) => {
//   return {
//     type: CREATE_USER_PROFILE,
//     payload: profile,
//   };
// };

// export const fetchUserProfileThunk = () => (dispatch) => {
//   return axios
//     .get("/api/users")
//     .then((res) => res.data)
//     .then((users) => dispatch(fetchUserProfiles(users)))
//     .catch((err) => console.log(err));
// };

// export const createUserProfileThunk = (user, ownProps) => (dispatch) => {
//   return axios
//     .post(`/api/users/`, user)
//     .then((res) => res.data)
//     .then((newUser) => {
//       const addedUser = { ...newUser };
//       dispatch(createUserProfile(addedUser));
//       ownProps.history.push(`/users/${newUser.id}`);
//     })
//     .catch((err) => console.log(err));
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case FETCH_USER_PROFILE:
//       return action.payload;
//     case CREATE_USER_PROFILE:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export default reducer;
