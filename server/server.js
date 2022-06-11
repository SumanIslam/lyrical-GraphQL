const express = require('express');
const cors = require('cors')
const models = require('./models');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

// Replace with your mongoLab URI
const MONGO_URI = process.env.MONGO_URI;
mongoose.connection.once('open', () => {
  console.log('MongoDB connection is ready');
})

mongoose.connection.on('error', (err) => {
  console.error(err);
})

async function mongoConnect() {
  await mongoose.connect(MONGO_URI);
}

async function startServer() {
  await mongoConnect();
  
  app.listen(4000, () => {
    console.log('Listening');
  });
}

startServer();
