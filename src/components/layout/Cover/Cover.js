import React from "react";
import "./Cover.scss";

export default function Cover() {
  return (
    <section className="cover animate__animated animate__fadeIn wow">
      <div className="cover__content">
        <h1>Learn on your schedule</h1>
        <p>
          Study any topic, anytime. Choose from thousands of expert-led courses
          now.
        </p>
        <div className="cover__content__search">
          <input type="text" placeholder="What do you want to learn?" />
          <i className="fa fa-search" />
        </div>
      </div>
    </section>
  );
}
