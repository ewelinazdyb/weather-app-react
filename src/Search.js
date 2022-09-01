import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Forecast from "./Forecast";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `07c8d029e683ec94d2784e3188d6f11d`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      conditions: response.data.weather[0].main,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="search">
        <div className="box search-box">
          <form onSubmit={handleSubmit}>
            <input
              id="search-city-input"
              className="form-control"
              type="text"
              placeholder="Search city"
              onChange={handleCityChange}
            />
            <button type="submit" className="submit-button">
              Go!
            </button>
          </form>
        </div>
        <button className="current-button">Current</button>

        <Forecast data={weatherData} />
      </div>
    );
  } else {
    search();

    return "Fetching data...";
  }
}
