import React, { useEffect, useState } from "react";
import "./WeeklyForecast.css";
import axios from "axios";
import WeeklyForecastDay from "./WeeklyForecastDay";

export default function WeeklyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    const apiKey = `07c8d029e683ec94d2784e3188d6f11d`;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  if (loaded) {
    return (
      <div className="weekly-forecast">
        <div class="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeeklyForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
