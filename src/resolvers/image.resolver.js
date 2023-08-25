const { makeExecutableSchema } = require("@graphql-tools/schema");
const imageTypeDefs = require("../schemas/image");
const fetchDataFromAPIs = require("../utils/fetchDataFromAPIs");

const resolvers = {
  Query: {
    images: async (root, { keyword }) => {
      console.log(keyword);
      const { unsplashImages, pixabayImages } = await fetchDataFromAPIs(keyword);
      return [...unsplashImages, ...pixabayImages];
    },
  },
};

const schema = makeExecutableSchema({ typeDefs: imageTypeDefs, resolvers });

module.exports = schema;
