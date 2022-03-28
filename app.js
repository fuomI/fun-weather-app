// Load modules
const express = require('express');
const path = require('path');

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

// Route 404
app.get('*', function (req,res) {
    res.status(404).send("Can't find the requested page.");
});

// App listens port:
app.listen(PORT, function() {
    console.log("Server is running");
});

