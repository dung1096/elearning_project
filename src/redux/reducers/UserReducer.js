import { login, logout } from "../types/UserType";

let userLogin = null;
if (localStorage.getItem("userLogin")) {
  userLogin = JSON.parse(localStorage.getItem("userLogin"));
}
let initialState = {
  userLogin: userLogin,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case login: {
      state.userLogin = action.userLogin;
      return { ...state };
    }

    case logout: {
      localStorage.removeItem("userLogin");
      localStorage.removeItem("accessToken");
      state.userLogin = null;
      return { ...state };
    }
    default:
      return state;
  }
};

export default UserReducer;
