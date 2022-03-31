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

// Use static path which can be accessed easily
app.use("/static", express.static("static"));

// Read cities into variable
const cityData = fs.readFileSync(__dirname + '/static/json/capital_cities.json');

// Parse into JSON object
const cityDataJSON = JSON.parse(cityData);

// Default route
app.get('/', function(req,res) {

    // Load index.pug
    res.render('index');
});

// City data route
app.get('/citydata', function(req, res) {

    // Send city data as response
    res.send(cityDataJSON);
});

// Route 404
app.get('*', function (req,res) {
    res.status(404).send("Can't find the requested page.");
});

// App listens port:
app.listen(PORT, function() {
    console.log("Server is running");
});

