import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <div className="box search-box">
        <form id="search-city-form">
          <input
            id="search-city-input"
            className="form-control"
            type="text"
            placeholder="Search city"
            autocomplete="off"
          />
          <button type="submit" className="submit-button" id="submit-button">
            Go!
          </button>
        </form>
      </div>

      <button className="current-button" id="current-button">
        Current
      </button>
    </div>
  );
}
