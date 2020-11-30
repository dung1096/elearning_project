import React, { useState, useEffect, Fragment } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "../CourseItem/CourseItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CourseList.scss";
import {
  courseListAction,
  courseCategoryAction,
} from "../../../redux/actions/CourseAction";
import { setGroup } from "../../../redux/types/CourseType";

export default function CourseList() {
  let [dsKhoaHoc, setDSKhoaHoc] = useState([]);

  let propSearch = useSelector((state) => state.CourseReducer.searchValue);

  let propGroup = useSelector((state) => state.CourseReducer.group);

  let dispatch = useDispatch();

  useEffect(() => {
    courseListAction(setDSKhoaHoc, propSearch, propGroup);
  }, [propSearch, propGroup]);

  let handleClick = (event) => {
    if (event.target.innerHTML === "All") {
      courseListAction(setDSKhoaHoc, propSearch, propGroup);
    } else
      courseCategoryAction(setDSKhoaHoc, event.target.innerHTML, propGroup);
  };

  let handleClickGroup = (event) => {
    dispatch({
      type: setGroup,
      group: event.target.innerHTML,
    });
  };

  const renderGroup = () => {
    let content = [];
    for (let index = 1; index <= 10; index++) {
      if (index < 10)
        content.push(
          <div
            key={index}
            className="dropdown-item"
            style={{ cursor: "pointer" }}
            onClick={handleClickGroup}
          >
            GP0{index}
          </div>
        );
      else
        content.push(
          <div
            key={index}
            className="dropdown-item"
            style={{ cursor: "pointer" }}
            onClick={handleClickGroup}
          >
            GP{index}
          </div>
        );
    }
    return content;
  };

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
      {/* <section className="student-course container-fluid animate__animated animate__fadeIn wow">
        <h1>Students are viewing</h1>
        <Slider {...settings}>
              {dsKhoaHoc.map((khoaHoc, index) => {
                return <CourseItem key={index} khoaHoc={khoaHoc} />;
              })}
            </Slider>
      </section> */}

      <section className="course container-fluid animate__animated animate__fadeIn wow">
        <div className="d-flex justify-content-between">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="all-tab"
                data-toggle="tab"
                href="#all"
                role="tab"
                aria-controls="all"
                aria-selected="true"
                onClick={handleClick}
              >
                All
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="backend-tab"
                data-toggle="tab"
                href="#backend"
                role="tab"
                aria-controls="backend"
                aria-selected="false"
                key="backend"
                onClick={handleClick}
              >
                BackEnd
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
                onClick={handleClick}
              >
                Design
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="didong-tab"
                data-toggle="tab"
                href="#didong"
                role="tab"
                aria-controls="didong"
                aria-selected="false"
                onClick={handleClick}
              >
                DiDong
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="frontEnd-tab"
                data-toggle="tab"
                href="#frontEnd"
                role="tab"
                aria-controls="frontEnd"
                aria-selected="false"
                onClick={handleClick}
              >
                FrontEnd
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="fullstack-tab"
                data-toggle="tab"
                href="#fullstack"
                role="tab"
                aria-controls="fullstack"
                aria-selected="false"
                onClick={handleClick}
              >
                FullStack
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="tuduy-tab"
                data-toggle="tab"
                href="#tuduy"
                role="tab"
                aria-controls="tuduy"
                aria-selected="false"
                onClick={handleClick}
              >
                TuDuy
              </a>
            </li>
          </ul>
          <div className="dropdown mr-5">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {propGroup}
            </button>
            <div className="dropdown-menu" aria-labelledby="triggerId">
              {renderGroup()}
            </div>
          </div>
        </div>

        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active "
            id="all"
            role="tabpanel"
            aria-labelledby="all-tab"
          >
            <Slider {...settings}>
              {dsKhoaHoc.map((khoaHoc, index) => {
                return <CourseItem key={index} khoaHoc={khoaHoc} />;
              })}
            </Slider>
          </div>
          <div
            className="tab-pane fade"
            id="backend"
            role="tabpanel"
            aria-labelledby="backend-tab"
          >
            <Slider {...settings}>
              {dsKhoaHoc.map((khoaHoc, index) => {
                return <CourseItem key={index} khoaHoc={khoaHoc} />;
              })}
            </Slider>
          </div>
          <div
            className="tab-pane fade"
            id="design"
            role="tabpanel"
            aria-labelledby="design-tab"
          >
            <Slider {...settings}>
              {dsKhoaHoc.map((khoaHoc, index) => {
                return <CourseItem key={index} khoaHoc={khoaHoc} />;
              })}
            </Slider>
          </div>
          <div
            className="tab-pane fade"
            id="didong"
            role="tabpanel"
            aria-labelledby="didong-tab"
          >
            <Slider {...settings}>
              {dsKhoaHoc.map((khoaHoc, index) => {
                return <CourseItem key={index} khoaHoc={khoaHoc} />;
              })}
            </Slider>
          </div>
          <div
            className="tab-pane fade"
            id="frontend"
            role="tabpanel"
            aria-labelledby="frontend-tab"
          >
            <Slider {...settings}>
              {dsKhoaHoc.map((khoaHoc, index) => {
                return <CourseItem key={index} khoaHoc={khoaHoc} />;
              })}
            </Slider>
          </div>
          <div
            className="tab-pane fade"
            id="fullstack"
            role="tabpanel"
            aria-labelledby="fullstack-tab"
          >
            <Slider {...settings}>
              {dsKhoaHoc.map((khoaHoc, index) => {
                return <CourseItem key={index} khoaHoc={khoaHoc} />;
              })}
            </Slider>
          </div>
          <div
            className="tab-pane fade"
            id="tuduy"
            role="tabpanel"
            aria-labelledby="tuduy-tab"
          >
            <Slider {...settings}>
              {dsKhoaHoc.map((khoaHoc, index) => {
                return <CourseItem key={index} khoaHoc={khoaHoc} />;
              })}
            </Slider>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
