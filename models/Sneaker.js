var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SneakerSchema = new Schema({

  name: {
    type: String
  },
  img1: {
    type: String
  },
  img2: {
    type: String
  },
  img3: {
    type: String
  },
  img4: {
    type: String
  }
});

var Sneaker = mongoose.model("Sneaker", SneakerSchema);

module.exports = Sneaker;
