import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <div className="box search-box">
        <form >
          <input
            id="search-city-input"
            className="form-control"
            type="text"
            placeholder="Search city"
          />
          <button type="submit" className="submit-button">
            Go!
          </button>
        </form>
      </div>

      <button className="current-button">
        Current
      </button>
    </div>
  );
}
