import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import WeeklyForecast from "./WeeklyForecast";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Forecast(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      conditions: response.data.weather[0].main,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="forecast">
        <div className="box">
          <div className="forecast-text">
            <h2 className="city-name">Where to?</h2>
            <h3 className="conditions">{weatherData.conditions}</h3>

            <div className="row todays-forecast">
              <div className="col">
                <h4 className="humidity">
                  <FontAwesomeIcon icon="water" className="humidity-icon" />
                  <span> {weatherData.humidity}</span>
                </h4>
              </div>

              <div className="col">
                <h1>
                  <span className="todays-icon">
                    {" "}
                    <FontAwesomeIcon icon="cloud" />
                  </span>

                  <span className="todays-temp">{weatherData.temperature}</span>
                  <small className="units">°C</small>
                </h1>
              </div>

              <div className="col">
                <h4 className="wind-speed">
                  <span id="wind-speed">{weatherData.wind} m/s </span>
                  <FontAwesomeIcon icon="wind" className="wind-icon" />
                </h4>
              </div>
            </div>
            <WeeklyForecast />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `07c8d029e683ec94d2784e3188d6f11d`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Fetching data...";
  }
}
