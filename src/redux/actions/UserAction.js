import { userService } from "../../services/UserService";
import { login } from "../types/UserType";

export const signUpAction = () => {
  return;
};

export const loginAction = ({ taiKhoan, matKhau }) => {
  console.log(taiKhoan);
  console.log(matKhau);
  return (dispatch) => {
    userService
      .dangNhap({ taiKhoan, matKhau })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: login,
          user: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};
