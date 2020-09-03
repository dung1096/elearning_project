import { userService } from "../../services/UserService";
import { signUp, login } from "../types/UserType";
import { useEffect } from "react";

export const signUpAction = () => {
  return;
};

export const loginAction = ({ taiKhoan, matKhau }) => {
  console.log(taiKhoan);
  console.log(matKhau);
  return (dispatch) => {
    useEffect(() => {
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
    }, []);
  };
};
