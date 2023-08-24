const { makeExecutableSchema } = require("@graphql-tools/schema");
const imageTypeDefs = require("../schemas/image");
const fetchDataFromTwoAPIs = require("../utils/fetchImages");

const resolvers = {
  Query: {
    images: async (root, { keyword }) => {
      const { unsplashImages } = await fetchDataFromTwoAPIs(keyword);
      console.log(unsplashImages);
      return unsplashImages;
    },
  },
};

const schema = makeExecutableSchema({ typeDefs: imageTypeDefs, resolvers });

module.exports = schema;
