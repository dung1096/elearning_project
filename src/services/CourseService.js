import Axios from "axios";

export class CourseService {
  // constructor() {}
  layDanhSachKhoaHoc = () => {
    return Axios({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      method: "GET",
    });
  };

  timKiemKhoaHoc = () => {
    return Axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc={tenKhoaHoc}&MaNhom=GP01`,
      method: "GET",
    });
  };

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
