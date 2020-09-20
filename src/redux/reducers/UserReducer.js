import { login } from "../types/UserType";

let userLogin = null;
let initialState = {
  user: userLogin,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case login: {
      state.user = action.user;
      return { ...state };
    }
    default:
      return state;
  }
};

export default UserReducer;
