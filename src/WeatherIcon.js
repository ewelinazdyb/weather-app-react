import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": `<FontAwesomeIcon icon={regular('sun')} />`,
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
