const app = require("express")();
const cors = require("cors");

const secretsController = require("./controllers/secrets")

app.use(cors());

app.use('/secrets', secretsController);

app.get('/', (req, res) => res.send('Welcome to LonelySecrets'))

module.exports = app;
