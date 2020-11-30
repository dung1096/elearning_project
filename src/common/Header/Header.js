import React, { Fragment, useEffect, useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../redux/types/UserType";
import { search } from "../../redux/types/CourseType";
import { courseCategoryListAction } from "../../redux/actions/CourseAction";

export default function Header() {
  const [searchValue, setSearchValue] = useState([]);
  const [category, setCategory] = useState([]);
  let dispatch = useDispatch();
  const history = useHistory();

  const propUser = useSelector((state) => state.UserReducer.userLogin);
  const propCart = useSelector((state) => state.CourseReducer.cart);
  const handleLogout = () => {
    dispatch({ type: logout });
    // history.push("/login");
  };
  let handleChange = (event) => {
    let { value } = event.target;
    setSearchValue({ ...searchValue, value });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: search, searchValue: searchValue.value });
    history.push("/home");
  };

  useEffect(() => {
    courseCategoryListAction(setCategory);
  }, []);

  return (
    <Fragment>
      <header className="header animate__animated animate__fadeIn wow">
        <NavLink to="/home">
          <img src="/img/logo-coral.svg" alt="logo" />
        </NavLink>

        {/* CATEGORY */}
        <div className="header__category d-none d-md-flex">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>Categories</span>
            </button>
            <div className="dropdown-menu" aria-labelledby="triggerId">
              {category.map((item, index) => {
                return (
                  <div href="#myTab" className="dropdown-item" style={{ cursor: "pointer" }} key={index}>
                    {item.tenDanhMuc}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <form
          className="header__search d-none d-md-flex"
          onSubmit={handleSubmit}
        >
          <button className="btn" type="submit">
            <i className="fa fa-search"></i>
          </button>
          <input
            type="text"
            name="search"
            placeholder="Search for anything"
            onChange={handleChange}
          />
        </form>

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

        {/* CART */}
        <div className="panel-menu-parent header__cart d-none d-md-flex">
          <NavLink to="/cart">
            <i className="fa fa-shopping-cart"></i>
            <div className="cart-number">{propCart.length}</div>
          </NavLink>
          <div className="panel-menu header__cart__content">
            {propCart.length !== 0 ? (
              <Fragment>
                {propCart.map((cartItem, index) => {
                  return (
                    <div key={index} className="cart-content__item">
                      <div className="row">
                        <div className="col-sm-4  d-flex align-items-center">
                          <img
                            src={cartItem.hinhAnh}
                            alt={cartItem.hinhAnh}
                            className="img-fluid"
                          ></img>
                        </div>

                        <div className="col-sm-8 d-flex align-items-center">
                          <h3>{cartItem.tenKhoaHoc}</h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Fragment>
            ) : (
              <Fragment>
                <p>Your cart is empty.</p>
                <NavLink to="/cart">Keep shoping</NavLink>
              </Fragment>
            )}
          </div>
        </div>

        <div className="header__auth panel-menu-parent">
          {propUser ? (
            <div className="header__auth__success d-flex align-items-center">
              <p className="m-0">Hi, {propUser.taiKhoan}</p>
              <div className="panel-menu panel-menu--config">
                <ul>
                  <li>
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" onClick={handleLogout}>
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Fragment>
              <NavLink to="/login">
                <button className="header__auth__login btn--white">
                  Log in
                </button>
              </NavLink>
              <NavLink to="/signup">
                <button className="header__auth__signup btn--blue">
                  Sign up
                </button>
              </NavLink>
            </Fragment>
          )}
        </div>
      </header>
    </Fragment>
  );
}
