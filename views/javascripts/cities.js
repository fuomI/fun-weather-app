// Get country/ citydata from backend
fetch('/citydata')
    .then(res => res.json())
    .then(data => {

        // cityArr to hold only cities
        let cityArr = [];

        // Add only cities to the cityArr
        data.forEach(function(country) {
            cityArr.push(country.city);
        });

        // Sort array to alphabetical order
        cityArr.sort();

        // Add cities to the cityPicker
        cityArr.forEach(function(city) {

            // Make Helsinki default value
            if (city === 'Helsinki') {

                let cityElement = document.createElement('option');
                cityElement.setAttribute('selected', 'selected');
                cityElement.innerText = city;
                document.getElementById('cityPicker').appendChild(cityElement);
            }

            let cityElement = document.createElement('option');
            cityElement.innerText = city;
            document.getElementById('cityPicker').appendChild(cityElement);
        });
    });
