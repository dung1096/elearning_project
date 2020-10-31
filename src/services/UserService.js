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
  thongTinTaiKhoan = (taiKhoan) => {
    return Axios({
      url: `${domain}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data:taiKhoan,
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  dangKyKhoaHoc = ({taiKhoan,maKhoaHoc}) => {
    return Axios({
      url: `${domain}/api/QuanLyKhoaHoc/DangKyKhoaHoc`,
      method: "POST",
      data:{taiKhoan,maKhoaHoc},
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  huyGhiDanh = ({taiKhoan,maKhoaHoc}) => {
    return Axios({
      url: `${domain}/api/QuanLyKhoaHoc/HuyGhiDanh`,
      method: "POST",
      data:{taiKhoan,maKhoaHoc},
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  layDanhSachNguoiDung = () => {
    return Axios({
      url: `${domain}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
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
