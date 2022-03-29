// My API key
const apiKey = '722d03407f1aa7186ef010d5e70e918e';

// Fetch current weather data from weatherstack.com
fetch('http://api.weatherstack.com/current?access_key=' + apiKey + '&query=Espoo')
  .then(response => response.json())
  .then(data => console.log(data));

