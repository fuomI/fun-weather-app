// My API key
const apiKey = '722d03407f1aa7186ef010d5e70e918e';

// Make call to the weather API
function getWeatherDataForecast() {

    // Use the chosen city
    let city = document.getElementById('cityPicker').value;

    // Get data from API
    fetch('http://api.weatherstack.com/current?access_key=' + apiKey + '&query=' + city)
        .then(res => res.json())
        .then(data => {

            console.log(data);
            // Populate main section with weather data (#city, #temperature, #condition)

            /* First city
            let city = document.createElement('h2');
            city.innerText = data.location.name;
            document.getElementById('city').appendChild(city);

            // Then temperature
            let temperature = document.createElement('h2');
            temperature.innerText = data.current.temperature + "°";
            document.getElementById('temperature').appendChild(temperature);

            // Then weather condition icon & alt text
            let condition = document.createElement('img');
            condition.setAttribute('src', data.current.weather_icons[0]);
            condition.setAttribute('alt', data.current.weather_descriptions[0]);
            document.getElementById('condition').appendChild(condition);
            */
        });
}