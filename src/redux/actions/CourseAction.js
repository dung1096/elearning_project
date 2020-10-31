import { courseService } from "../../services/CourseService";

export const courseListAction = (setDSKhoaHoc) => {
  courseService
    .layDanhSachKhoaHoc()
    .then((res) => {
      console.log("dsKhoaHoc", res.data);
      setDSKhoaHoc(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return setDSKhoaHoc;
};

export const courseDetailAction = (props, setChiTietKhoaHoc) => {
  courseService
    .layChiTietKhoaHoc(props.match.params.maKhoaHoc)
    .then((res) => {
      console.log("chiTietKhoaHoc", res.data);
      setChiTietKhoaHoc(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return setChiTietKhoaHoc;
};
