import React, { useState, useEffect, Fragment } from "react";
import "./ProfileContent.scss";
import { useSelector } from "react-redux";
import {
  accountInformation,
  handleUpdateUserAction,
} from "../../../redux/actions/UserAction";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { handleCancelRegisterCourseAction } from "../../../redux/actions/CourseAction";

const profileSchema = yup.object().shape({
  hoTen: yup.string().required("* Name cannot be empty!"),
  email: yup
    .string()
    .required("* Email cannot be empty!")
    .email("* Email is required!"),
  soDT: yup
    .string()
    .required("* Phone cannot be empty!")
    .matches(/^[0-9]+$/),
  currentPwd: yup
    .string()
    .oneOf([yup.ref("matKhau")], "* Password's not match")
    .required("* Confirm cannot be empty!"),
  newPwd: yup
    .string()
    .min(6, "* Minimum 6 characters")
    .required("* Pasword cannot be empty!"),
  reNewPwd: yup
    .string()
    .oneOf([yup.ref("newPwd")], "* Password's not match")
    .required("* Confirm cannot be empty!"),
});

export default function ProfileContent() {
  const [userInfo, setUserInfo] = useState([]);
  const propUser = useSelector((state) => state.UserReducer.userLogin);
  useEffect(() => {
    accountInformation(setUserInfo, propUser);
  }, [userInfo, propUser]);

  const handleSubmit = (values) => {
    if (values.matKhau !== values.newPwd) {
      values.matKhau = values.newPwd;
    }
    handleUpdateUserAction(values);
    // history.push("/home");
  };
  const handleCancelRegistration = (courID, userID) => {
    handleCancelRegisterCourseAction(courID, userID);
  };

  const renderMsg = (msg) => {
    return (
      <div className="text-danger" style={{ fontSize: "14px" }}>
        {msg}
      </div>
    );
  };

  return (
    <section className="profile container animate__animated animate__fadeIn wow">
      <div className="row">
        <div className="col-3 profile__nav">
          <div className="profile__avt text-center">
            <img className="img-fluid" src="/img/kh1.jpg" alt="avt" />
            <h4>{userInfo.taiKhoan}</h4>
          </div>

          <ul
            className="nav nav-pills mb-3 flex-column"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item active" role="presentation">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="true"
              >
                Profile
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Contact
              </a>
            </li>

            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-course-tab"
                data-toggle="pill"
                href="#pills-course"
                role="tab"
                aria-controls="pills-course"
                aria-selected="false"
              >
                Enrolled course
              </a>
            </li>
          </ul>
        </div>

        <div className="col-9 profile__content">
          <div className="tab-content" id="pills-tabContent">
            <Formik
              enableReinitialize={true}
              initialValues={{
                taiKhoan: `${userInfo.taiKhoan}`,
                matKhau: `${userInfo.matKhau}`,
                hoTen: `${userInfo.hoTen}`,
                soDT: `${userInfo.soDT}`,
                maLoaiNguoiDung: `${userInfo.maLoaiNguoiDung}`,
                maNhom: `${userInfo.maNhom}`,
                email: `${userInfo.email}`,
                currentPwd: "",
                newPwd: "",
                reNewPwd: "",
              }}
              validationSchema={profileSchema}
              onSubmit={handleSubmit}
            >
              {({ handleChange }) => (
                <Fragment>
                  <div
                    className="tab-pane fade active"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="profile__header text-center">
                      <h3>Public profile</h3>
                      <p>Add information about yourself</p>
                    </div>
                    <div className="profile__body">
                      <Form>
                        <h3>Basics: </h3>
                        <div className="form-group">
                          <Field
                            type="text"
                            name="hoTen"
                            className="form-control"
                            placeholder="Name"
                            onChange={handleChange}
                          />
                          <ErrorMessage name="hoTen">
                            {(msg) => renderMsg(msg)}
                          </ErrorMessage>
                        </div>

                        <h3>Password: </h3>
                        <div className="form-group">
                          <Field
                            type="password"
                            name="currentPwd"
                            className="form-control"
                            placeholder="Enter Current Password"
                            onChange={handleChange}
                          />
                          <ErrorMessage name="currentPwd">
                            {(msg) => renderMsg(msg)}
                          </ErrorMessage>
                        </div>

                        <div className="form-group">
                          <Field
                            type="password"
                            name="newPwd"
                            className="form-control"
                            placeholder="Enter New Password"
                            onChange={handleChange}
                          />
                          <ErrorMessage name="newPwd">
                            {(msg) => renderMsg(msg)}
                          </ErrorMessage>
                        </div>

                        <div className="form-group">
                          <Field
                            type="password"
                            name="reNewPwd"
                            className="form-control"
                            placeholder="Re-type New Password"
                            onChange={handleChange}
                          />
                          <ErrorMessage name="reNewPwd">
                            {(msg) => renderMsg(msg)}
                          </ErrorMessage>
                        </div>

                        <div className="profile__footer d-flex justify-content-center">
                          <button type="submit" className="btn--red">
                            Save
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                  {/*  */}

                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="profile__header text-center">
                      <h3>Contact</h3>
                      <p>Add information about yourself</p>
                    </div>
                    <div className="profile__body">
                      <Form>
                        <div className="form-group">
                          <Field
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <Field
                            type="text"
                            name="soDT"
                            className="form-control"
                            placeholder="Phone"
                            onChange={handleChange}
                          />
                        </div>

                        <h3>Password: </h3>
                        <div className="form-group">
                          <Field
                            type="password"
                            name="currentPwd"
                            className="form-control"
                            placeholder="Enter Current Password"
                            onChange={handleChange}
                          />
                          <ErrorMessage name="currentPwd">
                            {(msg) => renderMsg(msg)}
                          </ErrorMessage>
                        </div>

                        <div className="form-group">
                          <Field
                            type="password"
                            name="newPwd"
                            className="form-control"
                            placeholder="Enter New Password"
                            onChange={handleChange}
                          />
                          <ErrorMessage name="newPwd">
                            {(msg) => renderMsg(msg)}
                          </ErrorMessage>
                        </div>

                        <div className="form-group">
                          <Field
                            type="password"
                            name="reNewPwd"
                            className="form-control"
                            placeholder="Re-type New Password"
                            onChange={handleChange}
                          />
                          <ErrorMessage name="reNewPwd">
                            {(msg) => renderMsg(msg)}
                          </ErrorMessage>
                        </div>
                        <div className="profile__footer d-flex justify-content-center">
                          <button type="submit" className="btn--red">
                            Save
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                  {/*  */}
                  <div
                    className="tab-pane fade"
                    id="pills-course"
                    role="tabpanel"
                    aria-labelledby="pills-course-tab"
                  >
                    <div className="profile__header text-center">
                      <h3>Course</h3>
                      {/* <p>Add information about yourself</p> */}
                    </div>
                    <div className="profile__body">
                      <div>
                        {userInfo.chiTietKhoaHocGhiDanh?.map(
                          (course, index) => {
                            return (
                              <div key={index}>
                                <div className="row">
                                  <div className="col-sm-3  d-flex align-items-center">
                                    <p>{course.maKhoaHoc}</p>
                                  </div>

                                  <div className="col-sm-7  d-flex align-items-center justify-content-center flex-column">
                                    <h3>{course.tenKhoaHoc}</h3>
                                    <p>{course.moTa}</p>
                                  </div>

                                  <div className="col-sm-2  d-flex align-items-center">
                                    <button className="btn btn-success mx-1">
                                      <NavLink
                                        className="text-light"
                                        to={`/detail/${course.maKhoaHoc}`}
                                      >
                                        Detail
                                      </NavLink>
                                    </button>
                                    <button
                                      className="btn btn-danger  mx-1"
                                      onClick={() => {
                                        handleCancelRegistration(
                                          course.maKhoaHoc,
                                          userInfo.taiKhoan
                                        );
                                      }}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </Fragment>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
