import React from "react";

import Cover from "../../components/layout/Cover/Cover";
import Intro from "../../components/layout/Intro/Intro";
import Recommend from "../../components/layout/Recommend/Recommend";
import Category from "../../components/layout/Category/Category";
import CourseList from "../../components/layout/CourseList/CourseList";

export default function Home() {
  return (
    <div>
      <Cover />
      <Intro />
      <CourseList />
      <Recommend />
      <Category />
    </div>
  );
}
