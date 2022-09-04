import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeeklyForecast.css";

export default function WeeklyForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return weekdays[day];
  }

  return (
    <div className="weekly-forecast-day">
      <p className="weekday">{day()}</p>
      <div className="forecast-icon">
        <WeatherIcon icon={props.data.weather[0].icon} />
      </div>
      <p className="small-temps">
        <span className="max">{maxTemp()}</span>{" "}
        <span className="min">{minTemp()}</span>
      </p>
    </div>
  );
}
