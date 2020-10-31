import { courseService } from "../../services/CourseService";

export const courseListAction = (setDSKhoaHoc, value,group) => {
  courseService
    .layDanhSachKhoaHoc(value,group)
    .then((res) => {
      console.log("dsKhoaHoc", res.data);
      setDSKhoaHoc(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return setDSKhoaHoc;
};

export const courseCategoryAction = (setDSKhoaHoc,name,group) => {
  console.log("dsKhoaHocDanhMuc",name,group);
  courseService
    .layKhoaHocTheoDanhMuc(name,group)
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

export const handleRegisterCourseAction = (courseID,userID) => {
  console.log(userID,courseID);
  return courseService
    .dangKyKhoaHoc(courseID,userID)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const handleInsertCourseAction = (values) => {
  console.log(values);
  return courseService
    .themKhoaHoc(values)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const handleDeleteCourseAction = (id) => {
  console.log(id);
  return courseService
    .xoaKhoaHoc(id)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
