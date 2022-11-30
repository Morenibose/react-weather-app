import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "5f0454833ce941cae19b2edtb0f69o1f";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day">
            <div className="weatherForecast-day">Thur</div>
            <WeatherIcon code="clear-sky-day" size={32} />
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
