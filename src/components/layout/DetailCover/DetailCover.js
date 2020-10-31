import React from "react";
import "./DetailCover.scss";

export default function DetailCover({ chiTietKhoaHoc }) {
  let nguoiTao = { ...chiTietKhoaHoc.nguoiTao };
  let danhMucKhoaHoc = { ...chiTietKhoaHoc.danhMucKhoaHoc };
  return (
    <section className="detail-cover animate__animated animate__fadeIn wow">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <a href="/">{danhMucKhoaHoc.tenDanhMucKhoaHoc}</a>
            <i className="fa fa-angle-right" />
            <a href="/">{chiTietKhoaHoc.tenKhoaHoc}</a>
            {/* <i className="fa fa-angle-right" />
            <a href="/">JavaScript</a> */}
            <h1>{chiTietKhoaHoc.tenKhoaHoc}</h1>
            <h3 className="text-justify">{chiTietKhoaHoc.moTa}</h3>
            <div className="d-flex">
              <button className="btn--pink mr-2">Hot &amp; New</button>
              <p className="rating">
                <span>4.8</span>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />({chiTietKhoaHoc.luotXem} view){" "}
                {chiTietKhoaHoc.soLuongHocVien} students
              </p>
            </div>
            <p>
              Created by <a href="/">{nguoiTao.hoTen}</a>
            </p>
            <p>
              <i className="fa fa-exclamation-circle" />
              Last updated 8/2020
              <i className="fa fa-globe" />
              English
              <i className="fa fa-closed-captioning" />
              English [Auto]
            </p>
            <button className="btn--config mr-2">
              Wishlist
              <i className="fa fa-heart" />
            </button>
            <button className="btn--config mr-2">
              Share
              <i className="fa fa-share" />
            </button>
            <button className="btn--config mr-2">Gift this course</button>
          </div>

          <div className="col-4 d-flex align-items-center">
            <img
              className="img-fluid"
              src={chiTietKhoaHoc.hinhAnh}
              alt={chiTietKhoaHoc.hinhAnh}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
