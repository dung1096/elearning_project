import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";

const HomeComponent = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};
export const HomeTemplate = ({ Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <HomeComponent>
            <Component {...props} />
          </HomeComponent>
        );
      }}
    />
  );
};
