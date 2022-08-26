import React from "react";
import "./WindAndHumidity.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Wind() {
  return (
    <div className="col">
      <h4 className="wind-speed">
        <span id="wind-speed">8 m/s </span>
        <FontAwesomeIcon icon="wind" className="wind-icon" />
      </h4>
    </div>
  );
}
