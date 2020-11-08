import { courseService } from "../../services/CourseService";
import { deleteCart } from "../types/CourseType";

export const courseListAction = (setCourseList, value, group) => {
  courseService
    .layDanhSachKhoaHoc(value, group)
    .then((res) => {
      setCourseList(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return setCourseList;
};

export const courseCategoryListAction = (setCategory) => {
   courseService
    .layDanhMucKhoaHoc()
    .then((res) => {
      // setDSKhoaHoc(res.data);
      setCategory(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
   return setCategory;
};

export const courseCategoryAction = (setCourseList, name, group) => {
  courseService
    .layKhoaHocTheoDanhMuc(name, group)
    .then((res) => {
      setCourseList(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return setCourseList;
};

export const courseDetailAction = (id, setCourseDetail) => {
  courseService
    .layChiTietKhoaHoc(id)
    .then((res) => {
      setCourseDetail(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return setCourseDetail;
};

export const handleRegisterCourseAction = (dispatch, maKhoaHoc, taiKhoan) => {
  return courseService
    .dangKyKhoaHoc({ maKhoaHoc, taiKhoan })
    .then((res) => {
      // console.log(res.data);
      dispatch({
        type: deleteCart,
        cartID: maKhoaHoc,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const handleAcceptRegisterCourseAction = (maKhoaHoc, taiKhoan) => {
  return courseService
    .ghiDanhKhoaHoc({ maKhoaHoc, taiKhoan })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const handleCancelRegisterCourseAction = (maKhoaHoc, taiKhoan) => {
  return courseService
    .huyGhiDanh({ maKhoaHoc, taiKhoan })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const handleInsertCourseAction = (values) => {
  console.log(values);
    console.log("tenKhoaHoc", values.tenKhoaHoc);
  console.log("hinhAnh", values.hinhAnh);
  return courseService
    .themKhoaHoc(values)
    .then((res) => {
      // console.log(res.data);
      
      courseService
        .uploadHinhAnhKhoaHoc(values.hinhAnh)
        .then((res) => {
          res.setHeader("Access-Control-Allow-Origin", "*");
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
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
      // console.log(res.data);
      // courseService.themKhoaHocUploadHinh()
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


