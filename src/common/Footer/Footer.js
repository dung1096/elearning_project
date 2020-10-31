import React, { Component } from "react";
import "./Footer.scss";
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container-fluid animate__animated animate__fadeIn wow">
        <div className="row">
          <ul className="col-12 col-md-3 p-0 m-0">
            <li>
              <a href="/">Udemy for Business</a>
            </li>
            <li>
              <a href="/">Teach on Udemy</a>
            </li>
            <li>
              <a href="/">Get the app</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
          </ul>
          <ul className="col-12 col-md-3 p-0 m-0">
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Help and Support</a>
            </li>
            <li>
              <a href="/">Affiliate</a>
            </li>
          </ul>
          <ul className="col-12 col-md-3 p-0 m-0">
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Privacy policy and cookie policy</a>
            </li>
            <li>
              <a href="/">Sitemap</a>
            </li>
            <li>
              <a href="/">Featured courses</a>
            </li>
          </ul>
          <div className="col-12 col-md-3 p-0 m-0">
            <div className="translate dropup">
              <button
                type="button"
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div>
                  <i className="fa fa-globe" />
                  English
                </div>
              </button>
              <div className="dropdown-menu">
                {/* Dropdown menu links */}
                <option>English</option>
                <option>Deutsch</option>
                <option>Francais</option>
                <option>Bahasa Indonesia</option>
                <option>Italiano</option>
                <option>Nederlands</option>
                <option>Polski</option>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright d-md-flex justify-content-between align-items-center">
          <a href="/">
            <img src="/img/logo-coral.svg" alt="logo" className="img-fluid" />
          </a>
          <p className="mt-4 mt-md-0">© 2020 Udemy, Inc.</p>
        </div>
      </footer>
    );
  }
}
