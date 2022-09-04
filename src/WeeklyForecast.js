import React, { useState } from "react";
import "./WeeklyForecast.css";
import axios from "axios";
import WeeklyForecastDay from "./WeeklyForecastDay";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WeeklyForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="weekly-forecast">
        <div class="row">
          <WeeklyForecastDay data={forecastData[0]} />
          <WeeklyForecastDay data={forecastData[1]} />
          <WeeklyForecastDay data={forecastData[2]} />
          <WeeklyForecastDay data={forecastData[3]} />
          <WeeklyForecastDay data={forecastData[4]} />
        </div>
      </div>
    );
  } else {
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    const apiKey = `07c8d029e683ec94d2784e3188d6f11d`;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
