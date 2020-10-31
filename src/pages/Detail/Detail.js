import React, { useState, useEffect } from "react";
import DetailCover from "../../components/layout/DetailCover/DetailCover";
import { courseDetail } from "../../redux/actions/CourseAction";

export default function Detail(props) {
  let [chiTietKhoaHoc, setChiTietKhoaHoc] = useState([]);
  useEffect(() => {
    courseDetail(props, setChiTietKhoaHoc);
  }, [props]);

  return (
    <div>
      <DetailCover chiTietKhoaHoc={chiTietKhoaHoc} />
    </div>
  );
}
