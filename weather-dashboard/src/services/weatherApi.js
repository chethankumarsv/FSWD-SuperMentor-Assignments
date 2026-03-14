export const getWeather = async (city) => {

  const API_KEY = "your api here";

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
};
export const getWeatherByCoords = async (lat, lon) => {

  const API_KEY = "your api here";

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Weather not found");
  }

  return response.json();
};
export const getForecast = async (city) => {

  const API_KEY = "your api here";

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Forecast not found");
  }

  return response.json();
};