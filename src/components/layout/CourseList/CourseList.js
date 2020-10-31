import React, { useState, useEffect, Fragment } from "react";
import Slider from "react-slick";

import CourseItem from "../CourseItem/CourseItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CourseList.scss";
import { courseListAction } from "../../../redux/actions/CourseAction";

export default function CourseList() {
  let [dsKhoaHoc, setDSKhoaHoc] = useState([]);
  useEffect(() => {
    courseListAction(setDSKhoaHoc);
  }, []);

  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  return (
    <Fragment>
      <section className="course container-fluid animate__animated animate__fadeIn wow">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="business-tab"
              data-toggle="tab"
              href="#business"
              role="tab"
              aria-controls="business"
              aria-selected="true"
            >
              Business
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="design-tab"
              data-toggle="tab"
              href="#design"
              role="tab"
              aria-controls="design"
              aria-selected="false"
            >
              Design
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="photography-tab"
              data-toggle="tab"
              href="#photography"
              role="tab"
              aria-controls="photography"
              aria-selected="false"
            >
              Photography
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="development-tab"
              data-toggle="tab"
              href="#development"
              role="tab"
              aria-controls="development"
              aria-selected="false"
            >
              Development
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="marketing-tab"
              data-toggle="tab"
              href="#marketing"
              role="tab"
              aria-controls="marketing"
              aria-selected="false"
            >
              Marketing
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="it-software-tab"
              data-toggle="tab"
              href="#it-software"
              role="tab"
              aria-controls="it-software"
              aria-selected="false"
            >
              IT &amp; Software
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="personal-tab"
              data-toggle="tab"
              href="#personal"
              role="tab"
              aria-controls="personal"
              aria-selected="false"
            >
              Personal Development
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active "
            id="business"
            role="tabpanel"
            aria-labelledby="business-tab"
          >
            <Slider {...settings}>
              {dsKhoaHoc.map((khoaHoc, index) => {
                console.log(khoaHoc, index);
                return <CourseItem key={index} khoaHoc={khoaHoc} />;
              })}
            </Slider>
          </div>
          <div
            className="tab-pane fade"
            id="design"
            role="tabpanel"
            aria-labelledby="design-tab"
          />
          <div
            className="tab-pane fade"
            id="photography"
            role="tabpanel"
            aria-labelledby="photography-tab"
          />
          <div
            className="tab-pane fade"
            id="development"
            role="tabpanel"
            aria-labelledby="development-tab"
          />
          <div
            className="tab-pane fade"
            id="marketing"
            role="tabpanel"
            aria-labelledby="marketing-tab"
          />
          <div
            className="tab-pane fade"
            id="it-software"
            role="tabpanel"
            aria-labelledby="it-software-tab"
          />
          <div
            className="tab-pane fade"
            id="personal"
            role="tabpanel"
            aria-labelledby="personal-tab"
          />
        </div>
      </section>

      <section className="student-course container-fluid animate__animated animate__fadeIn wow">
        <h1>Students are viewing</h1>
        {/* <Slider {...settings}>
          {dsKhoaHoc.map((khoaHoc, index) => {
            return <CourseItem key={index} khoaHoc={khoaHoc} />;
          })}
        </Slider> */}
      </section>
    </Fragment>
  );
}
