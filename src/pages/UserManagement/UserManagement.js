import React, { useState, useEffect, Fragment } from "react";
import {
  accountInformation,
  handleDeleteUserAction,
  handleInsertUserAction,
  handleUpdateUserAction,
  userListAction,
} from "../../redux/actions/UserAction";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./UserManagement.scss";

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
  //   matKhau: yup
  //     .string()
  //     .min(6, "* Minimum 6 characters")
  //     .required("* Pasword cannot be empty!"),
  //   xacNhan: yup
  //     .string()
  //     .oneOf([yup.ref("matKhau")], "* Password's not match")
  //     .required("* Confirm cannot be empty!"),
});

export default function UserManagement(props) {
  let [userList, setUserList] = useState([]);

  let [user, setUser] = useState({});

  const userGroup = useSelector((state) => state.UserReducer.group);

  useEffect(() => {
    userListAction(userGroup, setUserList);
  }, [userList, userGroup]);

  const handleSubmit = (values) => {
    console.log(values);
    handleInsertUserAction(values);
    console.log(document.getElementById("insert").dataset.dismiss);
    document.getElementById("insert").dataset.dismiss = false;
    console.log(document.getElementById("insert").dataset.dismiss);
  };

  const handleDelete = (id) => {
    console.log(id);
    handleDeleteUserAction(id);
  };

  const handleUpdate = (values) => {
    console.log(values);
    // dispatch({ type: update, userUpdate: values });
    accountInformation(setUser, values);
  };
  const handleSubmitUpdate = (values) => {
    console.log(values);

    // values.preventDefault();

    handleUpdateUserAction(values);
  };
  
  const renderTable = (user, index) => {
    if (index % 2 === 0) {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{user.taiKhoan}</td>
          <td>{user.hoTen}</td>
          <td>{user.email}</td>
          <td>{user.soDT}</td>
          <td>{user.maLoaiNguoiDung}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(user.taiKhoan)}
            >
              X
            </button>
            <button
              className="btn btn-info"
              data-toggle="modal"
              data-target="#modelUpdateId"
              onClick={() => {
                handleUpdate(user);
              }}
            >
              Update
            </button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr key={index} className="bg-secondary text-light">
          <td>{index + 1}</td>
          <td>{user.taiKhoan}</td>
          <td>{user.hoTen}</td>
          <td>{user.email}</td>
          <td>{user.soDT}</td>
          <td>{user.maLoaiNguoiDung}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(user.taiKhoan)}
            >
              X
            </button>
            <button
              className="btn btn-info"
              data-toggle="modal"
              data-target="#modelUpdateId"
              onClick={() => {
                handleUpdate(user);
              }}
            >
              Update
            </button>
          </td>
        </tr>
      );
    }
  };

  return (
    <Fragment>
      <div>
        {/* Button trigger modal */}
        <div className="d-flex justify-content-end mb-5">
          <button
            className="btn btn-success btn-lg p-3"
            style={{ fontSize: "14px" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            Insert
          </button>
        </div>

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
                        <ErrorMessage name="taiKhoan"></ErrorMessage>
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
                          {/* {(msg) => renderMsg(msg)} */}
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
                          {/* {(msg) => renderMsg(msg)} */}
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
                          {/* {(msg) => renderMsg(msg)} */}
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
                          {/* {(msg) => renderMsg(msg)} */}
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
                          {/* {(msg) => renderMsg(msg)} */}
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
                      {/* {renderButton()} */}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
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
                    taiKhoan: user.taiKhoan,
                    matKhau: user.matKhau,
                    hoTen: user.hoTen,
                    soDT: user.soDT,
                    maNhom: userGroup,
                    email: user.email,
                    maLoaiNguoiDung: user.maLoaiNguoiDung,
                  }}
                  validationSchema={updateUserSchema}
                  onSubmit={handleSubmitUpdate}
                  // handleChange={handleChangeUpdate}
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
                          // disabled
                        />
                        <ErrorMessage name="taiKhoan"></ErrorMessage>
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
                          {/* {(msg) => renderMsg(msg)} */}
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
                          {/* {(msg) => renderMsg(msg)} */}
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
                          {/* {(msg) => renderMsg(msg)} */}
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
                      {/* {renderButton()} */}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>

      <table className="table">
        <thead className="text-center">
          <tr>
            <th>No.</th>
            <th>User name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>User type</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-center">
          {userList.map((user, index) => {
            return renderTable(user, index);
          })}
        </tbody>
      </table>
    </Fragment>
  );
}
