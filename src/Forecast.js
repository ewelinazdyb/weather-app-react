import React, { useState } from "react";
import "./Forecast.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeeklyForecast from "./WeeklyForecast";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Forecast(props) {
  return (
    <div className="forecast">
      <FormattedDate date={props.data.date} />
      <div className="box">
        <div className="forecast-text">
          <h2 className="city-name">{props.data.city.toUpperCase()}</h2>
          <h3 className="conditions">{props.data.conditions.toLowerCase()}</h3>

          <div className="row todays-forecast">
            <div className="col">
              <h4 className="humidity">
                <FontAwesomeIcon icon="water" className="humidity-icon" />
                <span> {props.data.humidity}%</span>
              </h4>
            </div>

            <div className="col">
              <h1>
                  <WeatherIcon icon={props.data.icon} />
               <span className="todays-temp">{props.data.temperature}</span>
                <small className="units">°C</small>
              </h1>
              <p className="temp-units">
                <a href="/" className="far-to-cel">
                  °C
                </a>{" "}
                |{" "}
                <a href="/" className="cel-to-far">
                  °F
                </a>
              </p>
            </div>

            <div className="col">
              <h4 className="wind-speed">
                <span id="wind-speed">{props.data.wind} m/s </span>
                <FontAwesomeIcon icon="wind" className="wind-icon" />
              </h4>
            </div>
          </div>
          <WeeklyForecast />
        </div>
      </div>
    </div>
  );
}
