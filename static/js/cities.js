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

                // Make option element
                let cityElement = document.createElement('option');

                // Make Helsinki default
                cityElement.setAttribute('selected', 'selected');

                // Populate
                cityElement.innerText = city;

                // Append to parent
                document.getElementById('cityPicker').appendChild(cityElement);
            }

            // Make option element
            let cityElement = document.createElement('option');

            // Populate
            cityElement.innerText = city;

            // Append to parent
            document.getElementById('cityPicker').appendChild(cityElement);
        });
    });
