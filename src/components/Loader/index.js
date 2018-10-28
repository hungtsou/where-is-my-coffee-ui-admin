import React from "react";
import { Loader } from "react-overlay-loader";
import "./styles.css";

const AppLoader = ({ isActive }) => {
  return (
    <div className={isActive ? "loader" : "hide"}>
      <Loader fullPage loading />
    </div>
  );
};

export default AppLoader;
