import React from "react";
import { NavLink } from "react-router-dom";
import "./CartHeader.scss";

export default function CartHeader() {
  return (
    <section className="cart-header">
      <div className="container">
        <div className="cart-header__inner">
          <ol>
            <li>
              <NavLink to="home">
                <i className="fa fa-home" />
              </NavLink>
            </li>
            <li>Shoping Cart</li>
          </ol>
          <h1>Shopping Cart</h1>
        </div>
      </div>
    </section>
  );
}
