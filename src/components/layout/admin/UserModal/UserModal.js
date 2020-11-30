import React, { Fragment, useState} from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import {
  handleInsertUserAction,
  handleUpdateUserAction,
} from "../../../../redux/actions/UserAction";

import {
  handleAcceptRegisterCourseAction,
  handleCancelRegisterCourseAction,
} from "../../../../redux/actions/CourseAction";

const insertUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("* Username cannot be empty!"),
  hoTen: yup.string().required("* Name cannot be empty!"),
  email: yup
    .string()
    .required("* Email cannot be empty!")
    .email("* Email is required!"),
  soDT: yup
    .string()
    .required("* Phone cannot be empty!")
    .matches(/^[0-9]+$/),
  matKhau: yup
    .string()
    .min(6, "* Minimum 6 characters")
    .required("* Pasword cannot be empty!"),
  xacNhan: yup
    .string()
    .oneOf([yup.ref("matKhau")], "* Password's not match")
    .required("* Confirm cannot be empty!"),
});
const updateUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("* Username cannot be empty!"),
  hoTen: yup.string().required("* Name cannot be empty!"),
  email: yup
    .string()
    .required("* Email cannot be empty!")
    .email("* Email is required!"),
  soDT: yup
    .string()
    .required("* Phone cannot be empty!")
    .matches(/^[0-9]+$/),
});

