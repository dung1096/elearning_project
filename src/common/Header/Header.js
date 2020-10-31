import React, { Fragment, useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/types/UserType";
import { search } from "../../redux/types/CourseType";

export default function Header() {
  const [searchValue, setSearchValue] = useState([]);
  let dispatch = useDispatch();
  // const history = useHistory();
  const propUser = useSelector((state) => state.UserReducer.userLogin);
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
    console.log(searchValue.value);
    dispatch({ type: search, searchValue: searchValue.value });
  };

  return (
    <header className="header animate__animated animate__fadeIn wow">
      <NavLink to="/home">
        <img src="/img/logo-coral.svg" alt="logo" />
      </NavLink>
      <div className="header__category d-none d-md-flex">
        <span>Categories</span>
      </div>

      {/* SEARCH */}
      <form className="header__search d-none d-md-flex" onSubmit={handleSubmit}>
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

      <div className="panel-menu-parent header__cart d-none d-md-flex">
        <i className="fa fa-shopping-cart"></i>
        <div className="panel-menu header__cart__content">
          <p>Your cart is empty.</p>
          <NavLink to="/">Keep shoping</NavLink>
        </div>
      </div>

      <div className="header__auth panel-menu-parent">
        {propUser ? (
          <div className="header__auth__success">
            <p>Hi, {propUser.taiKhoan}</p>
            <div className="panel-menu panel-menu--config">
              <ul>
                <li>
                  <NavLink to="profile">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="login" onClick={handleLogout}>
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
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
