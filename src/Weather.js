import React from "react";

import "./weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Lagos</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Mostly Cloudy"
          />
          8°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 1%</li>
            <li>Humidity:46%</li>
            <li>Wind:11km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
