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
    connectionString = 'mongodb://heroku_kq38k19q:s9r2nllng9kusrpikoqt57vlmb@ds115352.mlab.com:15352/heroku_kq38k19q';
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
//-------------------------------------------------//



// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "./public/index.html");
// });
//
// app.get('/api', function(req, res) {
//
//   Sneaker.find({}, function(err, doc) {
//     if(err) {
//       console.log(err);
//     }else {
//       var sneakers = [];
//
//       doc.forEach( function(sneaker) {
//         sneakers.push({
//           name: sneaker.name,
//           img1: sneaker.img1,
//           img2: sneaker.img2,
//           img3: sneaker.img3,
//           img4: sneaker.img4
//         });//push
//       });//forEach
//       console.log(sneakers[0]);
//       res.send(sneakers);
//     }//else
//   });//find
//
// });//get