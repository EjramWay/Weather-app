const inputLocation = document.getElementById('locationInput')
const search = document.getElementById('searchButton')
const placeName = document.getElementById('placeName')
const temp = document.getElementById('actualTemp')
const windSpeed = document.getElementById('ActualWindSpeed')
const humidity = document.getElementById('ActualHumidity')
const weatherLogo = document.getElementById('weatherLogo')

const apikey = '913a230b0bb10c6775c65e58f356c6cc';
const apiID = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function weather(city) {
    const response =await fetch(apiID + city + `&appid=${apikey}`)
    let data = await response.json();

    placeName.innerHTML = data.name;
    temp.innerHTML = data.main.temp + "°C";
    windSpeed.innerHTML = data.wind.speed + " km/h";
    humidity.innerHTML = data.main.humidity + "%";

    const weatherCondition = data.weather[0].main.toLowerCase();
    updateWeatherLogo(weatherCondition);
}

function updateWeatherLogo(condition) {
    // Clear the current icon
    weatherLogo.innerHTML = ''; // Remove existing weather icon (if any)

    // Add the corresponding weather logo based on the condition
    switch (condition) {
        case 'clear':
            weatherLogo.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Sunny weather
            break;
        case 'clouds':
            weatherLogo.innerHTML = '<i class="fa-solid fa-cloud"></i>'; // Cloudy weather
            break;
        case 'rain':
            weatherLogo.innerHTML = '<i class="fa-solid fa-cloud-showers-heavy"></i>'; // Rainy weather
            break;
        case 'snow':
            weatherLogo.innerHTML = '<i class="fa-solid fa-snowflake"></i>'; // Snowy weather
            break;
        case 'thunderstorm':
            weatherLogo.innerHTML = '<i class="fa-solid fa-bolt"></i>'; // Thunderstorm weather
            break;
        case 'mist':
            weatherLogo.innerHTML = '<i class="fa-solid fa-smog"></i>'; // Misty weather
            break;
        default:
            weatherLogo.innerHTML = '<i class="fa-solid fa-cloud"></i>'; // Default to cloudy
            break;
    }
}
search.addEventListener('click', () => {
    const city = inputLocation.value;
    return weather(city)
        })

        if(inputLocation.value == ""){
            placeName.innerHTML = 'Enter A Location'
            temp.innerHTML = "..." + "°C";
            windSpeed.innerHTML = "..." + " km/h";
            humidity.innerHTML = "..." + "%";
        }