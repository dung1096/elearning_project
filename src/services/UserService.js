import Axios from "axios";

export class UserService {
  // constructor() {}
  dangKy = (data) => {
    return Axios({
      url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data,
    });
  };
  dangNhap = ({ taiKhoan, matKhau }) => {
    return Axios({
      url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: { taiKhoan, matKhau },
    });
  };
}

export const userService = new UserService();
