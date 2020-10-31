import Axios from "axios";
import { token } from "../redux/types/UserType";

export class UserService {
  // constructor() {}
  dangKy = (data) => {
    return Axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data,
    });
  };
  dangNhap = ({ taiKhoan, matKhau }) => {
    return Axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: { taiKhoan, matKhau },
    });
  };
  thongTinTaiKhoan = (taiKhoan) => {
    return Axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data:taiKhoan,
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  dangKyKhoaHoc = ({taiKhoan,maKhoaHoc}) => {
    return Axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc`,
      method: "POST",
      data:{taiKhoan,maKhoaHoc},
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  huyGhiDanh = ({taiKhoan,maKhoaHoc}) => {
    return Axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh`,
      method: "POST",
      data:{taiKhoan,maKhoaHoc},
      headers: { Authorization: `Bearer ${token}` },
    });
  };
}

export const userService = new UserService();
