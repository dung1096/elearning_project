import React, { Fragment } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import { qlKhoaHocService } from "../../services/QuanLyKhoaHocService";

export default function Header() {
  // let [dsKhoaHoc, setDSKhoaHoc] = useState([]);
  // useEffect(() => {
  //   qlKhoaHocService
  //     .layDanhSachKhoaHoc()
  //     .then((res) => {
  //       console.log("dsKhoaHoc", res.data);
  //       setDSKhoaHoc(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //       // console.log(err.response.status);
  //     });
  // }, []);
  const propNguoidung = useSelector((state) => state.UserReducer.user);

  return (
    <header className="header animate__animated animate__fadeIn wow">
      <NavLink to="/home">
        <img src="/img/logo-coral.svg" alt="logo" />
      </NavLink>
      <div className="header__category d-none d-md-flex">
        <span>Categories</span>
      </div>

      {/* SEARCH */}
      <div className="header__search d-none d-md-flex">
        <button className="btn" type="submit">
          <i className="fa fa-search"></i>
        </button>
        <input type="text" placeholder="Search for anything" />
      </div>

      <nav className="header__nav d-flex justify-content-between align-items-center">
        <div className="panel-menu-parent d-none d-lg-flex">
          <a href="/">Udemy for business</a>
          <div className="panel-menu">
            <h2>
              Get your team access to over 4,000 top Udemy courses, anytime,
              anywhere.
            </h2>
            <button className="btn--blue">Try Udemy for Business</button>
          </div>
        </div>
        <div className="panel-menu-parent d-none d-xl-flex">
          <a href="/">Teach on Udemy</a>
          <div className="panel-menu">
            <h2>
              Turn what you know into an opportunity and reach millions around
              the world.
            </h2>
            <button className="btn--blue">Learn more</button>
          </div>
        </div>
      </nav>

      <div className="panel-menu-parent header__cart d-none d-md-flex">
        <i className="fa fa-shopping-cart"></i>
        <div className="panel-menu header__cart__content">
          <p>Your cart is empty.</p>
          <NavLink to="/">Keep shoping</NavLink>
        </div>
      </div>

      <div className="header__auth">
        {propNguoidung ? (
          <NavLink className="header__auth__success" to="profile">
            <p>Hi, {propNguoidung.taiKhoan}</p>
          </NavLink>
        ) : (
          <Fragment>
            <NavLink to="login">
              <button className="header__auth__login btn--white">Log in</button>
            </NavLink>
            <NavLink to="signup">
              <button className="header__auth__signup btn--blue">
                Sign up
              </button>
            </NavLink>
          </Fragment>
        )}
      </div>
    </header>
  );
}
