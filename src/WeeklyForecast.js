import React from "react";
import "./WeeklyForecast.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WeeklyForecast() {
  return (
    <div className="weekly-forecast">
      <div class="row">
        <div className="col">
          <p className="weekday">Tue</p>
          <FontAwesomeIcon icon="cloud" className="forecast-icons" />
          <p className="small-temps">
            <span className="max">28°</span> <span className="min">24°</span>
          </p>
        </div>
        <div className="col">
          <p className="weekday">Wed</p>
          <FontAwesomeIcon icon="cloud" className="forecast-icons" />
          <p className="small-temps">
            <span className="max">28°</span> <span class="min">24°</span>
          </p>
        </div>
        <div class="col">
          <p className="weekday">Thu</p>
          <FontAwesomeIcon icon="cloud" className="forecast-icons" />
          <p className="small-temps">
            <span class="max">28°</span> <span class="min">24°</span>
          </p>
        </div>
        <div class="col">
          <p className="weekday">Fri</p>
          <FontAwesomeIcon icon="cloud" className="forecast-icons" />
          <p className="small-temps">
            <span className="max">28°</span> <span className="min">24°</span>
          </p>
        </div>
        <div className="col">
          <p className="weekday">Sat</p>
          <FontAwesomeIcon icon="cloud" className="forecast-icons" />
          <p className="small-temps">
            <span className="max">28°</span> <span className="min">24°</span>
          </p>
        </div>
      </div>
    </div>
  );
}
