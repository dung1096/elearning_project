import { login, logout } from "../types/UserType";

let userLogin = null;
if (localStorage.getItem("userLogin")) {
  userLogin = JSON.parse(localStorage.getItem("userLogin"));
}

// let userChose = {
//   taiKhoan: "",
//   matKhau: "",
//   hoTen: "",
//   soDT: "",
//   maNhom: "GP01",
//   email: "",
//   xacNhan: "",
//   maLoaiNguoiDung: "HV",
// };
let initialState = {
  userLogin: userLogin,
  // userChose: userChose,
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
    // case chose: {
    //   state.userChose = action.userChose;
    //   console.log(state.userChose);
    //   return { ...state };
    // }
    default:
      return state;
  }

};

export default UserReducer;
