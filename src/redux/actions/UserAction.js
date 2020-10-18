import { userService } from "../../services/UserService";
import { login } from "../types/UserType";

export const signUpAction = (values) => {
  return userService
    .dangKy(values)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const loginAction = (user) => {
  console.log(user.taiKhoan);
  console.log(user.matKhau);
  return (dispatch) => {
    userService
      .dangNhap(user)
      .then((res) => {
        console.log(res.data);
        //Lưu thông tin vào localStorage
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        //Lưu token vào localStorage
        localStorage.setItem("accessToken", res.data.accessToken);
        // alert("successly");
        dispatch({
          type: login,
          userLogin: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        // alert(err.response.data);
      });
  };
};

export const accountInformation = (user) => {
  console.log(user.taiKhoan);
  console.log(user.matKhau);
  return userService
    .thongTinTaiKhoan(user.taiKhoan)
    .then((res) => {
      console.log("info",res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const userListAction = (setDSNguoiDung) => {
  userService
    .layDanhSachNguoiDung()
    .then((res) => {
      console.log(res.data);
      setDSNguoiDung(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return setDSNguoiDung;
};

export const handleInsertUserAction = (values) => {
  console.log(values);
  return userService
    .themNguoiDung(values)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const handleDeleteUserAction = (id) => {
  console.log(id);
  return userService
    .xoaNguoiDung(id)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
