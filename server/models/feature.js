const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema({
  coordinates: {
    type: [[[Number]]],
    required: true
  },
  type: {
    type: String,
    enum: ['Polygon'],
    required: true
  }
});

module.exports = mongoose.model("Feature", featureSchema);
