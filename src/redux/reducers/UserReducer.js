import { login, logout,update,setGroup } from "../types/UserType";

let userLogin = null;
if (localStorage.getItem("userLogin")) {
  userLogin = JSON.parse(localStorage.getItem("userLogin"));
} else userLogin = null;

let userUpdate = {
  taiKhoan: "",
  matKhau: "",
  hoTen: "",
  soDT: "",
  maNhom: "GP01",
  email: "",
  xacNhan: "",
  maLoaiNguoiDung: "HV",
};

let group= "GP01"
let initialState = {
  userLogin: userLogin,
  userUpdate: userUpdate,
  group:group,
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
    case update: {
      state.userUpdate = action.userUpdate;
      console.log(state.userUpdate);
      return { ...state };
    }
    case setGroup: {
      state.group = action.group;
      return { ...state };
    }

    default:
      return state;
  }

};

export default UserReducer;
