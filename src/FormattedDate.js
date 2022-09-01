import React from "react";
import "./Date.css";

export default function FormattedDate(props) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursay",
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
    <section className="date">
      <h4 className="date-time-text">
        {day} {hour}:{minutes}
      </h4>
    </section>
  );
}