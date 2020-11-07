import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleRegisterCourseAction } from "../../../redux/actions/CourseAction";
import { deleteCart } from "../../../redux/types/CourseType";
import { NavLink } from "react-router-dom";
import "./CartContent.scss";

export default function CartContent() {
  const propCart = useSelector((state) => state.CourseReducer.cart);

  const propUser = useSelector((state) => state.UserReducer.userLogin);

  let dispatch = useDispatch();

  let handleDeleteCart = (id) => {
    dispatch({
      type: deleteCart,
      cartID: id,
    });
  };

  let handleRegister = (courseID) => {
    handleRegisterCourseAction(dispatch, courseID, propUser.taiKhoan);
  };
  return (
    <section className="cart-content">
      <div className="container">
        <h3>{propCart.length} Courses in Cart</h3>
        <div className="cart-content__list">
          {propCart.map((cartItem, index) => {
            return (
              <div key={index} className="cart-content__item">
                <div className="row">
                  <div className="col-sm-3  d-flex align-items-center">
                    <img
                      src={cartItem.hinhAnh}
                      alt={cartItem.hinhAnh}
                      className="img-fluid"
                    ></img>
                  </div>

                  <div className="col-sm-6  d-flex align-items-center justify-content-center flex-column">
                    <h3>{cartItem.tenKhoaHoc}</h3>
                    <p>{cartItem.moTa}</p>
                  </div>

                  <div className="col-sm-3  d-flex align-items-center">
                    <button
                      className="btn btn-success mx-2"
                      style={{ fontSize: "14px" }}
                    >
                      <NavLink
                        className="text-light"
                        to={`/detail/${cartItem.maKhoaHoc}`}
                      >
                        Detail
                      </NavLink>
                    </button>
                    <button
                      className="btn btn-danger mx-2"
                      style={{ fontSize: "14px" }}
                      onClick={() => {
                        handleDeleteCart(cartItem.maKhoaHoc);
                      }}
                    >
                      Remove
                    </button>
                    <button
                      className="btn btn-primary mx-2"
                      style={{ fontSize: "14px" }}
                      onClick={() => {
                        handleRegister(cartItem.maKhoaHoc);
                      }}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
