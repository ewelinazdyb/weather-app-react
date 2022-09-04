import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function CurrentTemperature(props) {
  return (
    <div className="col">
      <h1>
        <span className="todays-icon">
          <WeatherIcon icon={props.icon} />
        </span>
        <span className="todays-temp">{Math.round(props.celsius)}</span>
        <small className="units">°C</small>
      </h1>
    </div>
  );
}
