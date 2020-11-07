import React, { useState, useEffect, Fragment } from "react";
import {
  courseListAction,
  courseDetailAction,
  handleInsertCourseAction,
  handleUpdateCourseAction,
  handleDeleteCourseAction,
} from "../../redux/actions/CourseAction";

import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { values } from "lodash";

const updateCourseSchema = yup.object().shape({
  maKhoaHoc: yup.string().required("* ID cannot be empty!"),
  biDanh: yup.string().required("* Aliases cannot be empty!"),
  tenKhoaHoc: yup.string().required("* Course Name cannot be empty!"),
});

export default function CourseManagement() {
  let [courseList, setCourseList] = useState([]);
  let [courseDetail, setCourseDetail] = useState({});
  let category={...courseDetail.danhMucKhoaHoc};
  let userCreate={...courseDetail.nguoiTao};

  const propUser = useSelector((state) => state.UserReducer.userLogin);
  const propGroup = useSelector((state) => state.CourseReducer.group);

 let frm = new FormData();

  const parsedDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    let date = dd + "/" + mm + "/" + yyyy;
    return date.toString();
  };

  useEffect(() => {
    courseListAction(setCourseList,"",propGroup);
  }, [courseList,propGroup,courseDetail]);

  const handleSubmit = (values) => {
    console.log(values);
     
     frm.append('hinhAnh',values.hinhAnh);
        frm.append('tenKhoaHoc',values.tenKhoaHoc);
     console.log('tenKhoaHoc',values.tenKhoaHoc)
     console.log('hinhAnh',values.hinhAnh)
    handleInsertCourseAction(values);
  };

  const handleUpdate=(id)=>{
    courseDetailAction(id,setCourseDetail);
   
  }

  const handleSubmitUpdate = (values) => {
    // console.log(values);
     handleUpdateCourseAction(values);
  };

  const handleDelete = (id) => {
    handleDeleteCourseAction(id);
  };

  return (
    <Fragment>
      <div>
        {/* Button trigger modal */}
        <div className="d-flex justify-content-end m-5">
        <button
          type="button"
          className="btn btn-success btn-lg p-3 mb-5"
          style={{ fontSize: "14px" }}
          data-toggle="modal"
          data-target="#courseId"

        >
          Insert
        </button>
        </div>
        {/* Modal */}
        <div className="modal fade" id="courseId" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title form-main__title">Insert</h3>
                <button
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body form-main__content">
                <Formik
                  initialValues={{
                    maKhoaHoc: "",
                    biDanh: "",
                    tenKhoaHoc: "",
                    moTa: "",
                    luotXem: 0,
                    danhGia: 0,
                    hinhAnh: "",
                    maNhom: "GP01",
                    ngayTao: parsedDate(),
                    maDanhMucKhoaHoc: "",
                    taiKhoanNguoiTao: `${propUser.taiKhoan}`,
                  }}
                  validationSchema={updateCourseSchema}
                  onSubmit={handleSubmit}
                >
                  {({ handleChange }) => (
                    <Form>
                      <div className="row">
                        <div className="col-6 pl-0 pr-1">
                          {/* ID */}
                          <div className="form-group">
                            <i className="fa fa-user" />
                            <Field
                              type="text"
                              className="form-control"
                              placeholder="ID"
                              name="maKhoaHoc"
                              onChange={handleChange}
                            />
                            <ErrorMessage name="maKhoaHoc">
                              {/* {(msg) => renderMsg(msg)} */}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="col-6 pr-0 pl-1">
                          {/* Aliases */}
                          <div className="form-group">
                            <i className="fab fa-pied-piper-hat"></i>
                            <Field
                              type="text"
                              className="form-control"
                              placeholder="Aliases"
                              name="biDanh"
                              onChange={handleChange}
                            />
                            <ErrorMessage name="biDanh">
                              {/* {(msg) => renderMsg(msg)} */}
                            </ErrorMessage>
                          </div>
                        </div>
                      </div>

                      {/* Course Name */}
                      <div className="form-group">
                        <i className="fa fa-user" />
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="Course Name"
                          name="tenKhoaHoc"
                          onChange={handleChange}
                        />
                        <ErrorMessage name="tenKhoaHoc">
                          {/* {(msg) => renderMsg(msg)} */}
                        </ErrorMessage>
                      </div>

                      {/* Description */}
                      <div className="form-group">
                        <i className="fa fa-file-alt"></i>
                        <Field
                          component="textarea"
                          type="text"
                          className="form-control"
                          placeholder="Description"
                          name="moTa"
                          onChange={handleChange}
                        />
                        <ErrorMessage name="moTa">
                          {/* {(msg) => renderMsg(msg)} */}
                        </ErrorMessage>
                      </div>

                      {/* Picture */}
                      <div className="form-group">
                        <i className="fa fa-file-image"></i>
                        <Field
                        
                          type="file"
                          className="form-control"
                          placeholder="Picture"
                          name="hinhAnh"
                          onChange={handleChange}
                        />
                        <ErrorMessage name="hinhAnh">
                          {/* {(msg) => renderMsg(msg)} */}
                        </ErrorMessage>
                      </div>

                      <div className="row">
                        <div className="col-6 pl-0 pr-1">
                          {/* Group */}
                          <div className="form-group">
                            <i className="fa fa-users"></i>
                            <Field
                              component="select"
                              type="text"
                              className="form-control"
                              name="maNhom"
                              onChange={handleChange}
                            >
                              <option>GP01</option>
                              <option>GP02</option>
                              <option>GP03</option>
                              <option>GP04</option>
                              <option>GP05</option>
                              <option>GP06</option>
                              <option>GP07</option>
                              <option>GP08</option>
                              <option>GP09</option>
                              <option>GP10</option>
                            </Field>
                          </div>
                        </div>
                        <div className="col-6 pr-0 pl-1">
                          {/*Date*/}
                          <div className="form-group">
                            <i className="fa fa-calendar-alt"></i>
                            <Field
                              type="text"
                              className="form-control"
                              placeholder="Date"
                              name="ngayTao"
                              onChange={handleChange}
                              readOnly
                            />
                            <ErrorMessage name="ngayTao">
                              {/* {(msg) => renderMsg(msg)} */}
                            </ErrorMessage>
                          </div>
                        </div>
                      </div>

                      {/* Category */}
                      <div className="form-group">
                        <i className="fa fa-list-ol"></i>
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="Category"
                          name="maDanhMucKhoaHoc"
                          onChange={handleChange}
                        />
                        <ErrorMessage name="maDanhMucKhoaHoc">
                          {/* {(msg) => renderMsg(msg)} */}
                        </ErrorMessage>
                      </div>
                      <button
                        type="submit"
                        className="btn--red btn--sign-up"
                        // data-dismiss="modal"
                      >
                        Insert
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/* Modal */}
        <div className="modal fade" id="courseUpdateId" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title form-main__title">Update</h3>
                <button
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body form-main__content">
                <Formik
                  enableReinitialize={true}
                  initialValues={{
                    maKhoaHoc: courseDetail.maKhoaHoc,
                    biDanh: courseDetail.biDanh,
                    tenKhoaHoc: courseDetail.tenKhoaHoc,
                    moTa: courseDetail.moTa,
                    luotXem: courseDetail.luotXem,
                    danhGia: 0,
                    hinhAnh: courseDetail.hinhAnh,
                    maNhom: courseDetail.maNhom,
                    ngayTao: courseDetail.ngayTao,
                    maDanhMucKhoaHoc: category.maDanhMucKhoahoc,
                    taiKhoanNguoiTao: userCreate.taiKhoan,
                  }}
                  validationSchema={updateCourseSchema}
                  onSubmit={handleSubmitUpdate}
                >
                  {({ handleChange }) => (
                    <Form>
                      <div className="row">
                        <div className="col-6 pl-0 pr-1">
                          {/* ID */}
                          <div className="form-group">
                            <i className="fa fa-user" />
                            <Field
                              type="text"
                              className="form-control"
                              placeholder="ID"
                              name="maKhoaHoc"
                              onChange={handleChange}
                              readOnly
                            />
                            <ErrorMessage name="maKhoaHoc">
                              {/* {(msg) => renderMsg(msg)} */}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="col-6 pr-0 pl-1">
                          {/* Aliases */}
                          <div className="form-group">
                           <i className="fab fa-pied-piper-hat"></i>
                            <Field
                              type="text"
                              className="form-control"
                              placeholder="Aliases"
                              name="biDanh"
                              onChange={handleChange}
                            />
                            <ErrorMessage name="biDanh">
                              {/* {(msg) => renderMsg(msg)} */}
                            </ErrorMessage>
                          </div>
                        </div>
                      </div>

                      {/* Course Name */}
                      <div className="form-group">
                        <i className="fa fa-user" />
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="Course Name"
                          name="tenKhoaHoc"
                          onChange={handleChange}
                        />
                        <ErrorMessage name="tenKhoaHoc">
                          {/* {(msg) => renderMsg(msg)} */}
                        </ErrorMessage>
                      </div>

                      {/* Description */}
                      <div className="form-group">
                        <i className="fa fa-file-alt"></i>
                        <Field
                          component="textarea"
                          type="text"
                          className="form-control"
                          placeholder="Description"
                          name="moTa"
                          onChange={handleChange}
                        />
                        <ErrorMessage name="moTa">
                          {/* {(msg) => renderMsg(msg)} */}
                        </ErrorMessage>
                      </div>

                      {/* Picture */}
                      <div className="form-group">
                       <i className="fa fa-file-image"></i>
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="Picture"
                          name="hinhAnh"
                          onChange={handleChange}
                        />
                        <ErrorMessage name="hinhAnh">
                          {/* {(msg) => renderMsg(msg)} */}
                        </ErrorMessage>
                      </div>

                      <div className="row">
                        <div className="col-6 pl-0 pr-1">
                          {/* Group */}
                          <div className="form-group">
                            <i className="fa fa-users"></i>
                            <Field
                              component="select"
                              type="text"
                              className="form-control"
                              name="maNhom"
                              onChange={handleChange}
                            >
                              <option>GP01</option>
                              <option>GP02</option>
                              <option>GP03</option>
                              <option>GP04</option>
                              <option>GP05</option>
                              <option>GP06</option>
                              <option>GP07</option>
                              <option>GP08</option>
                              <option>GP09</option>
                              <option>GP10</option>
                            </Field>
                          </div>
                        </div>
                        <div className="col-6 pr-0 pl-1">
                          {/*Date*/}
                          <div className="form-group">
                            <i className="fa fa-calendar-alt"></i>
                            <Field
                              type="text"
                              className="form-control"
                              placeholder="Date"
                              name="ngayTao"
                              onChange={handleChange}
                              readOnly
                            />
                            <ErrorMessage name="ngayTao">
                              {/* {(msg) => renderMsg(msg)} */}
                            </ErrorMessage>
                          </div>
                        </div>
                      </div>

                      {/* Category */}
                      <div className="form-group">
                        <i className="fa fa-list-ol"></i>
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="Category"
                          name="maDanhMucKhoaHoc"
                          onChange={handleChange}
                        />
                        <ErrorMessage name="maDanhMucKhoaHoc">
                          {/* {(msg) => renderMsg(msg)} */}
                        </ErrorMessage>
                      </div>
                      <button
                        type="submit"
                        className="btn--red btn--sign-up"
                        // data-dismiss="modal"
                      >
                        Update
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {courseList.map((khoaHoc, index) => {
          return (
            <div className="col-sm-4 mb-5" key={index}>
              <div className="card">
                <img
                  className="card-img-top"
                  style={{ height: "200px" }}
                  src={khoaHoc.hinhAnh}
                  alt="img"
                />
                <div className="card-body">
                  <h4 className="card-title text-primary font-weight-bold">
                    {khoaHoc.tenKhoaHoc}
                  </h4>
                  <p className="card-text font-weight-bolder">
                    Course ID:{" "}
                    <span className="font-weight-normal">
                      {khoaHoc.maKhoaHoc}
                    </span>
                  </p>
                  <p className="card-text font-weight-bolder">
                    Aliases:{" "}
                    <span className="font-weight-normal">{khoaHoc.biDanh}</span>
                  </p>
                  <p className="card-text font-weight-bolder">
                    Describe:{" "}
                    <span
                      className="font-weight-normal"
                      style={{
                        height: "45px",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {khoaHoc.moTa}
                    </span>
                  </p>
                  <p className="card-text font-weight-bolder">
                    View:{" "}
                    <span className="font-weight-normal">
                      {khoaHoc.luotXem}
                    </span>
                  </p>
                  <p className="card-text font-weight-bolder">
                    Innitiated date:{" "}
                    <span className="font-weight-normal">
                      {khoaHoc.ngayTao}
                    </span>
                  </p>
                  <p className="card-text font-weight-bolder">
                    <span className="font-weight-normal">
                      {khoaHoc.maDanhMucKhoaHoc}
                    </span>
                  </p>
                  <p className="card-text font-weight-bolder">
                    <span className="font-weight-normal">
                      {khoaHoc.taiKhoanNguoiTao}
                    </span>
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    className="btn btn-primary ml-3 mb-3"
                    style={{ fontSize: "14px" }}
                    data-toggle="modal"
                    data-target="#courseUpdateId"
                    onClick={() => handleUpdate(khoaHoc.maKhoaHoc)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger ml-3 mb-3"
                    style={{ fontSize: "14px" }}
                    onClick={() => handleDelete(khoaHoc.maKhoaHoc)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
