import React, {useState} from "react";
import axios from "axios";
import FixWeekDay from "./FixWeekDay";
import "./Forecast.css";


export default function Forecast({coordinates}){
  let [build, setBuild] = useState(false);
  let [ForecastData, setForecastData] = useState (null);

   function displayForecast(response) {
     console.log(response.data);
     setForecastData({
      nextDay: new Date(response.data.list[0].dt *1000),
      nextTemperature: Math.round(response.data.list[1].temp)
     })
     setBuild(true);
   }

    console.log(coordinates);

    function searchWeekForecast(){
const apiKey = "e8f1bc16c275cf1f9b294c8708d7d1b8";
const latitude = coordinates.lat;
const longitude = coordinates.lon;
const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(displayForecast);
    }   
           if(build){              
              return (
                <div className="row">
                  <div className="col">
                    <div className="forecastDay">
                      <FixWeekDay day={ForecastData.nextDay} />{" "}
                    </div>
                    <div className="forecastIcon">Icon</div>
                    <div className="ForecastTemp">
                      {ForecastData.nextTemperature}°
                    </div>
                  </div>
                </div>
              );}

           else{
            searchWeekForecast();
            return "please wait";
           }

                              
}