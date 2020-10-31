import React from "react";
import "./SignUpContent.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { signUpAction } from "../../../redux/actions/UserAction";

const signUpUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("* ID cannot be empty!"),
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
  // maNhom: yup.string().required("* Field is required!"),
  checked: yup.boolean().oneOf([true], "*"),
});

export const SignUpContent = () => {
  const history = useHistory();
  const handleSubmit = (values) => {
    signUpAction(values);
    history.push("/home");
  };
  const renderMsg = (msg) => {
    return (
      <div className="text-danger" style={{ fontSize: "14px" }}>
        {msg}
      </div>
    );
  };
  return (
    <section className="form-main sign-up container-fluid animate__animated animate__fadeIn wow">
      <div className="row">
        <div className="col-4" />
        <div className="col-4">
          <div className="form-main__title sign-up__title">
            <h3>Sign Up and Start Learning</h3>
          </div>
          <div className="form-main__content sign-up__form">
            <Formik
              initialValues={{
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDT: "",
                maNhom: "GP01",
                email: "",
                xacNhan: "",
                checked: false,
              }}
              validationSchema={signUpUserSchema}
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
                      placeholder="ID"
                      aria-describedby="helpId"
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
                      aria-describedby="helpId"
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
                      aria-describedby="helpId"
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
                      aria-describedby="helpId"
                      name="soDT"
                      onChange={handleChange}
                    />
                    <ErrorMessage name="soDT">
                      {(msg) => renderMsg(msg)}
                    </ErrorMessage>
                  </div>
                  {/* Passwork */}
                  <div className="form-group">
                    <i className="fa fa-lock" />
                    <Field
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      aria-describedby="helpId"
                      name="matKhau"
                      onChange={handleChange}
                    />
                    <ErrorMessage name="matKhau">
                      {(msg) => renderMsg(msg)}
                    </ErrorMessage>
                    <div className="sign-up__strenght d-flex justify-content-start">
                      <div className="sign-up__strenght__box" />
                      <div className="sign-up__strenght__box" />
                      <div className="sign-up__strenght__box" />
                      <div className="sign-up__strenght__box" />
                    </div>
                  </div>

                  {/* Passwork */}
                  <div className="form-group">
                    <i className="fa fa-lock" />
                    <Field
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      aria-describedby="helpId"
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
                      aria-describedby="helpId"
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

                  <div className="form-check">
                    <label className="form-check-label d-flex justify-content-start">
                      <Field
                        type="checkbox"
                        name="checked"
                        onChange={handleChange}
                      />
                      <span className="checkbox-text">
                        Yes! I want to get the most out of Udemy by receiving
                        emails with exclusive deals, personal recommendations
                        and learning tips!
                      </span>
                    </label>
                    <ErrorMessage name="checked">
                      {(msg) => renderMsg(msg)}
                    </ErrorMessage>
                  </div>
                  <button type="submit" className="btn--red btn--sign-up">
                    Sign Up
                  </button>
                </Form>
              )}
            </Formik>

            <div className="sign-up__text">
              <p>
                By signing up, you agree to our <a href="/">Terms of Use</a> and{" "}
                <a href="/">Privacy Policy</a>
              </p>
            </div>
            <div className="form-main__footer sign-up__footer">
              <p>
                Already have an account? <NavLink to="/login">Log In</NavLink>
              </p>
            </div>
          </div>
        </div>
        <div className="col-4" />
      </div>
    </section>
  );
};

export default SignUpContent;
