import React from "react";
import "./WeatherIcon.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": <FontAwesomeIcon icon={solid("sun")} />,
    "02d": <FontAwesomeIcon icon={solid("cloud-sun")} />,
    "03d": <FontAwesomeIcon icon={solid("cloud")} />,
    "04d": <FontAwesomeIcon icon={solid("cloud")} />,
    "09d": <FontAwesomeIcon icon={solid("cloud-rain")} />,
    "10d": <FontAwesomeIcon icon={solid("cloud-sun-rain")} />,
    "11d": <FontAwesomeIcon icon={solid("cloud-bolt")} />,
    "13d": <FontAwesomeIcon icon={solid("snowflake")} />,
    "50d": <FontAwesomeIcon icon={solid("smog")} />,

    "01n": <FontAwesomeIcon icon={solid("moon")} />,
    "02n": <FontAwesomeIcon icon={solid("cloud-moon")} />,
    "03n": <FontAwesomeIcon icon={solid("cloud")} />,
    "04n": <FontAwesomeIcon icon={solid("cloud-moon")} />,
    "09n": <FontAwesomeIcon icon={solid("cloud-rain")} />,
    "10n": <FontAwesomeIcon icon={solid("cloud-moon-rain")} />,
    "11n": <FontAwesomeIcon icon={solid("cloud-bolt")} />,
    "13n": <FontAwesomeIcon icon={solid("snowflake")} />,
    "50n": <FontAwesomeIcon icon={solid("smog")} />,
  };

  return <span className="todays-icon">{codeMapping[props.icon]}</span>;
}
