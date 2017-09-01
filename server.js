var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require('path');

// var Sneaker = require('./models/Sneaker');

mongoose.Promise = Promise;

// Create Instance of Express
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var routes = require("./controllers/MainController");
app.use("/", routes);



//MongoDB Configuration configuration
if (process.env.PORT) {
    connectionString = 'mongodb://heroku_gwkh0dm2:fe6g5cu1jjkfirr5a5ki28rilv@ds119064.mlab.com:19064/heroku_gwkh0dm2';
} else {
    connectionString = 'mongodb://localhost/lockerroom';
}

mongoose.connect(connectionString).then(function() {
  app.listen(PORT, function() {
      console.log('listening on port ' + PORT);
    });
});

var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});
