import React from "react";
import "./ProfileContent.scss";
import { useDispatch, useSelector } from "react-redux";
import { accountInformation } from "../../../redux/actions/UserAction";

export default function ProfileContent() {
// let dispatch = useDispatch();
const propUser = useSelector((state) => state.UserReducer.userLogin);
console.log(propUser)
console.log(propUser.taiKhoan)
//  dispatch(accountInformation(propUser.taiKhoan));
useDispatch(accountInformation(propUser.taiKhoan));
 
  
  return (
    <section className="profile container animate__animated animate__fadeIn wow">
      <div className="row">
        <div className="col-3 profile__nav">
          <div className="profile__avt text-center">
            <img className="img-fluid" src="/img/teacher.jpg" alt="avt" />
            <h4>Name</h4>
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
                aria-selected="false"
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
          </ul>
        </div>

        <div className="col-9 profile__content">
          <div className="tab-content" id="pills-tabContent">
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
                <form>
                  <h3>Basics: </h3>
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="First Name"
                      aria-describedby="helpId"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Last Name"
                      aria-describedby="helpId"
                    />
                  </div>

                  <h3>Password: </h3>
                  <div className="form-group">
                    <input
                      type="text"
                      name="currentPwd"
                      className="form-control"
                      placeholder="Enter Current Password"
                      aria-describedby="helpId"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="newPwd"
                      className="form-control"
                      placeholder="Enter New Password"
                      aria-describedby="helpId"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="ReNewPwd"
                      className="form-control"
                      placeholder="Re-type New Password"
                      aria-describedby="helpId"
                    />
                  </div>
                </form>
              </div>
              <div className="profile__footer d-flex justify-content-center">
                <button className="btn--red">Save</button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
