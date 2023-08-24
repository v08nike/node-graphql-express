const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./resolvers/image.resolver');

const app = express();

require('dotenv').config();

const startServer = async () => {
    const server = new ApolloServer({ schema });
    await server.start();
    server.applyMiddleware({ app });    
}

startServer();

module.exports = app;
