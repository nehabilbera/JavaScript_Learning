const inputBox = document.getElementById('input-box');
const searchBtn = document.getElementById('searchBtn');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind');
const weatherImg = document.querySelector('.weather-img');

async function checkWeather(city) {
    const apiKey = "38417111f5e6739a4808d73444d2676a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    try {
        const response = await fetch(url);

        const weather_data = await response.json();
        console.log(weather_data);

        if (temperature) temperature.innerHTML = `${Math.round(weather_data.main.temp)}°C`;
        if (description) description.innerHTML = `${weather_data.weather[0].description}`;
        if (humidity) humidity.innerHTML = `${weather_data.main.humidity}%`;
        if (wind_speed) wind_speed.innerHTML = `${weather_data.wind.speed} Km/H`;

        // console.log(temperature.innerHTML);
        // console.log(description.innerHTML);
        // console.log(humidity.innerHTML);
        // console.log(wind_speed.innerHTML);

        if (weatherImg) {
            switch (weather_data.weather[0].main) {
                case 'Clouds':
                    weatherImg.src = "/assets/cloud.png";
                    break;
                case 'Clear':
                    weatherImg.src = "/assets/clear.png";
                    break;
                case 'Rain':
                    weatherImg.src = "/assets/rain.png";
                    break;
                case 'Mist':
                    weatherImg.src = "/assets/mist.png";
                    break;
                case 'Snow':
                    weatherImg.src = "/assets/snow.png";
                    break;
                case 'Haze':
                    weatherImg.src = "/assets/snow.png";
                    break;
                default:
                    weatherImg.src = "/assets/404.png";
                    break;
            }
        }
    } 
    catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to retrieve weather data. Please try again.');
    }
}

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        checkWeather(inputBox.value);
    });
}

