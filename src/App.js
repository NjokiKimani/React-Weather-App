import React, { useState } from "react";
import axios from "axios";
import FixDate from "./FixDate";
import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState(null);
  let [city, setCity] = useState("Nairobi");

  function showWeather(response) {
    console.log(response.data);
    setWeatherData({
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      maxTemperature: Math.round(response.data.main.temp_max),
      minTemperature: Math.round(response.data.main.temp_min),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      feel: Math.round(response.data.main.feels_like),
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
    setReady(true);
  }

  function searchWeather() {
    const apiKey = "e8f1bc16c275cf1f9b294c8708d7d1b8";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWeather();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="App">
        <div className="container">
          <form className="searchForm" onSubmit={handleSubmit}>
            <div>
              <input
                type="Search"
                placeholder="Search..."
                className="searchBar"
                onChange={handleCity}
              />
            </div>
            <div>
              <input type="submit" value="🔎︎" className="submitBtn" />
            </div>
          </form>

          <div className="date">
            <FixDate date={weatherData.date} />
          </div>
          <div className="city">{weatherData.city}</div>
          <hr className="cityMarker" />
          <div className="forecastContainer">
            <div className="row">
              <div className="col-6">
                <ul>
                  <li className="day">NOW</li>
                  <li className="temperature">{weatherData.temperature}°</li>
                  <li className="description">{weatherData.description}</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <div className="temperatures">
                    <div className="maxTemperature">
                      H:
                      <span className="maxTemperatureValue">
                        {" "}
                        {weatherData.maxTemperature}°
                      </span>
                    </div>
                    <li className="minTemperature">
                      L:
                      <span className="minTemperatureValue">
                        {" "}
                        {weatherData.minTemperature}°
                      </span>
                    </li>
                  </div>
                  <li className="feel">
                    Feels like:
                    <span className="feelValue"> {weatherData.feel}°</span>
                  </li>
                  <li className="humidity">
                    Humidity:
                    <span className="humidityValue">
                      {" "}
                      {weatherData.humidity}%
                    </span>
                  </li>
                  <li className="wind">
                    Wind:
                    <span className="windValue">{weatherData.wind}mph</span>
                  </li>
                  <li className="uvIndex">
                    UV Index:
                    <span className="uvValue">0</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="weekForecast">
            <div className="week">THIS WEEK</div>
            <div className="weekForecastContainer">
              {" "}
              <Forecast coordinates={weatherData.coordinates} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    searchWeather();
    return "loading...";
  }
}