export default function UserModal({
  notRegistered,
  unregistered,
  registered,
  user,
}) {
  let [course, setCourse] = useState({ tenKhoaHoc: "Khóa Học" });

  const userGroup = useSelector((state) => state.UserReducer.group);

  const handleSubmit = (values) => {
    handleInsertUserAction(values);
    // console.log(document.getElementById("insert").dataset.dismiss);
    document.getElementById("insert").dataset.dismiss = false;
    // console.log(document.getElementById("insert").dataset.dismiss);
  };

  let handleClickCourse = (course) => {
    setCourse(course);
  };

  const handleSubmitUpdate = (values) => {
    handleUpdateUserAction(values);
  };

  const handleAcceptRegister = (course) => {
    handleAcceptRegisterCourseAction(course.maKhoaHoc, user.taiKhoan);
  };

  const handleCancelRegister = (course) => {
    handleCancelRegisterCourseAction(course.maKhoaHoc, user.taiKhoan);
  };

  const renderMsg = (msg) => {
    return (
      <div className="text-danger" style={{ fontSize: "14px" }}>
        {msg}
      </div>
    );
  };
  

  const renderTableRegister = (course, index, bool) => {
  
    if (index % 2 === 0) {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{course.tenKhoaHoc}</td>
          <td className="d-flex justify-content-end">
            {bool === true ? (
              <button
                type="button"
                className="btn btn-primary ml-3"
                onClick={() => {
                  handleAcceptRegister(course);
                }}
              >
                Accept
              </button>
            ) : (
              <div></div>
            )}

            <button
              className="btn btn-danger"
              onClick={() => {
                handleCancelRegister(course);
              }}
            >
              Cancel
            </button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr key={index} className="bg-secondary text-light">
          <td>{index + 1}</td>
          <td>{course.tenKhoaHoc}</td>
          <td className="d-flex justify-content-end">
            {bool === true ? (
              <button
                type="button"
                className="btn btn-primary ml-3"
                onClick={() => {
                  handleAcceptRegister(course);
                }}
              >
                Accept
              </button>
            ) : (
              <div></div>
            )}

            <button
              className="btn btn-danger"
              onClick={() => {
                handleCancelRegister(course);
              }}
            >
              Cancel
            </button>
          </td>
        </tr>
      );
    }
  };
  return (
    <Fragment>
      {/* Modal */}
      <div className="modal fade" id="modalRegisterId" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title form-main__title">Register</h3>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body form-main__content">
              <div className="d-flex justify-content-between">
                <div className="dropdown">
                  <button
                    className="dropdown-toggle"
                    id="triggerId"
                    data-toggle="dropdown"
                  >
                    {course.tenKhoaHoc}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="triggerId">
                    {notRegistered.map((course, index) => {
                      return (
                        <div
                          key={index}
                          className="dropdown-item"
                          onClick={() => {
                            handleClickCourse(course);
                          }}
                        >
                          {course.tenKhoaHoc}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary ml-3"
                  onClick={() => {
                    handleAcceptRegister(course);
                  }}
                >
                  Register
                </button>
              </div>
              {/*  */}
              <h4>The course is waiting for validation</h4>
              <table className="table">
                <thead className="text-center">
                  <tr>
                    <th>No.</th>
                    <th>Course name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {unregistered.map((course, index) => {
                    return renderTableRegister(course, index, true);
                  })}
                </tbody>
              </table>
              {/*  */}
              <h4>The course has been verified</h4>
              <table className="table">
                <thead className="text-center">
                  <tr>
                    <th>No.</th>
                    <th>Course name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {registered.map((course, index) => {
                    return renderTableRegister(course, index, false);
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      {/* Modal */}
      <div className="modal fade" id="modelId" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title form-main__title">Insert</h3>
              <button
                type="button"
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
                  taiKhoan: "",
                  matKhau: "",
                  hoTen: "",
                  soDT: "",
                  maNhom: "GP01",
                  email: "",
                  xacNhan: "",
                  maLoaiNguoiDung: "HV",
                }}
                validationSchema={insertUserSchema}
                onSubmit={handleSubmit}
              >
                {({ handleChange }) => (
                  <Form>
                    {/* ID */}
                    <div className="form-group">
                      <i className="fa fa-id-card"></i>
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        name="taiKhoan"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="taiKhoan">
                        {(msg) => renderMsg(msg)}
                      </ErrorMessage>
                    </div>

                    {/* Name */}
                    <div className="form-group">
                      <i className="fa fa-user" />
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        name="hoTen"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="hoTen">
                        {(msg) => renderMsg(msg)}
                      </ErrorMessage>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <i className="fa fa-envelope" />
                      <Field
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="email">
                        {(msg) => renderMsg(msg)}
                      </ErrorMessage>
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                      <i className="fa fa-phone" />
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        name="soDT"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="soDT">
                        {(msg) => renderMsg(msg)}
                      </ErrorMessage>
                    </div>

                    {/* Password */}
                    <div className="form-group">
                      <i className="fa fa-lock" />
                      <Field
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="matKhau"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="matKhau">
                        {(msg) => renderMsg(msg)}
                      </ErrorMessage>
                    </div>

                    {/* Password Confirm*/}
                    <div className="form-group">
                      <i className="fa fa-lock" />
                      <Field
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        name="xacNhan"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="xacNhan">
                        {(msg) => renderMsg(msg)}
                      </ErrorMessage>
                    </div>

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

                    {/* Type */}
                    <div className="form-group">
                      <i className="fa fa-user"></i>
                      <Field
                        component="select"
                        type="text"
                        className="form-control"
                        name="maLoaiNguoiDung"
                        onChange={handleChange}
                      >
                        <option>HV</option>
                        <option>GV</option>
                      </Field>
                    </div>
                    <button
                      type="submit"
                      className="btn--red btn--sign-up"
                      // data-dismiss
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
      <div className="modal fade" id="modelUpdateId" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title form-main__title">Update</h3>
              <button
                type="button"
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
                  taiKhoan: `${user.taiKhoan}`,
                  matKhau: `${user.matKhau}`,
                  hoTen: `${user.hoTen}`,
                  soDT: `${user.soDT}`,
                  maNhom: userGroup,
                  maLoaiNguoiDung: `${user.maLoaiNguoiDung}`,
                  email: `${user.email}`,
                }}
                validationSchema={updateUserSchema}
                onSubmit={handleSubmitUpdate}
              >
                {({ handleChange }) => (
                  <Form>
                    {/* ID */}
                    <div className="form-group">
                      <i className="fa fa-id-card"></i>
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        name="taiKhoan"
                        readOnly
                      />
                    </div>

                    {/* Name */}
                    <div className="form-group">
                      <i className="fa fa-user" />
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        name="hoTen"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="hoTen">
                        {(msg) => renderMsg(msg)}
                      </ErrorMessage>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <i className="fa fa-envelope" />
                      <Field
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="email">
                        {(msg) => renderMsg(msg)}
                      </ErrorMessage>
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                      <i className="fa fa-phone" />
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        name="soDT"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="soDT">
                        {(msg) => renderMsg(msg)}
                      </ErrorMessage>
                    </div>

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
                    {/* Type */}
                    <div className="form-group">
                      <i className="fa fa-user"></i>
                      <Field
                        component="select"
                        type="text"
                        className="form-control"
                        name="maLoaiNguoiDung"
                        onChange={handleChange}
                      >
                        <option>HV</option>
                        <option>GV</option>
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
