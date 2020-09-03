import React from "react";
import "./Category.scss";

export default function Category() {
  return (
    <section className="category container-fluid animate__animated animate__fadeIn wow">
      <h1>Top categories</h1>
      <div className="row d-none d-sm-flex">
        <div className="col-4 col-md-3">
          <div className="category__item">
            <a href="/">
              <img
                src="./img/category/category1.jpg"
                alt="./img/category/category1.jpg"
                className="img-fluid"
              />
              <h2>Design</h2>
            </a>
          </div>
        </div>
        <div className="col-4 col-md-3">
          <div className="category__item">
            <a href="/">
              <img
                src="./img/category/category2.jpg"
                alt="./img/category/category2.jpg"
                className="img-fluid"
              />
              <h2>Development</h2>
            </a>
          </div>
        </div>
        <div className="col-4 col-md-3">
          <div className="category__item">
            <a href="/">
              <img
                src="./img/category/category3.jpg"
                alt="./img/category/category3.jpg"
                className="img-fluid"
              />
              <h2>Marketing</h2>
            </a>
          </div>
        </div>
        <div className="col-4 col-md-3">
          <div className="category__item">
            <a href="/">
              <img
                src="./img/category/category4.jpg"
                alt="./img/category/category4.jpg"
                className="img-fluid"
              />
              <h2>IT and Software</h2>
            </a>
          </div>
        </div>
        <div className="col-4 col-md-3">
          <div className="category__item">
            <a href="/">
              <img
                src="./img/category/category5.jpg"
                alt="./img/category/category5.jpg"
                className="img-fluid"
              />
              <h2>Personal Development</h2>
            </a>
          </div>
        </div>
        <div className="col-4 col-md-3">
          <div className="category__item">
            <a href="/">
              <img
                src="./img/category/category6.jpg"
                alt="./img/category/category6.jpg"
                className="img-fluid"
              />
              <h2>Business</h2>
            </a>
          </div>
        </div>
        <div className="col-4 col-md-3">
          <div className="category__item">
            <a href="/">
              <img
                src="./img/category/category7.jpg"
                alt="./img/category/category7.jpg"
                className="img-fluid"
              />
              <h2>Photography</h2>
            </a>
          </div>
        </div>
        <div className="col-4 col-md-3">
          <div className="category__item">
            <a href="/">
              <img
                src="./img/category/category8.jpg"
                alt="./img/category/category8.jpg"
                className="img-fluid"
              />
              <h2>Music</h2>
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap d-sm-none">
        <span>Design</span>
        <span>Development</span>
        <span>Marketing</span>
        <span>IT and Software</span>
        <span>Personal Development</span>
        <span>Business</span>
        <span>Photography</span>
        <span>Music</span>
      </div>
    </section>
  );
}
