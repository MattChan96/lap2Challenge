const express = require("express");
const cors = require("cors");

const secretsController = require("./controllers/secrets")
const app = express()

app.use(cors());
app.use(express.json())

app.use('/secrets', secretsController);

app.get('/', (req, res) => res.send('Welcome to LonelySecrets'))

module.exports = app;
