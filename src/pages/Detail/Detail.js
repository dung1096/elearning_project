import React, { useState, useEffect } from "react";
import DetailContent from "../../components/layout/DetailContent/DetailContent";
import DetailCover from "../../components/layout/DetailCover/DetailCover";
import { courseDetailAction } from "../../redux/actions/CourseAction";

export default function Detail(props) {
  let [courseDetail, setCourseDetail] = useState([]);
  useEffect(() => {
    courseDetailAction(props.match.params.maKhoaHoc, setCourseDetail);
  }, [props]);

  return (
    <div>
      <DetailCover courseDetail={courseDetail} />
      <DetailContent  courseDetail={courseDetail}/>
    </div>
  );
}
