import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="col">
        <h1>
          <WeatherIcon icon={props.icon} />
          <span className="todays-temp">{Math.round(props.celsius)}</span>
          <small className="units">°C</small>
        </h1>
        <p className="temp-units">
          <span className="unit">°C</span> |{" "}
          <span className="unit">
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="col">
        <h1>
          <WeatherIcon icon={props.icon} />
          <span className="todays-temp">
            {Math.round(convertToFahrenheit())}
          </span>
          <small className="units">°F</small>
        </h1>
        <p className="temp-units">
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              °C
            </a>
          </span>{" "}
          | <span className="unit">°F</span>
        </p>
      </div>
    );
  }
}
