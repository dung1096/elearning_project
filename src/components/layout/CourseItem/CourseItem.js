import React from "react";
import "./CourseItem.scss";
import { NavLink } from "react-router-dom";

export default function CourseItem({ khoaHoc }) {
  return (
    <NavLink className="item" to={`/detail/${khoaHoc.maKhoaHoc}`}>
      <div className="item__show">
        <div className="item__show__img">
          <img src={khoaHoc.hinhAnh} alt={khoaHoc.hinhAnh} />
          <div className="img__overlay" />
        </div>
        <h2>{khoaHoc.tenKhoaHoc}</h2>
        <p>{khoaHoc.nguoiTao.hoTen}</p>
        <p>
          <span>4.4</span>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star-half-alt" />
          (38,741)
        </p>
        <h2>
          $18.99 <span>$199.99</span>
        </h2>
        <button type="button" className="btn--yellow">
          Bestseller
        </button>
        {/* <div className="item__detail">
            <h2>
              An Entire MBA in 1 Course:Award Winning Business School Prof
            </h2>
            <button type="button" className="btn--yellow">
              Bestseller
            </button>
            <span>
              Updated <b>May 2020</b>
            </span>
            <p>
              <span>8 total</span>
              <span>hoursAll</span>
              <span>LevelsCaptions</span>
            </p>
            <h6>** #1 Best Selling Business Course! **</h6>
            <p>
              Everything You Need to Know About Business from Start-up to IPO
            </p>
            <div className="d-flex justify-content-left align-items-center">
              <i className="fa fa-check iconCheck" />
              <p>Over 350,000 students in 195 countries!</p>
            </div>
            <div className="d-flex justify-content-left align-items-center">
              <i className="fa fa-check iconCheck" />
              <p>Superb reviews!</p>
            </div>
            <div className="d-flex justify-content-left align-items-center">
              <i className="fa fa-check iconCheck" />
              <p>Free $99 384 page book version of this course!</p>
            </div>
            <div className="row mx-0 justify-content-between">
              <button className="col-9 btn--red">Go To Cart</button>
              <i className="fa fa-heart iconHeart" />
            </div>
          </div> */}
      </div>
    </NavLink>
  );
}
