import { message } from "antd";
import { userService } from "../../services/UserService";
import { login } from "../types/UserType";

export const signUpAction = (values) => {
  return userService
    .dangKy(values)
    .then((res) => {
      message.success("Đăng ký thành công");
    })
    .catch((err) => {
      message.error(err.response.data);
    });
};

export const loginAction = (user, history) => {
  let logged = JSON.parse(localStorage.getItem("userLogin"));

  return (dispatch) => {
    userService
      .dangNhap(user)
      .then((res) => {
        //Lưu thông tin vào localStorage
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        //Lưu token vào localStorage
        localStorage.setItem("accessToken", res.data.accessToken);
 
        dispatch({
          type: login,
          userLogin: res.data,
        });
        message.success("Đăng nhập thành công");

        setTimeout(() => {
          history.replace("/home");
        }, 1000);
      })
      .catch((err) => {
        //  message.error(err.response.data);
        if (!logged) message.error(err.response.data);
      });
  };
};

export const accountInformation = (setUserInfo, user) => {
  userService
    .thongTinTaiKhoan(user)
    .then((res) => {
      setUserInfo(res.data);
    })
    .catch((err) => {
      message.error(err.response.data);
    });
  return setUserInfo;
};

export const userListAction = (group, setUserList) => {
  userService
    .layDanhSachNguoiDung(group)
    .then((res) => {
      setUserList(res.data);
    })
    .catch((err) => {
      message.error(err.response.data);
    });
  return setUserList;
};

export const userListAction_pagination = (group, page, setUserListPage) => {
  userService
    .layDanhSachNguoiDung_PhanTrang(group, page)
    .then((res) => {
      setUserListPage(res.data);
    })
    .catch((err) => {
      message.error(err.response.data);
    });
  return setUserListPage;
};

export const handleInsertUserAction = (values) => {
  return userService
    .themNguoiDung(values)
    .then((res) => {
      message.success("Thêm người dùng thành công");
    })
    .catch((err) => {
      message.error(err.response.data);
    });
};

export const handleDeleteUserAction = (id) => {
  return userService
    .xoaNguoiDung(id)
    .then((res) => {
      message.success("Xóa người dùng thành công");
    })
    .catch((err) => {
      message.error(err.response.data);
    });
};

export const handleUpdateUserAction = (values) => {
  return userService
    .capNhatThongTinNguoiDung(values)
    .then((res) => {
      message.success("Cập nhật người dùng thành công");
    })
    .catch((err) => {
      message.error(err.response.data);
    });
};

export const notRegisteredCourseList = (taiKhoan, setNotRegistered) => {
  userService
    .layDanhSachKhoaHocChuaGhiDanh({ taiKhoan })
    .then((res) => {
      setNotRegistered(res.data);
    })
    .catch((err) => {
      message.error(err.response.data);
    });
  return setNotRegistered;
};

export const unregisteredCourseList = (taiKhoan, setUnregistered) => {
  userService
    .layDanhSachKhoaHocChoXetDuyet({ taiKhoan })
    .then((res) => {
      setUnregistered(res.data);
    })
    .catch((err) => {
      message.error(err.response.data);
    });
  return setUnregistered;
};

export const registeredCourseList = (taiKhoan, setRegistered) => {
  userService
    .layDanhSachKhoaHocDaXetDuyet({ taiKhoan })
    .then((res) => {
      setRegistered(res.data);
    })
    .catch((err) => {
      message.error(err.response.data);
    });
  return setRegistered;
};
