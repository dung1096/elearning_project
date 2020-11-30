
import React, { useState, useEffect, Fragment } from "react";
import {
  // courseListAction,
  courseListAction_pagination,
  courseDetailAction,
  handleDeleteCourseAction,
} from "../../../../redux/actions/CourseAction";

import { useSelector } from "react-redux";
import CourseModal from "../../../../components/layout/admin/CourseModal/CourseModal";

export default function CourseManagementContent() {
let [page, setPage] = useState(1);

    let [courseList, setCourseList] = useState([]);

    let [courseListPage, setCourseListPage] = useState([]);
  
  const courseGroup = useSelector((state) => state.CourseReducer.group);
  let [courseDetail, setCourseDetail] = useState({});


  useEffect( () => {
      // courseListAction(setCourseList,"",courseGroup);
     courseListAction_pagination(courseGroup,page, setCourseListPage);
    setCourseList(courseListPage.items)
  }, [courseGroup,courseListPage,page]);

  const propImg = useSelector((state) => state.CourseReducer.img);

  const handleUpdate=(id)=>{
    courseDetailAction(id,setCourseDetail);
  }

  const handleDelete = (id) => {
    handleDeleteCourseAction(id);
  };

  const handleClickPage =(event)=>
  {
   setPage(event.target.innerHTML)
  }

  const renderPages = () => {
    let content = [];
    for (let index = 1; index <= courseListPage.totalPages; index++) {
      content.push(<button key={index} onClick={handleClickPage}>{index}</button>);
    }
    return content;
  };
    return (
        <Fragment>
      <CourseModal courseDetail={courseDetail} courseList={courseList}/>

        {/* Button trigger modal */}
        <div className="d-flex justify-content-end m-5">
        <button
          type="button"
          className="btn btn-success btn-lg p-3 mb-5"
          style={{ fontSize: "14px" }}
          data-toggle="modal"
          data-target="#courseId"

        >
          Insert
        </button>
        </div>

      <div className="row">
        {courseList?.map((khoaHoc, index) => {
          return (
            <div className="col-sm-4 mb-5" key={index}>
              <div className="card">
                {/* {propImg === khoaHoc.hinhAnh ? <img
                  className="card-img-top"
                  style={{ height: "200px" }} 
                  src={propImg}
                  alt="img"
                /> :  */}
                <img
                  className="card-img-top"
                  style={{ height: "200px" }} 
                  src={khoaHoc.hinhAnh}
                  alt="img"
                />
                 {/* } */}
                
                <div className="card-body">
                  <h4 className="card-title text-primary font-weight-bold">
                    {khoaHoc.tenKhoaHoc}
                  </h4>
                  <p className="card-text font-weight-bolder">
                    Course ID:{" "}
                    <span className="font-weight-normal">
                      {khoaHoc.maKhoaHoc}
                    </span>
                  </p>
                  <p className="card-text font-weight-bolder">
                    Aliases:{" "}
                    <span className="font-weight-normal">{khoaHoc.biDanh}</span>
                  </p>
                  <p className="card-text font-weight-bolder">
                    Describe:{" "}
                    <span
                      className="font-weight-normal"
                      style={{
                        height: "45px",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {khoaHoc.moTa}
                    </span>
                  </p>
                  <p className="card-text font-weight-bolder">
                    View:{" "}
                    <span className="font-weight-normal">
                      {khoaHoc.luotXem}
                    </span>
                  </p>
                  <p className="card-text font-weight-bolder">
                    Innitiated date:{" "}
                    <span className="font-weight-normal">
                      {khoaHoc.ngayTao}
                    </span>
                  </p>
                  <p className="card-text font-weight-bolder">
                    <span className="font-weight-normal">
                      {khoaHoc.maDanhMucKhoaHoc}
                    </span>
                  </p>
                  <p className="card-text font-weight-bolder">
                    <span className="font-weight-normal">
                      {khoaHoc.taiKhoanNguoiTao}
                    </span>
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    className="btn btn-primary ml-3 mb-3"
                    style={{ fontSize: "14px" }}
                    data-toggle="modal"
                    data-target="#courseUpdateId"
                    onClick={() => handleUpdate(khoaHoc.maKhoaHoc)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger ml-3 mb-3"
                    style={{ fontSize: "14px" }}
                    onClick={() => handleDelete(khoaHoc.maKhoaHoc)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

       {renderPages()}
    </Fragment>
    )
}
