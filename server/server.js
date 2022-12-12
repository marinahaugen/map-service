require('dotenv').config()
//const bodyParser = require("body-parser")
const cors = require('cors')

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

app.use(express.json()); // middleware to parse req to json
app.use(cors()); // cross-origin resource sharing

/*
app.use(bodyParser.urlencoded({
  extended: true
}));
*/

const featuresRouter = require('./api/features')
app.use('/features', featuresRouter)

app.listen(PORT, () =>
  console.log(`Backend server is alive on http://localhost:${PORT}`)
);
