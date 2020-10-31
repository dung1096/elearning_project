import Axios from "axios";
import { domain, token } from "../config/setting";


export class UserService {
  // constructor() {}
  dangKy = (data) => {
    return Axios({
      url: `${domain}/api/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data,
    });
  };
  dangNhap = ({ taiKhoan, matKhau }) => {
    return Axios({
      url: `${domain}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: { taiKhoan, matKhau },
    });
  };
  thongTinTaiKhoan = ({taiKhoan,matKhau}) => {
    return Axios({
      url: `${domain}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data: {taiKhoan,matKhau},
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  
  

  layDanhSachNguoiDung = (group) => {
    return Axios({
      url: `${domain}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${group}`,
      method: "GET",
    });
  };

  themNguoiDung = (values) => {
    return Axios({
      url: `${domain}/api/QuanLyNguoiDung/ThemNguoiDung`,
      method: "POST",
      data: values,
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  capNhatThongTinNguoiDung = (value) => {
    return Axios({
      url: `${domain}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: value,
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  xoaNguoiDung = (id) => {
    return Axios({
      url: `${domain}/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`,
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  };
}

export const userService = new UserService();
