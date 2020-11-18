import { userService } from "../../services/UserService";
import { login } from "../types/UserType"


export const signUpAction = (values) => {
  return userService
    .dangKy(values)
    .then((res) => {
      // console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const loginAction = (user,history) => {
  return (dispatch) => {
    userService
      .dangNhap(user)
      .then((res) => {
        //Lưu thông tin vào localStorage
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        //Lưu token vào localStorage
        localStorage.setItem("accessToken", res.data.accessToken);
        // alert("successly");
        dispatch({
          type: login,
          userLogin: res.data,
        });
        history.replace("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
        // setMess(err.response.data);
      });
  };
};

export const accountInformation = (setUserInfo,user) => {
  userService
    .thongTinTaiKhoan(user)
    .then((res) => {
     setUserInfo(res.data);
   
    })
    .catch((err) => {
      console.log(err.response.data);
    });
    return setUserInfo;
};

export const userListAction = (group,setUserList) => {
  userService
    .layDanhSachNguoiDung(group)
    .then((res) => {
      setUserList(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return setUserList;
};

export const userListAction_pagination = (group,page,setUserListPage) => {
  userService
    .layDanhSachNguoiDung_PhanTrang(group,page)
    .then((res) => {
      setUserListPage(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return setUserListPage;
};

export const handleInsertUserAction = (values) => {
  console.log(values);
  return userService
    .themNguoiDung(values)
    .then((res) => {
      // console.log(res.data);
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
      // console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const handleUpdateUserAction = (values) => {
  console.log(values);
  return userService
    .capNhatThongTinNguoiDung(values)
    .then((res) => {
      // console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const notRegisteredCourseList = (taiKhoan,setNotRegistered) => {
  userService
    .layDanhSachKhoaHocChuaGhiDanh({taiKhoan})
    .then((res) => {
      setNotRegistered(res.data);
     console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
 return setNotRegistered;
};

export const unregisteredCourseList = (taiKhoan,setUnregistered) => {
  userService
    .layDanhSachKhoaHocChoXetDuyet({taiKhoan})
    .then((res) => {
      setUnregistered(res.data);
     
    })
    .catch((err) => {
      console.log(err.response.data);
    });
 return setUnregistered;
};

export const registeredCourseList = (taiKhoan,setRegistered) => {
userService
    .layDanhSachKhoaHocDaXetDuyet({taiKhoan})
    .then((res) => {
      setRegistered(res.data);
    
    })
    .catch((err) => {
      console.log(err.response.data);
    });
 return setRegistered;
};
