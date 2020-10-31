// import React, { Component } from "react";
import React from "react";
import "./LoginContent.scss";
// import { qlNguoiDungService } from "../../../services/QuanLyNguoiDungService";
import { NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
// import { loginAction } from "../../../redux/actions/UserAction";
// import { userService } from "../../../services/UserService";
// import { login } from "../../../redux/types/UserType";
// import { useDispatch } from "react-redux";

export const LoginContent = () => {
  // let [state, setUser] = useState({ taiKhoan: "", matKhau: "" });

  // console.log(user);
  // const propUser = useSelector((state) => state.UserReducer.user);
  // console.log("new: ", state);
  // let handleChange = (event) => {
  //   let { name, value } = event.target;
  //   setUser({ ...state, [name]: value });
  //   console.log("new2: ", state);
  // };
  // console.log("new2: ", state);

  // let dispatch = useDispatch();
  // const handleSubmit = (value) => {
  //   console.log("submit: ", value);
  //   // event.preventDefault();
  //   // console.log(user);
  //   // qlNguoiDungService
  //   //   .dangNhap(values)
  //   //   .then((res) => {
  //   //     console.log(res.data);
  //   dispatch(loginAction(value));
  //   // useEffect(() => {
  //   // userService
  //   //   .dangNhap(value)
  //   //   .then((res) => {
  //   //     console.log(res.data);
  //   //     // dispatch({
  //   //     //   type: login,
  //   //     //   user: res.data,
  //   //     // });
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err.response.data);
  //   //   });
  //   // }, []);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err.response.data);
  //   //   });
  // };
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
              // onSubmit={handleSubmit}
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
// export default class LogInContent extends Component {
//   handleSubmit = (values) => {
//     qlNguoiDungService
//       .dangNhap(values)
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err.response.data);
//       });
//   };
//   render() {
//     return (
//       <div>

//       </div>
//     );
//   }
// }
