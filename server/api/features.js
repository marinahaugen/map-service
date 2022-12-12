const express = require("express");
const router = express.Router();
const Feature = require("../models/feature");
const bodyParser = require("body-parser")
var jsonParser = bodyParser.json();

async function getFeatureById(req, res, next) {
  let feature;
  try {
    feature = await Feature.findById(req.params.id);
    if (feature == null) {
      return res.status(404).send({ message: "Cannot find feature" });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
  res.feature = feature;
  next();
}

// List features
router.get("/", async (req, res) => {
  try {
    const features = await Feature.find();
    res.status(200).send({ features });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Get feature
router.get("/:id", getFeatureById, (req, res) => {
  res.json(res.feature);
});

// Create feature
router.post("/", async (req, res) => {
  console.log(req.body, '***req.body')
  const feature = new Feature({
    type: req.body.type,
    coordinates: req.body.coordinates,
  });
  console.log("feature from schema", feature);
  try {
    const newFeature = await feature.save();
    res.status(201).send(newFeature);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// Delete feature

// Update feature

module.exports = router;
