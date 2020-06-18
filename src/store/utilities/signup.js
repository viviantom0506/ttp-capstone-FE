import axios from "axios";

// Action Types
const ADD_USER = "ADD_USER";

// Action Creators

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// Thunk Creators
export const addUserThunk = (id) => (dispatch) => {
  return axios
    .post(`/api/users/${id}`)
    .then((res) => res.data)
    .then((user) => dispatch(addUser(user)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;