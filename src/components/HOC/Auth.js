import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AdminTemplate } from "../../templates/AdminTemplate/AdminTemplate";

const Auth = ({ path, Component }) => {
  return (
    <Route
      render={() => {
        let user = JSON.parse(localStorage.getItem("userLogin"));
        if (user) {
          if (user.maLoaiNguoiDung === "GV") {
            return <AdminTemplate exact path={path} Component={Component} />;
          }
        }
        return <Redirect to="/home" />;
      }}
    />
  );
};
export default Auth;
