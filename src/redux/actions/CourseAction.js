import { courseService } from "../../services/CourseService";
import { deleteCart } from "../types/CourseType";

export const courseListAction = (setDSKhoaHoc, value, group) => {
  courseService
    .layDanhSachKhoaHoc(value, group)
    .then((res) => {
      setDSKhoaHoc(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return setDSKhoaHoc;
};

export const courseCategoryAction = (setDSKhoaHoc, name, group) => {
  courseService
    .layKhoaHocTheoDanhMuc(name, group)
    .then((res) => {
      setDSKhoaHoc(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return setDSKhoaHoc;
};

export const courseDetailAction = (id, setCourseDetail) => {
  courseService
    .layChiTietKhoaHoc(id)
    .then((res) => {
      setCourseDetail(res.data);
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return setCourseDetail;
};

export const handleRegisterCourseAction = (dispatch, maKhoaHoc, taiKhoan) => {
  return courseService
    .dangKyKhoaHoc({maKhoaHoc, taiKhoan})
    .then((res) => {
      console.log(res.data);
      dispatch({
      type: deleteCart,
      cartID: maKhoaHoc,
    });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const handleCancelRegisterCourseAction = ( maKhoaHoc, taiKhoan) => {
  return courseService
    .huyGhiDanh({maKhoaHoc, taiKhoan})
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

export const handleUpdateCourseAction = (values) => {
  console.log(values);
  return courseService
    .capNhatKhoaHoc(values)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const handleDeleteCourseAction = (id) => {
  return courseService
    .xoaKhoaHoc(id)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

