import React from "react";
import "./LoginContent.scss";
import { NavLink } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { loginAction } from "../../../redux/actions/UserAction";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { message } from 'antd';

const loginUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("* ID cannot be empty!"),
  matKhau: yup.string().required("* Pasword cannot be empty!"),
});

export const LoginContent = () => {
  let dispatch = useDispatch();
  const history = useHistory();
 

  // useEffect(() => {
  //  console.log("")
  // }, [mess]);

  const handleSubmit = (value) => {
    dispatch(loginAction(value,history));
  };

    const renderMsg = (msg) => {
    return (
      <div className="text-danger" style={{ fontSize: "14px" }}>
        {msg}
      </div>
    );
  };
  return (
    <section className="form-main log-in container-fluid animate__animated animate__fadeIn wow">
      <div className="row">
        <div className="col-4"></div>

        <div className="col-4">
          <div className="form-main__title log-in__title">
            <h3>Log In to Your Udemy Account</h3>
          </div>
          <div className="form-main__content log-in__form">
            <Formik
              initialValues={{ taiKhoan: "", matKhau: "" }}
              validationSchema={loginUserSchema}
              onSubmit={handleSubmit}
            >
              {({ handleChange }) => (
                <Form>
                  {/* ID */}
                  <div className="form-group">
                    <i className="fa fa-id-card"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ID"
                      aria-describedby="helpId"
                      name="taiKhoan"
                      onChange={handleChange}
                    />
                  </div>
                  <ErrorMessage name="taiKhoan">
                    {(msg) => renderMsg(msg)}
                  </ErrorMessage>

                  {/* Passwork */}
                  <div className="form-group">
                    <i className="fa fa-lock"></i>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      aria-describedby="helpId"
                      name="matKhau"
                      onChange={handleChange}
                    />
                  </div>
                  <ErrorMessage name="matKhau">
                    {(msg) => renderMsg(msg)}
                  </ErrorMessage>

                  <button type="submit" className="btn--red btn--sign-up">
                    Log In
                  </button>
                </Form>
              )}
            </Formik>
            <div>
              <div className="log-in__text">
                <p>
                  or <a href="/">Forgot Password</a>
                </p>
              </div>
              <div className="form-main__footer log-in__footer">
                <p>
                  Don't have an account? <NavLink to="/signup">Sign up</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
      
    </section>
  );
};

export default LoginContent;
