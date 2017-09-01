var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require('path');

var Sneaker = require('./models/Sneaker');

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


// ----------------------------------- //
// MongoDB Configuration configuration //
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


var Sneaker1 = new Sneaker({
  name: "NIKE AIR MAX 90 ULTRA 2.0 FLYKNIT",
  img1: "https://images.nike.com/is/image/DotCom/PDP_HERO/875943_301_A_PREM/air-max-90-ultra-2-flyknit-mens-shoe.jpg",
  img2: "https://images2.nike.com/is/image/DotCom/PDP_HERO/875943_301_B_PREM/air-max-90-ultra-2-flyknit-mens-shoe.jpg",
  img3: "https://images3.nike.com/is/image/DotCom/PDP_HERO/875943_301_C_PREM/air-max-90-ultra-2-flyknit-mens-shoe.jpg",
  img4: "https://images.nike.com/is/image/DotCom/PDP_HERO/875943_301_D_PREM/air-max-90-ultra-2-flyknit-mens-shoe.jpg"
});

var Sneaker2 = new Sneaker({
  name: "NIKE METCON 3",
  img1: "https://images.nike.com/is/image/DotCom/PDP_HERO/852928_009_A_PREM/metcon-3-mens-training-shoe.jpg",
  img2: "https://images2.nike.com/is/image/DotCom/PDP_HERO/852928_009_B_PREM/metcon-3-mens-training-shoe.jpg",
  img3: "https://images3.nike.com/is/image/DotCom/PDP_HERO/852928_009_C_PREM/metcon-3-mens-training-shoe.jpg",
  img4: "https://images.nike.com/is/image/DotCom/PDP_HERO/852928_009_D_PREM/metcon-3-mens-training-shoe.jpg"
});

var Sneaker3 = new Sneaker({
  name: "KOBE A.D. NXT",
  img1: "https://images.nike.com/is/image/DotCom/PDP_HERO/882049_007_A_PREM/kobe-ad-nxt-mens-basketball-shoe.jpg",
  img2: "https://images2.nike.com/is/image/DotCom/PDP_HERO/882049_007_B_PREM/kobe-ad-nxt-mens-basketball-shoe.jpg",
  img3: "https://images3.nike.com/is/image/DotCom/PDP_HERO/882049_007_C_PREM/kobe-ad-nxt-mens-basketball-shoe.jpg",
  img4: "https://images.nike.com/is/image/DotCom/PDP_HERO/882049_007_D_PREM/kobe-ad-nxt-mens-basketball-shoe.jpg"
});

var Sneaker4 = new Sneaker({
  name: "CONVERSE CHUCK TAYLOR AMERICANA HIGH TOP",
  img1: "https://images.nike.com/is/image/DotCom/PDP_HERO/M8437_602_A_PREM/converse-chuck-taylor-americana-high-top-unisex-shoe.jpg",
  img2: "https://images2.nike.com/is/image/DotCom/PDP_HERO/M8437_602_B_PREM/converse-chuck-taylor-americana-high-top-unisex-shoe.jpg",
  img3: "https://images3.nike.com/is/image/DotCom/PDP_HERO/M8437_602_C_PREM/converse-chuck-taylor-americana-high-top-unisex-shoe.jpg",
  img4: "https://images.nike.com/is/image/DotCom/PDP_HERO/M8437_602_D_PREM/converse-chuck-taylor-americana-high-top-unisex-shoe.jpg"
});

var list = [Sneaker1, Sneaker2, Sneaker3, Sneaker4];
Sneaker.insertMany(list);
