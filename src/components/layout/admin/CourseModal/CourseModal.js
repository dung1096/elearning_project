import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  courseCategoryListAction,
  handleInsertCourseAction,
  handleUpdateCourseAction,
} from "../../../../redux/actions/CourseAction";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const insertCourseSchema = yup.object().shape({
  maKhoaHoc: yup.string().required("* ID cannot be empty!"),
  biDanh: yup.string().required("* Aliases cannot be empty!"),
  tenKhoaHoc: yup.string().required("* Course Name cannot be empty!"),
});
const updateCourseSchema = yup.object().shape({
  biDanh: yup.string().required("* Aliases cannot be empty!"),
  tenKhoaHoc: yup.string().required("* Course Name cannot be empty!"),
});

export default function CourseModal({ courseDetail }) {
  let category = { ...courseDetail.danhMucKhoaHoc };
  let userCreate = { ...courseDetail.nguoiTao };

  const [cate, setCategory] = useState([]);

  const propUser = useSelector((state) => state.UserReducer.userLogin);

  useEffect(() => {
    courseCategoryListAction(setCategory);
  }, []);

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

  const handleSubmit = (values) => {
    console.log(values);

    handleInsertCourseAction(values);
  };

  const handleSubmitUpdate = (values) => {
    console.log(values);
    handleUpdateCourseAction(values);
  };

  const renderMsg = (msg) => {
    return (
      <div className="text-danger" style={{ fontSize: "14px" }}>
        {msg}
      </div>
    );
  };

  return (
    <Fragment>
      {/* Modal */}
      <div className="modal fade" id="courseId" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title form-main__title">Insert</h3>
              <button className="close" data-dismiss="modal" aria-label="Close">
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
                  maDanhMucKhoaHoc: "BackEnd",
                  taiKhoanNguoiTao: `${propUser.taiKhoan}`,
                }}
                validationSchema={insertCourseSchema}
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
                            {(msg) => renderMsg(msg)}
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
                            {(msg) => renderMsg(msg)}
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
                        {(msg) => renderMsg(msg)}
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
                        </div>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="form-group">
                      <i className="fa fa-list-ol"></i>
                      <Field
                        component="select"
                        type="text"
                        className="form-control"
                        name="maDanhMucKhoaHoc"
                        onChange={handleChange}
                      >
                        {cate.map((item, index) => {
                          return <option key={index}>{item.maDanhMuc}</option>;
                        })}
                      </Field>
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
              <button className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body form-main__content">
              <Formik
                enableReinitialize={true}
                initialValues={{
                  maKhoaHoc: `${courseDetail.maKhoaHoc}`,
                  biDanh: `${courseDetail.biDanh}`,
                  tenKhoaHoc: `${courseDetail.tenKhoaHoc}`,
                  moTa: `${courseDetail.moTa}`,
                  luotXem: `${courseDetail.luotXem}`,
                  danhGia: 0,
                  hinhAnh: `${courseDetail.hinhAnh}`,
                  maNhom: `${courseDetail.maNhom}`,
                  ngayTao: `${courseDetail.ngayTao}`,
                  maDanhMucKhoaHoc: `${category.maDanhMucKhoahoc}`,
                  taiKhoanNguoiTao: `${userCreate.taiKhoan}`,
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
                            {(msg) => renderMsg(msg)}
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
                        {(msg) => renderMsg(msg)}
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
                        </div>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="form-group">
                      <i className="fa fa-list-ol"></i>
                      <Field
                        component="select"
                        type="text"
                        className="form-control"
                        placeholder="Category"
                        name="maDanhMucKhoaHoc"
                        onChange={handleChange}
                      >
                        {cate.map((item, index) => {
                          return <option key={index}>{item.maDanhMuc}</option>;
                        })}
                      </Field>
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
    </Fragment>
  );
}
