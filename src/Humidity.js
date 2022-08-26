import React from "react";
import "./WindAndHumidity.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Humidity() {
  return (
    <div className="col">
      <h4 className="humidity">
        <FontAwesomeIcon icon="water" className="humidity-icon" />
        <span id="humidity"> 40%</span>
      </h4>
    </div>
  );
}
