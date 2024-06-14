import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p className="git-code">
        <a
          href="https://github.com/ewelinazdyb/weather-app-react"
          target="_blank"
          rel="noreferrer"
          style="color:#e0e0e0"
        >
          Open-source code
        </a>{" "}
        by Ewelina Zdybel
      </p>
    </div>
  );
}
