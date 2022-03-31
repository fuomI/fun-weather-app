// When page has loaded
window.onload = (event) => {

    // Declare variables for main section (grids) where data is presented
    const first = document.getElementById('first');
    const second = document.getElementById('second');
    const third = document.getElementById('third');
    const fourth = document.getElementById('fourth');
    const fifth = document.getElementById('fifth');
    const sixth = document.getElementById('sixth');
    const seventh = document.getElementById('seventh');

    // and button variables
    const currentBtn = document.getElementById('today');
    const forecastBtn = document.getElementById('thisWeek');

    // My API key
    const apiKey = '722d03407f1aa7186ef010d5e70e918e';

    // Current-btn is active onload
    currentBtn.classList.add('active');

    // Make call to the weather API
    function getWeatherDataCurrent() {

        // Refresh button activity
        currentBtn.classList.add('active');
        forecastBtn.classList.remove('active');

        // Reset main section
        first.innerHTML = "";
        second.innerHTML = "";
        third.innerHTML = "";
        fourth.innerHTML = "";
        fifth.innerHTML = "";
        sixth.innerHTML = "";
        seventh.innerHTML = "";

        // Use the chosen city
        let city = document.getElementById('cityPicker').value;

        // Get data from API
        fetch('http://api.weatherstack.com/current?access_key=' + apiKey + '&query=' + city)
            .then(res => res.json())
            .then(data => {

                // Populate main section with weather data (#city, #temperature, #condition)

                // First city
                let city = document.createElement('h2');
                city.innerText = data.location.name;
                first.appendChild(city);

                // Then temperature
                let temperature = document.createElement('h2');
                temperature.innerText = data.current.temperature + "°";
                second.appendChild(temperature);

                // Then weather condition icon & alt text
                let condition = document.createElement('img');
                condition.setAttribute('src', data.current.weather_icons[0]);
                condition.setAttribute('alt', data.current.weather_descriptions[0]);
                third.appendChild(condition);
            });
    };

    // and add event listener to current-btn
    currentBtn.addEventListener("click", getWeatherDataCurrent());
};