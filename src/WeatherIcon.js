import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": `<i className="fa-solid fa-sun"></i>`,
    "02d": `<i className="fa-solid fa-cloud"></i>`,
    "03d": `<i className="fa-solid fa-cloud"></i>`,
    "04d": `<i className="fa-solid fa-cloud"></i>`,
    "09d": `<i className="fa-solid fa-cloud-rain"></i>`,
    "10d": `<i className="fa-solid fa-cloud-rain"></i>`,
    "11d": `<i className="fa-solid fa-cloud-bolt"></i>`,
    "13d": `<i className="fa-solid fa-snowflake"></i>`,
    "50d": `<i className="fa-solid fa-smog"></i>`,
  };

  return <span>{codeMapping[props.icon]}</span>;
}
