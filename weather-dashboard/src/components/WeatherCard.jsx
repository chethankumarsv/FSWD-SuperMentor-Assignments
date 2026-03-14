function WeatherCard({ data }) {

  const weatherMain = data.weather[0].main;

  const getIcon = () => {
    if (weatherMain === "Clear") return "☀️";
    if (weatherMain === "Clouds") return "☁️";
    if (weatherMain === "Rain") return "🌧️";
    if (weatherMain === "Snow") return "❄️";
    return "🌤️";
  };

  return (

    <div className="weather-card">

      <h1 style={{fontSize:"50px"}}>{getIcon()}</h1>

      <h2>{data.name}</h2>

      <p>🌡 Temperature: {data.main.temp}°C</p>

      <p>🌥 Weather: {data.weather[0].description}</p>

      <p>💧 Humidity: {data.main.humidity}%</p>

      <p>💨 Wind: {data.wind.speed} m/s</p>

    </div>

  );

}

export default WeatherCard;