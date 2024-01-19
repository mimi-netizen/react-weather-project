import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          Coded by <a href="https://github.com/mimi-netizen">Celyne Kydd</a> and
          is open-sourced on{" "}
          <a href="https://github.com/mimi-netizen/react-weather-project">
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
