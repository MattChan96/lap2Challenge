const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const secretsController = require("./controllers/secrets")
const app = express()

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.dtifthg.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("Connected successfully to database"))

app.use(cors());
app.use(express.json())

app.use('/secrets', secretsController);

app.get('/', (req, res) => res.send('Welcome to LonelySecrets'))

module.exports = app;
