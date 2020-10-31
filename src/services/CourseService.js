import Axios from "axios";

export class CourseService {
  // constructor() {}
  layDanhSachKhoaHoc = (data) => {
    return Axios({
      url:
        `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${data}&MaNhom=GP01`,
      method: "GET",
    });
  };

  // timKiemKhoaHoc = () => {
  //   return Axios({
  //     url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc={tenKhoaHoc}&MaNhom=GP01`,
  //     method: "GET",
  //   });
  // };

  layChiTietKhoaHoc = (maKhoaHoc) => {
    return Axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
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
}

export const courseService = new CourseService();
