import React from "react";
import axios from "axios";
import "./Forecast.css";


export default function Forecast({coordinates}){

    console.log(coordinates);
              const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
              const latitude = coordinates.lat;
              const longitude = coordinates.lon;
              const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
              axios.get(apiUrl).then(displayForecast);

              function displayForecast(response) {
                console.log(response.data);
                
                return (
                  <div className="row">
                    <div className="col">
                      <div className="forecastDay">Tue</div>
                      <div className="forecastIcon">Icon</div>
                      <div className="ForecastTemp">20°</div>
                    </div>
                  </div>
                );
              }
}