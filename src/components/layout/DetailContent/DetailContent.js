
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/types/CourseType";
import "./DetailContent.scss";

export default function DetailContent({ courseDetail }) {
  let dispatch = useDispatch();
  let handleAddToCart = () => {
    dispatch({
      type: addToCart,
      cartItem: courseDetail,
    });
   
  };
  return (
    <section className="detail-content animate__animated animate__fadeIn wow">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="detai-content__description">
              <h1>Description</h1>
              <h3 className="text-justify">{courseDetail.moTa}</h3>
            </div>

            <div className="detai-content__requirement">
              <h1>Requirements</h1>
              <ul>
                <li>
                  Absolutely no experience is required. We will start from the
                  basics and gradually build up your knowledge. Everything is in
                  the course.
                </li>
                <li>A willingness to learn and practice</li>
              </ul>
            </div>
          </div>

          <div className="col-sm-4">
            <button className="btn--red" onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
