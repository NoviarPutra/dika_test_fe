import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Navigation } from "../components/atoms";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  return token ? (
    <React.Fragment>
      <Navigation />
      <Outlet />
    </React.Fragment>
  ) : (
    <Navigate to='/' />
  );
};

export default PrivateRoute;
