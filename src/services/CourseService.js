import Axios from "axios";
import { domain,token } from "../config/setting";

export class CourseService {
  // constructor() {}
  layDanhSachKhoaHoc = (data) => {
    return Axios({
      url:
        `${domain}/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${data}&MaNhom=GP01`,
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

  layKhoaHocTheoDanhMuc = () => {
    return Axios({
      url: "",
      method: "",
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
