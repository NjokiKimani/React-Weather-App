import React, {useState} from "react";
import axios from "axios";
import FixDate from "./FixDate";
import "./App.css";

export default function App() {
  let [ready, setReady] = useState(false);
    let [weatherData, setWeatherData] = useState(null);

function showWeather(response){
  console.log(response.data)
  setWeatherData({
    temperature: Math.round(response.data.main.temp),
    maxTemperature: Math.round(response.data.main.temp_max),
    minTemperature: Math.round(response.data.main.temp_min),
    humidity: Math.round(response.data.main.humidity),
    wind: Math.round(response.data.wind.speed),
feel: Math.round(response.data.main.feels_like),
date: new Date(response.data.dt*1000)
  })
  setReady(true);
}

function searchWeather(){
      const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
      let city = "Nairobi";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(showWeather);
}

if(ready){
  return (
    <div className="App">
      <div className="container">
        <form className="searchForm">
          <div>
            <input
              type="Search"
              placeholder="Search..."
              className="searchBar"
            />
          </div>
          <div>
            <input type="submit" value="🔎︎" className="submitBtn" />
          </div>
        </form>

        <div className="date">
          <FixDate date={weatherData.date} />
        </div>
        <div className="country">ITALY</div>
        <div className="city">Palermo</div>
        <hr className="cityMarker" />
        <div className="todayForecast">
          <div className="today">TODAY</div>
          <div className="forecastContainer">
            <div className="row">
              <div className="col-6">
                <ul>
                  <li className="day">NOW</li>
                  <li className="temperature">42°</li>
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
                    <span className="humidityValue"> {weatherData.humidity}%</span>
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
        </div>
        <div className="weekForecast">
          <div className="week">THIS WEEK</div>
          <div className="weekForecastContainer"></div>
        </div>
      </div>
    </div>
  );
}
else {

  searchWeather();
  return "loading...";

}
}

