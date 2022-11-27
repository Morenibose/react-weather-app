import React, { useState } from "react";
import axios from "axios";

import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      pressure: response.data.temperature.pressure,
      date: "Wednesday 07:00",
      icon: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li> {weatherData.date} </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}{" "}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Pressure:{weatherData.pressure} </li>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5f0454833ce941cae19b2edtb0f69o1f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
