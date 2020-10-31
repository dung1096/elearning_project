import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleRegisterCourseAction } from "../../../redux/actions/CourseAction";
import { deleteCart } from "../../../redux/types/CourseType";
import "./CartContent.scss";

export default function CartContent() {
  const propCart = useSelector((state) => state.CourseReducer.cart);
 
  const propUser = useSelector((state) => state.UserReducer.userLogin);
  console.log("user",propUser)

  let dispatch = useDispatch();

  let handleDeleteCart = (item) => {
    dispatch({
      type: deleteCart,
      cartItem: item,
    });
  };

  let handleRegister = (item) => {
    handleRegisterCourseAction(item.maKhoaHoc,propUser.taiKhoan)
    // dispatch({
    //   type: deleteCart,
    //   cartItem: item,
    // });
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

                  <div className="col-sm-7  d-flex align-items-center justify-content-center flex-column">
                    <h3>{cartItem.tenKhoaHoc}</h3>
                     <p>{cartItem.moTa}</p>
                  </div>

                  <div className="col-sm-2  d-flex align-items-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDeleteCart(cartItem);
                      }}
                    >
                      Remove
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        handleRegister(cartItem);
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
