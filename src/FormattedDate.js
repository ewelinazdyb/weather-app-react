import React from "react";
import "./Date.css";

export default function FormattedDate(props) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = weekdays[props.date.getDay()];
  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="date">
      <h4>
        Last updated:
        <strong>
          {" "}
          {day} {hour}:{minutes}
        </strong>
      </h4>
    </div>
  );
}
