const { gql } = require('apollo-server-express');


const imagesTypeDefs = gql`
  type Image {
    image_ID: String
    thumbnails: String
    preview: String
    title: String
    source: String
    tags: [String]
  }

  type Query {
    images(keyword: String!): [Image]
  }
`;

module.exports = imagesTypeDefs;