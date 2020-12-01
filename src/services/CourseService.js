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

  layDanhSachKhoaHoc_PhanTrang = (group,page) => {
    return Axios({
      url: `${domain}/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=6&MaNhom=${group}`,
      method: "GET",
    });
  };

  // timKiemKhoaHoc = (data,group) => {
  //   return Axios({
  //     url:
  //       `${domain}/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${data}&MaNhom=${group}`,
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
      url: `${domain}/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
      method: "GET",
    });
  };

  layKhoaHocTheoDanhMuc = (data,group) => {
    return Axios({
      url: `${domain}/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${data}&MaNhom=${group}`,
      method: "GET",
    });
  };

  dangKyKhoaHoc = ({maKhoaHoc,taiKhoan}) => {
    console.log({maKhoaHoc,taiKhoan})
    return Axios({
      url: `${domain}/api/QuanLyKhoaHoc/DangKyKhoaHoc`,
      method: "POST",
      data:{maKhoaHoc,taiKhoan},
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  
  ghiDanhKhoaHoc = ({maKhoaHoc,taiKhoan}) => {
    return Axios({
      url: `${domain}/api/QuanLyKhoaHoc/GhiDanhKhoaHoc`,
      method: "POST",
      data:{maKhoaHoc,taiKhoan},
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  huyGhiDanh = ({maKhoaHoc,taiKhoan}) => {
    return Axios({
      url: `${domain}/api/QuanLyKhoaHoc/HuyGhiDanh`,
      method: "POST",
      data:{maKhoaHoc,taiKhoan},
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
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  xoaKhoaHoc = (id) => {
    return Axios({
      url: `${domain}/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`,
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  uploadHinhAnhKhoaHoc = (form) => {
    return Axios({
      url: `${domain}/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc`,
      method: "POST",
      data:form,
    });
  };
}

export const courseService = new CourseService();
