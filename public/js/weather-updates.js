// // Specific JavaScript for the weather updates page

// document.addEventListener('DOMContentLoaded', () => {
//     fetchWeatherUpdates();
// });

// async function fetchWeatherUpdates() {
//     const weatherContainer = document.querySelector('.weather-container');

//     // Example weather data (replace with actual API call if needed)
//     const weatherData = [
//         { date: '2024-07-28', summary: 'Sunny', temp: '30°C' },
//         { date: '2024-07-29', summary: 'Partly Cloudy', temp: '28°C' },
//         { date: '2024-07-30', summary: 'Rainy', temp: '24°C' }
//     ];

//     weatherData.forEach(data => {
//         const weatherInfo = document.createElement('div');
//         weatherInfo.className = 'weather-info';

//         const date = document.createElement('h3');
//         date.textContent = data.date;

//         const summary = document.createElement('p');
//         summary.textContent = `Weather: ${data.summary}`;

//         const temp = document.createElement('p');
//         temp.textContent = `Temperature: ${data.temp}`;

//         weatherInfo.appendChild(date);
//         weatherInfo.appendChild(summary);
//         weatherInfo.appendChild(temp);
//         weatherContainer.appendChild(weatherInfo);
//     });
// }

// document.getElementById('locationForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const location = document.getElementById('location').value;
//     const apiKey = '433d9883719a4001b0495725242807';
//     const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             const weatherContainer = document.querySelector('.weather-container');
//             weatherContainer.innerHTML = ''; // Clear previous results

//             if (data.error) {
//                 const errorMsg = document.createElement('p');
//                 errorMsg.textContent = `Error: ${data.error.message}`;
//                 weatherContainer.appendChild(errorMsg);
//             } else {
//                 const weather = data.current;
//                 const locationInfo = data.location;

//                 const weatherInfo = document.createElement('div');
//                 weatherInfo.className = 'weather-info';

//                 const locationName = document.createElement('h3');
//                 locationName.textContent = `${locationInfo.name}, ${locationInfo.region}, ${locationInfo.country}`;

//                 const temp = document.createElement('p');
//                 temp.textContent = `Temperature: ${weather.temp_c}°C`;

//                 const condition = document.createElement('p');
//                 condition.textContent = `Condition: ${weather.condition.text}`;

//                 const humidity = document.createElement('p');
//                 humidity.textContent = `Humidity: ${weather.humidity}%`;

//                 const wind = document.createElement('p');
//                 wind.textContent = `Wind: ${weather.wind_kph} kph`;

//                 weatherInfo.appendChild(locationName);
//                 weatherInfo.appendChild(temp);
//                 weatherInfo.appendChild(condition);
//                 weatherInfo.appendChild(humidity);
//                 weatherInfo.appendChild(wind);
//                 weatherContainer.appendChild(weatherInfo);
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             const weatherContainer = document.querySelector('.weather-container');
//             const errorMsg = document.createElement('p');
//             errorMsg.textContent = `Error: Could not retrieve data.`;
//             weatherContainer.appendChild(errorMsg);
//         });
// });





document.getElementById('locationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const location = document.getElementById('location').value;

    fetch('/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ location })
    })
        .then(response => response.json())
        .then(data => {
            const weatherContainer = document.querySelector('.weather-container');
            weatherContainer.innerHTML = ''; // Clear previous results

            if (data.error) {
                const errorMsg = document.createElement('p');
                errorMsg.textContent = `Error: ${data.error}`;
                weatherContainer.appendChild(errorMsg);
            } else {
                const weather = data.current;
                const locationInfo = data.location;

                const weatherInfo = document.createElement('div');
                weatherInfo.className = 'weather-info';

                const locationName = document.createElement('h3');
                locationName.textContent = `${locationInfo.name}, ${locationInfo.region}, ${locationInfo.country}`;

                const temp = document.createElement('p');
                temp.textContent = `Temperature: ${weather.temp_c}°C`;

                const condition = document.createElement('p');
                condition.textContent = `Condition: ${weather.condition.text}`;

                const humidity = document.createElement('p');
                humidity.textContent = `Humidity: ${weather.humidity}%`;

                const wind = document.createElement('p');
                wind.textContent = `Wind: ${weather.wind_kph} kph`;

                weatherInfo.appendChild(locationName);
                weatherInfo.appendChild(temp);
                weatherInfo.appendChild(condition);
                weatherInfo.appendChild(humidity);
                weatherInfo.appendChild(wind);
                weatherContainer.appendChild(weatherInfo);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            const weatherContainer = document.querySelector('.weather-container');
            const errorMsg = document.createElement('p');
            errorMsg.textContent = `Error: Could not retrieve data.`;
            weatherContainer.appendChild(errorMsg);
        });
});
