const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const schema = require("./resolvers/image.resolver");
const cors = require("cors");

const app = express();

app.use(cors());

require("dotenv").config();

const startServer = async () => {
  const server = new ApolloServer({ schema });
  await server.start();
  server.applyMiddleware({ app });
};

startServer();

module.exports = app;
