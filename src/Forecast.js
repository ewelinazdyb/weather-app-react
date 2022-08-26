import React from "react";
import "./Forecast.css";
import City from "./City";
import Conditions from "./Conditions";
import WeeklyForecast from "./WeeklyForecast";
import Humidity from "./Humidity";
import Temperature from "./Temperature";
import Wind from "./Wind";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="box">
        <div className="forecast-text">
          <City />
          <Conditions />

          <div className="row todays-forecast">
            <Humidity />
            <Temperature />
            <Wind />
          </div>
          <WeeklyForecast />
        </div>
      </div>
    </div>
  );
}
