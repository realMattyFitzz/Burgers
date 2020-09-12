// NPM packages
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
// Establish express instance
var app = express();
// Establish port
var PORT = process.env.PORT || 8080;

// Serve static content for the app from 'public' directory in the application directory
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));
// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Import routes and give the server access
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});