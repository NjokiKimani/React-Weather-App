import React from "react";
import "./App.css";

function App() {
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

        <div className="date">8 MARCH, 2023</div>
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
                      <span className="maxTemperatureValue"> 40°</span>
                    </div>
                    <li className="minTemperature">
                      L:
                      <span className="minTemperatureValue"> 20°</span>
                    </li>
                  </div>
                  <li className="feel">
                    Feels like:
                    <span className="feelValue"> 20°</span>
                  </li>
                  <li className="humidity">
                    Humidity:
                    <span className="humidityValue"> 42%</span>
                  </li>
                  <li className="wind">
                    Wind:
                    <span className="windValue">4 mph</span>
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

export default App;
