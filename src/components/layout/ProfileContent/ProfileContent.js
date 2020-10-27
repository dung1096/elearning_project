import React, { useState,useEffect,Fragment } from "react";
import "./ProfileContent.scss";
import { useSelector } from "react-redux";
import { accountInformation } from "../../../redux/actions/UserAction";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export default function ProfileContent() {
// let dispatch = useDispatch();
const [userInfo, setUserInfo] = useState([])
const propUser = useSelector((state) => state.UserReducer.userLogin);
useEffect(() => {
   accountInformation(setUserInfo,propUser);
  }, []);

  const handleChange = ()=>{}
  
  return (
    <section className="profile container animate__animated animate__fadeIn wow">
     
      <div className="row">
        <div className="col-3 profile__nav">
          <div className="profile__avt text-center">
            <img className="img-fluid" src={userInfo.hinhAnh} alt="avt" />
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
                id="pills-photo-tab"
                data-toggle="pill"
                href="#pills-photo"
                role="tab"
                aria-controls="pills-photo"
                aria-selected="false"
              >
                Photo
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
                  initialValues={{
                    taiKhoan: userInfo.taiKhoan,    
                    hoTen: userInfo.hoTen,
                    soDt: userInfo.soDt,
                    maNhom: userInfo.maNhom,
                    email:userInfo.email,
                    // maLoaiNguoiDung: nguoiDung.maLoaiNguoiDung,

                  }}
                  // validationSchema={updateUserSchema}
                  // onSubmit={handleSubmitUpdate}
                  // handleChange={handleChangeUpdate}
                >
                  {({handleChange}) => (
                    <Fragment>
                    <div
              className="tab-pane fade"
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
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      value={userInfo.hoTen}
                      onChange={handleChange}
                    />
                  </div>

                  <h3>Password: </h3>
                  <div className="form-group">
                    <Field
                      type="text"
                      name="currentPwd"
                      className="form-control"
                      placeholder="Enter Current Password"
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="newPwd"
                      className="form-control"
                      placeholder="Enter New Password"
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="ReNewPwd"
                      className="form-control"
                      placeholder="Re-type New Password"
                    />
                  </div>
                </Form>
              </div>
              <div className="profile__footer d-flex justify-content-center">
                <button className="btn--red">Save</button>
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
                      // value={userInfo.email}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="currentPwd"
                      className="form-control"
                      placeholder="Phone"
                      // value={userInfo.soDT}
                    />
                  </div>
                </Form>
              </div>
              <div className="profile__footer d-flex justify-content-center">
                <button className="btn--red">Save</button>
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

               
              </div>
              <div className="profile__footer d-flex justify-content-center">
                <button className="btn--red">Save</button>
              </div>
            </div>

                    </Fragment>
                  )}
                </Formik>

            {/* <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="profile__header text-center">
                <h3>Public profile</h3>
                <p>Add information about yourself</p>
              </div>
              <div className="profile__body">
                <form>
                  <h3>Basics: </h3>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      value={userInfo.hoTen}
                      onChange={handleChange}
                    />
                  </div>

                  <h3>Password: </h3>
                  <div className="form-group">
                    <input
                      type="text"
                      name="currentPwd"
                      className="form-control"
                      placeholder="Enter Current Password"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="newPwd"
                      className="form-control"
                      placeholder="Enter New Password"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="ReNewPwd"
                      className="form-control"
                      placeholder="Re-type New Password"
                    />
                  </div>
                </form>
              </div>
              <div className="profile__footer d-flex justify-content-center">
                <button className="btn--red">Save</button>
              </div>
            </div> */}
            {/*  */}
            {/* <div
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
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      // value={userInfo.email}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="currentPwd"
                      className="form-control"
                      placeholder="Phone"
                      // value={userInfo.soDT}
                    />
                  </div>
                </form>
              </div>
              <div className="profile__footer d-flex justify-content-center">
                <button className="btn--red">Save</button>
              </div>
            </div> */}

            {/*  */}
            {/* <div
              className="tab-pane fade"
              id="pills-course"
              role="tabpanel"
              aria-labelledby="pills-course-tab"
            >
              <div className="profile__header text-center">
                <h3>Course</h3>
                 <p>Add information about yourself</p> 
              </div>
              <div className="profile__body">

               
              </div>
              <div className="profile__footer d-flex justify-content-center">
                <button className="btn--red">Save</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
