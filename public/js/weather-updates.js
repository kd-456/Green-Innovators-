// Specific JavaScript for the weather updates page

document.addEventListener('DOMContentLoaded', () => {
    fetchWeatherUpdates();
});

async function fetchWeatherUpdates() {
    const weatherContainer = document.querySelector('.weather-container');

    // Example weather data (replace with actual API call if needed)
    const weatherData = [
        { date: '2024-07-28', summary: 'Sunny', temp: '30°C' },
        { date: '2024-07-29', summary: 'Partly Cloudy', temp: '28°C' },
        { date: '2024-07-30', summary: 'Rainy', temp: '24°C' }
    ];

    weatherData.forEach(data => {
        const weatherInfo = document.createElement('div');
        weatherInfo.className = 'weather-info';

        const date = document.createElement('h3');
        date.textContent = data.date;

        const summary = document.createElement('p');
        summary.textContent = `Weather: ${data.summary}`;

        const temp = document.createElement('p');
        temp.textContent = `Temperature: ${data.temp}`;

        weatherInfo.appendChild(date);
        weatherInfo.appendChild(summary);
        weatherInfo.appendChild(temp);
        weatherContainer.appendChild(weatherInfo);
    });
}
