// Load modules
const express = require('express');
const path = require('path');
const fs = require('fs');
const { response } = require('express');

// Initialize app
const app = express();

// Port
const PORT = process.env.PORT || 5000;

// Save json data of capital cities to variable
const cityData = fs.readFileSync(__dirname + '/views/json/capital_cities.json');

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

    // Status = 200 OK, Content-Type: text/json
    response.writeHead(200, {'Content-Type' : 'text/json'});

    // Json data as response
    response.write(jsonData);

    // End response
    response.end();
});

// Route 404
app.get('*', function (req,res) {
    res.status(404).send("Can't find the requested page.");
});

// App listens port:
app.listen(PORT, function() {
    console.log("Server is running");
});

