import React from "react";
import "./Temperature.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Temperature() {
  return (
    <div className="col">
      <h1>
        <span  className="todays-icon">
          {" "}
          <FontAwesomeIcon icon="cloud" />
        </span>

        <span className="todays-temp" >
          24
        </span>
        <small className="units">°C</small>
      </h1>
    </div>
  );
}
