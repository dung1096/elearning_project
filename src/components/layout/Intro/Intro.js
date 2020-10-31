import React from "react";
import "./Intro.scss";

export default function Intro() {
  return (
    <section className="intro container-fluid animate__animated animate__fadeIn wow">
      <div className="intro__content">
        <h1>The world's largest selection of courses</h1>
        <p>
          Choose from 100,000 online video courses with new additions published
          every month
        </p>
      </div>
    </section>
  );
}
