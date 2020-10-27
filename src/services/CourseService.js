import Axios from "axios";
import { domain,token } from "../config/setting";

export class CourseService {
  // constructor() {}
  layDanhSachKhoaHoc = (data,group) => {
    return Axios({
      url:
        `${domain}/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${data}&MaNhom=${group}`,
      method: "GET",
    });
  };

  // timKiemKhoaHoc = () => {
  //   return Axios({
  //     url: `${domain}/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc={tenKhoaHoc}&MaNhom=GP01`,
  //     method: "GET",
  //   });
  // };

  layChiTietKhoaHoc = (maKhoaHoc) => {
    return Axios({
      url: `${domain}/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
      method: "GET",
    });
  };

  layDanhMucKhoaHoc = () => {
    return Axios({
      url: "",
      method: "",
    });
  };

  layKhoaHocTheoDanhMuc = (data,group) => {
    return Axios({
      url: `${domain}/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${data}&MaNhom=${group}`,
      method: "GET",
    });
  };

  dangKyKhoaHoc = ({maKhoaHoc,taiKhoan}) => {
    return Axios({
      url: `${domain}/api/QuanLyKhoaHoc/DangKyKhoaHoc`,
      method: "POST",
      data:{maKhoaHoc,taiKhoan},
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

  themKhoaHoc = (course) => {
    return Axios({
      url: `${domain}/api/QuanLyKhoaHoc/ThemKhoaHoc`,
      method: "POST",
      data: course,
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  capNhatKhoaHoc = (course) => {
    return Axios({
      url: `${domain}/api/QuanLyKhoaHoc/CapNhatKhoaHoc`,
      method: "PUT",
      data: course,
    });
  };
  xoaKhoaHoc = (id) => {
    return Axios({
      url: `${domain}/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`,
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  };
}

export const courseService = new CourseService();
