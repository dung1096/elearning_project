import React, { useState, useEffect, Fragment } from "react";
// import {
//   handleDeleteUserAction,
//   handleInsertUserAction,
//   userListAction,
// } from "../../redux/actions/UserAction";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./UserManagement.scss";
import { chose } from "../../redux/types/UserType";

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
  matKhau: yup
    .string()
    .min(6, "* Minimum 6 characters")
    .required("* Pasword cannot be empty!"),
  xacNhan: yup
    .string()
    .oneOf([yup.ref("matKhau")], "* Password's not match")
    .required("* Confirm cannot be empty!"),
});

export default function UserManagement() {
  // let [dsNguoiDung, setDSNguoiDung] = useState([]);

  // // let [nguoiDung, setNguoiDung] = useState({ values });

  // let dispatch = useDispatch();
  // // let valid = true;

  // // let propUser = useSelector((state) => state.UseReducer.userChose);

  // useEffect(() => {
  //   userListAction(setDSNguoiDung);
  // }, [dsNguoiDung]);

  // // let handleChange = (event) => {
  // //   let { name, value } = event.target;
  // //   setNguoiDung({ ...nguoiDung, [name]: value });
  // // };

  // const handleSubmit = (values) => {
  //   console.log(values);
  //   // values.preventDefault();

  //   handleInsertUserAction(values);
  // };

  // const handleDelete = (id) => {
  //   console.log(id);
  //   handleDeleteUserAction(id);
  // };

  // const handleUpdate = (values) => {
  //   console.log(values);
  //   dispatch({ type: chose, userChose: values });

  //   // setNguoiDung(values);
  //   // valid = false;
  //   // handleDeleteAction(values);
  // };
  // // const renderButton = (msg) => {
  // //   if (msg) {
  // //     return (
  // //       <button
  // //         type="submit"
  // //         className="btn--red btn--sign-up"
  // //         data-dismiss="modal"
  // //         disabled
  // //       >
  // //         Insert
  // //       </button>
  // //     );
  // //   } else {
  // //     return (
  // //       <button
  // //         type="submit"
  // //         className="btn--red btn--sign-up"
  // //         data-dismiss="modal"
  // //       >
  // //         Insert
  // //       </button>
  // //     );
  // //   }
  // // };
  const renderTable = (nguoiDung, index) => {
    if (index % 2 === 0) {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{nguoiDung.taiKhoan}</td>
          <td>{nguoiDung.hoTen}</td>
          <td>{nguoiDung.email}</td>
          <td>{nguoiDung.soDt}</td>
          <td>{nguoiDung.maLoaiNguoiDung}</td>
          <td>
            <button
              className="btn btn-danger"
              // onClick={() => handleDelete(nguoiDung.taiKhoan)}
            >
              X
            </button>
            <button
              className="btn btn-info"
              data-toggle="modal"
              data-target="#modelId"
              // onClick={() => {
              //   handleUpdate(nguoiDung);
              // }}
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
          <td>{nguoiDung.taiKhoan}</td>
          <td>{nguoiDung.hoTen}</td>
          <td>{nguoiDung.email}</td>
          <td>{nguoiDung.soDt}</td>
          <td>{nguoiDung.maLoaiNguoiDung}</td>
          <td>
            <button
              className="btn btn-danger"
              // onClick={() => handleDelete(nguoiDung.taiKhoan)}
            >
              X
            </button>
            <button
              className="btn btn-info"
              // onClick={() => {
              //   handleUpdate(nguoiDung);
              // }}
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
            onClick={() => {
              // valid = true;
              // setNguoiDung({ taiKhoan: "", hoTen: "", email: "", soDt: "" });
            }}
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
                  validationSchema={updateUserSchema}
                  // onSubmit={handleSubmit}
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
                          // value={nguoiDung.taiKhoan}
                          onChange={handleChange}
                        />
                        <ErrorMessage name="taiKhoan"></ErrorMessage>
                      </div>
                      {/* {valid ? (
                        <div className="form-group">
                          <i className="fa fa-id-card"></i>
                          <Field
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            name="taiKhoan"
                            // value={nguoiDung.taiKhoan}
                            onChange={handleChange}
                          />
                          <ErrorMessage name="taiKhoan"></ErrorMessage>
                        </div>
                      ) : (
                        <div className="form-group">
                          <i className="fa fa-id-card"></i>
                          <Field
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            name="taiKhoan"
                            // value={nguoiDung.taiKhoan}
                            onChange={handleChange}
                            disabled
                          />
                          <ErrorMessage name="taiKhoan"></ErrorMessage>
                        </div>
                      )} */}
                      {/* Name */}
                      <div className="form-group">
                        <i className="fa fa-user" />
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          name="hoTen"
                          // value={nguoiDung.hoTen}
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
                          // value={nguoiDung.email}
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
                          // value={nguoiDung.soDt}
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
                          // value={nguoiDung.matKhau}
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
                          // value={nguoiDung.matKhau}
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
                        // data-dismiss="modal"
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
          {/* {dsNguoiDung.map((nguoiDung, index) => {
            return renderTable(nguoiDung, index);
          })} */}
        </tbody>
      </table>
    </Fragment>
  );
}