import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day">
            <div className="weatherForecast-day">Thur</div>
            <WeatherIcon code="01d" />
            <div className="weatherForecast-temperatures">
              <span className="weatherForecast-temperature-max"> 19°</span>
              <span className="weatherForecast-temperature-min"> 10°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
