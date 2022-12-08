const mongoose = require("mongoose");
const GeoJSON = require('mongoose-geojson-schema');

const featureSchema = new mongoose.Schema({
  feature: mongoose.Schema.Types.Feature,
});

module.exports = mongoose.model("Feature", featureSchema);
