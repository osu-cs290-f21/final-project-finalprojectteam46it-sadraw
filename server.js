var path = require('path'); // Set the home path variable
var express = require('express'); // Get express.js
var app = express(); // Define express to fit within these parameters
var port = process.env.PORT || 3000; // Set the port and port environment variable to 3000

// ######## var postData = require('./postData');

// Define handlebars.express.js in a sense
var handlebars = require('express-handlebars');

var hbsNgin = handlebars.create({
    defaultLayout: 'main',
    partialsDir: ['views/partials/']
});


// Set 'handlebars' as the viewing engine
app.set('view engine', 'handlebars');

// Set the viewing engine as handlebars
app.engine('handlebars', hbsNgin.engine);

// Use the public directory as the place for all the working files on the main home page
app.use(express.static('public'));

// The home page so that localhost:3000 == localhost:3000/

app.get('/', function (req, res, next) {
  /*
    console.log("== client requesting home template");
    res.status(200).render('homePage', postData); */
}); 

// Open the 404 page with the handlebars template
app.get('./views/', function (req, res) { // the 404 page is stored in views
  console.log("== Throw the 404 for a bad directory");
  res.status(404).render('404');
});

// Open the main page and can basically be exactly the same as lines 38-41
app.get('./', (req, res) => {
    res.render('main', {layout: 'index'});
});

// If none of previous found, 404 Page
app.get("*", function (req, res) {
  res.status(404).render('404', {
    path: req.url
  })
});

// Open the port for listening and start the server on port 3000
app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
