import axios from "axios";

//action types for users
const FETCH_USER_PROFILE = "FETCH_USER_PROFILE";
const CREATE_USER_PROFILE = "CREATE_USER_PROFILE";

//actions

//action to fetch the user id from the database
const fetchUserProfiles = (profileId) => {
  return {
    type: FETCH_USER_PROFILE,
    payload: profileId,
  };
};

// action to add a new user profile

const createUserProfile = (profile) => {
  return {
    type: CREATE_USER_PROFILE,
    payload: profile,
  };
};

export const fetchUserProfileThunk = () => (dispatch) => {
  return axios
    .get("/api/users")
    .then((res) => res.data)
    .then((users) => dispatch(fetchUserProfiles(users)))
    .catch((err) => console.log(err));
};

export const createUserProfileThunk = (user, ownProps) => (dispatch) => {
  return axios
    .post(`/api/users/`, user)
    .then((res) => res.data)
    .then((newUser) => {
      const addedUser = { ...newUser };
      dispatch(createUserProfile(addedUser));
      ownProps.history.push(`/users/${newUser.id}`);
    })
    .catch((err) => console.log(err));
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return action.payload;
    case CREATE_USER_PROFILE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
