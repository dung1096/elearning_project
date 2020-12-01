import { message } from "antd";
import { courseService } from "../../services/CourseService";
import { deleteCart, addImg } from "../types/CourseType";

export const courseListAction = (setCourseList, value, group) => {
  courseService
    .layDanhSachKhoaHoc(value, group)
    .then((res) => {
      setCourseList(res.data);
    })
    .catch((err) => {
      message.error(err.response.data);
    });
  return setCourseList;
};

export const courseListAction_pagination = (group, page, setCourseListPage) => {
  courseService
    .layDanhSachKhoaHoc_PhanTrang(group, page)
    .then((res) => {
      setCourseListPage(res.data);
    })
    .catch((err) => {
      message.error(err.response.data);
    });
  return setCourseListPage;
};

export const courseCategoryListAction = (setCategory) => {
  courseService
    .layDanhMucKhoaHoc()
    .then((res) => {
      // setDSKhoaHoc(res.data);
      setCategory(res.data);
    })
    .catch((err) => {
      message.error(err.response.data);
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
      message.error(err.response.data);
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
      message.error(err.response.data);
    });
  return setCourseDetail;
};

export const handleRegisterCourseAction = (dispatch, maKhoaHoc, taiKhoan) => {
  return courseService
    .dangKyKhoaHoc({ maKhoaHoc, taiKhoan })
    .then((res) => {
      message.success("Đăng ký khóa học thành công");
      dispatch({
        type: deleteCart,
        cartID: maKhoaHoc,
      });
    })
    .catch((err) => {
      message.error(err.response.data);
    });
};

export const handleAcceptRegisterCourseAction = (maKhoaHoc, taiKhoan) => {
  return courseService
    .ghiDanhKhoaHoc({ maKhoaHoc, taiKhoan })
    .then((res) => {
      message.success("Ghi danh khóa học thành công");
    })
    .catch((err) => {
      message.error(err.response.data);
    });
};

export const handleCancelRegisterCourseAction = (maKhoaHoc, taiKhoan) => {
  return courseService
    .huyGhiDanh({ maKhoaHoc, taiKhoan })
    .then((res) => {
      message.success("Hủy ghi danh thành công");
    })
    .catch((err) => {
      message.error(err.response.data);
    });
};

export const handleInsertCourseAction = (values) => {
  console.log("tenKhoaHoc", values.tenKhoaHoc);
  console.log("hinhAnh", values.hinhAnh);
  let frm = new FormData();
  frm.append("hinhAnh", values.hinhAnh);
  frm.append("tenKhoaHoc", values.tenKhoaHoc);
  courseService
    .themKhoaHoc(values)
    .then((res) => {
      console.log(res.data);
      return async (dispatch) => {
        console.log("abc");
        await courseService
          .uploadHinhAnhKhoaHoc(frm)
          .then((res) => {
            console.log(res.data);
            dispatch({
              type: addImg,
              img: res.data,
            });
            // res.setHeader("Access-Control-Allow-Origin", "*");
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err.response.data);
            message.error(err.response.data);
          });
      };
    })
    .catch((err) => {
      console.log(err.response.data);
      message.error(err.response.data);
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
      message.error(err.response.data);
    });
};

export const handleDeleteCourseAction = (id) => {
  return courseService
    .xoaKhoaHoc(id)
    .then((res) => {
      message.success("Xóa khóa học thành công");
    })
    .catch((err) => {
      message.error(err.response.data);
    });
};
