import React, { useState, useEffect } from "react";
import DetailCover from "../../components/layout/DetailCover/DetailCover";
import { courseDetailAction } from "../../redux/actions/CourseAction";

export default function Detail(props) {
  let [chiTietKhoaHoc, setChiTietKhoaHoc] = useState([]);
  useEffect(() => {
    courseDetailAction(props, setChiTietKhoaHoc);
  }, [props]);

  return (
    <div>
      <DetailCover chiTietKhoaHoc={chiTietKhoaHoc} />
    </div>
  );
}
