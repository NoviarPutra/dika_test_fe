import React from "react";
// import { Navigation } from "../../components/atoms";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <React.Fragment>
      {/* <Navigation /> */}
      <Outlet />
    </React.Fragment>
  );
};

export default Main;
