import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const token = localStorage.getItem("token");
  return !token ? (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  ) : (
    <Navigate to='/dashboard' />
  );
};

export default PublicRoutes;
