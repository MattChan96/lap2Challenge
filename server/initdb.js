const { MongoClient } = require('mongodb')
const connectionUrl = process.env.DB_CONNECTION;

const init = async () => {
  let client = await MongoClient.connect(connectionUrl)
  return client.db(process.env.DB_NAME)
}

module.exports = { init };
