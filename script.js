// script.js
export const API_KEY = "24ab28bb93d6ae8ba5fc98be204e08bf"; // Use your actual API key here

export async function getWeather(locationQuery) { // Changed 'city' to 'locationQuery' for clarity
    try {
        // Step 1: Geocode the location query to get lat/lon
        const geocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${locationQuery}&limit=1&appid=${API_KEY}`;
        const geoResponse = await fetch(geocodingUrl);
        if (!geoResponse.ok) {
            throw new Error(`Geocoding HTTP error! status: ${geoResponse.status}`);
        }
        const geoData = await geoResponse.json();

        if (geoData.length === 0) {
            throw new Error(`Location '${locationQuery}' not found.`);
        }

        const { lat, lon } = geoData[0]; // Get latitude and longitude from the first result

        // Step 2: Use lat/lon to get weather data
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;
        const weatherResponse = await fetch(weatherUrl);
        if (!weatherResponse.ok) {
            throw new Error(`Weather HTTP error! status: ${weatherResponse.status}`);
        }
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    } catch (error) {
        console.error("Error fetching weather:", error.message); // Log full error message
        return null;
    }
}
