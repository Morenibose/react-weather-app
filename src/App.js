import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/morenike-adebayo-7b0a5151/"
            target="_blank"
            rel="noreferrer"
          >
            Morenike Adebayo
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Morenibose/react-weather-app/"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
