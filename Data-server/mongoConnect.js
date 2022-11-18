const { MongoClient, ServerApiVersion } = require('mongodb');

const DB_URI = 'mongodb://localhost:27017';
const DB_URI_ATLAS =
  'mongodb+srv://minjung:dlalswjd8033!@cluster0.ps57gw4.mongodb.net/test';
const uri = DB_URI_ATLAS;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
