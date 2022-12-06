import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="weatherAppName"> Weather App built with React</h1>
      <div className="container">
        <Weather defaultCity="Lagos" />
        <footer>
          This project coded by{" "}
          <a
            href="https://www.linkedin.com/in/morenike-adebayo-7b0a5151/"
            target="_blank"
            rel="noreferrer"
          >
            Morenike Adebayo
          </a>{" "}
          is{" "}
          <a
            href="https://github.com/Morenibose/react-weather-app/"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub,
          </a>
          and
          <a
            href="https://leafy-taffy-db3794.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
