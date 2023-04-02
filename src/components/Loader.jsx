import React from "react";
import Animation from "../assets/images/logo-animated.gif";

function Loader() {
  return (
    <div className="loader">
      <img className="logo" src={Animation} alt="apple loader" />
    </div>
  );
}

export default Loader;
