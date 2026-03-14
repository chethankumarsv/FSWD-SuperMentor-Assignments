import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast";
import { getWeather, getWeatherByCoords, getForecast } from "../services/weatherApi";

function Weather(){

const [weather,setWeather] = useState(null);
const [forecast,setForecast] = useState(null);
const [error,setError] = useState("");
const [loading,setLoading] = useState(false);

let background = "#74ebd5";

if (weather) {

  const condition = weather.weather[0].main;

  if (condition === "Clear") background = "#fddb92";
  if (condition === "Clouds") background = "#bdc3c7";
  if (condition === "Rain") background = "#4facfe";
  if (condition === "Thunderstorm") background = "#616161";

}

const searchWeather = async(city)=>{

try{

setLoading(true);
setError("");

const data = await getWeather(city);
setWeather(data);

const forecastData = await getForecast(city);
setForecast(forecastData);

}
catch{

setError("City not found");

}
finally{

setLoading(false);

}

};

useEffect(() => {

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(

      async (position) => {

        try {

          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const data = await getWeatherByCoords(lat, lon);
          setWeather(data);

        } catch (error) {

          console.log("Location weather failed");

        }

      },

      () => {
        console.log("Location permission denied");
      }

    );

  }

}, []);

return (

<div style={{ background: background, minHeight: "100vh", paddingTop: "40px" }}>

<h1>Weather Dashboard</h1>

<SearchBar onSearch={searchWeather}/>

{loading && <p>Loading...</p>}

{error && <p>{error}</p>}

{weather && <WeatherCard data={weather}/>}

{forecast && <Forecast data={forecast}/>}

</div>

);

}

export default Weather;