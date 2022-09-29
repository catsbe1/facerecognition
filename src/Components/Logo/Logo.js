import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="br2 shadow-2 tilt">
        <div className="pa3">
          <img src={brain} alt="Logo" className="brain" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
