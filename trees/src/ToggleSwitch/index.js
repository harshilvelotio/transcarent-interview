import React from "react";
import "./style.css";

const ToggleSwitch = (props) => (
  <label className="switch">
    <input {...props} type="checkbox" />
    <span className="slider round"></span>
  </label>
);

export default ToggleSwitch;
