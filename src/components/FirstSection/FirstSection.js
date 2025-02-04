import React from "react";
import "./FirstSection.scss";
import firstpage from "../../img/firstpage.jpg";

const FirstSection = () => {
  return (
    <div className="first-section">
      <img src={firstpage} alt="Mountains" className="bg-image" />
      <div className="first-content">
        <h2>
          Bist du bereit dich von deinen emotionalen Blockaden zu lösen und dich
          zu befreien?
        </h2>
      </div>
    </div>
  );
};

export default FirstSection;
