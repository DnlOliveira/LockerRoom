
var express = require("express");
var router = express.Router();
var Sneaker = require('../models/Sneaker');
var path = require('path');


router.get('/', (req, res) => {
  res.sendFile(__dirname + "../public/index.html");
});

//gets all images for gallery from db
router.get('/api', (req, res) => {

  Sneaker.find({}, (err, doc) => {
    if(err) {
      console.log(err);
    }else {
      var sneakers = [];

      doc.forEach( (sneaker) => {
        console.log(sneaker);
        sneakers.push({
          id: sneaker._id,
          name: sneaker.name,
          img1: sneaker.img1,
          img2: sneaker.img2,
          img3: sneaker.img3,
          img4: sneaker.img4
        });//push
      });//forEach

      res.send(sneakers);
    }//else
  });//find

});//get

router.post("/api", (req, res) => {
  console.log(req.body);

  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time
  Sneaker.create({
    name: "WORKED",
    img1: "URL 1",
    img2: "URL2"
  }, (err) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Article");
    }
  });

});



module.exports = router;
