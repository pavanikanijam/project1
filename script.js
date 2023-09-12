const apiKey = 'YOUR_API_KEY';
async function fetchWeatherData() {
    const cityName = 'CityName'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(apiUrl);
        updateWeatherData(response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
function updateWeatherData(data) {
    const weatherDataContainer = document.querySelector('.weather-data');

    if (data.cod === 200) {
        const cityName = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        const html = `
            <p>City: ${cityName}</p>
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
        `;

        weatherDataContainer.innerHTML = html;
    } else {
        weatherDataContainer.innerHTML = `<p>Error: ${data.message}</p>`;
    }
}

// Fetch weather data when the page loads
fetchWeatherData()
