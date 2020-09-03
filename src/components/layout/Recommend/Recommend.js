import React from "react";
import "./Recommend.scss";

export default function Recommend() {
  return (
    <section className="recommend container-fluid d-flex justify-content-center align-items-center flex-column text-center animate__animated animate__fadeIn wow">
      <h1>Get personal learning recommendations</h1>
      <p>Answer a few questions for your top picks</p>
      <button>Get started</button>
    </section>
  );
}
