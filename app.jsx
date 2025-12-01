// App.jsx
import React, { useState } from "react"; // Ensure these imports are at the top
import "./App.css";
import { API_KEY, getWeather } from "./script.js";

const App = () => { // The functional component definition is crucial
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    if (city) {
      const data = await getWeather(city);
      setWeatherData(data);
    }
  };

  return (
    <div>
      <h1>My Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city, state code, country,"
      />
      <button className="weather-button" onClick={handleSearch}>Get Weather</button>
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {Math.round(weatherData.main.temp)}°F</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}; // The closing brace for the App component

export default App;
