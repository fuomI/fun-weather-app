// Load modules
const express = require('express');
const path = require('path');
const fs = require('fs');
const { response } = require('express');

// Initialize app
const app = express();

// Port
const PORT = process.env.PORT || 5000;

// Load view engine PUG
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Default route
app.get('/', function(req,res) {

    // Load index.pug
    res.render('index');
});

// Data on capital cities (json) route
app.get('/citydata', function(req,res) {

    // Save json data of capital cities to variable
    const cityData = fs.readFileSync(__dirname + '/views/json/capital_cities.json');

    res.json(cityData);
});

// Route 404
app.get('*', function (req,res) {
    res.status(404).send("Can't find the requested page.");
});

/* Data on capital cities (json) route
app.get('/citydata', (req, res, next) => {

    // Save raw json data to variable
    const rawData = fs.readFileSync(__dirname + '/views/json/capital_cities.json');

    // String to json obj
    const jsonData = JSON.parse(rawData);

    // Send json data as response
    res.send(Buffer.from(jsonData));
}); */

// App listens port:
app.listen(PORT, function() {
    console.log("Server is running");
});

