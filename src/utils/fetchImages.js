const axios = require("axios");
const { unsplashAPIInfo, pixabayAPIInfo } = require("./config");
const { convertUnsplashImagesToSchema, convertPixabayImagesToSchema } = require("./convertImages");

async function fetchDataFromTwoAPIs(keyword) {
  const [pixabayPromise, unsplashPromise] = [
    axios.get(
      `${unsplashAPIInfo.serverAPI}/?client_id=${unsplashAPIInfo.accessKey}&page=1&query=${keyword}`
    ),
    axios.get(
      `${pixabayAPIInfo.serverAPI}/api/?key=${pixabayAPIInfo.accessKey}&q=${keyword}&image_type=photo`
    ),
  ];

  const [pixabayResponse, unsplashResponse] = await Promise.allSettled([
    pixabayPromise,
    unsplashPromise,
  ]);

  if (pixabayResponse.status === "rejected") {
    console.log(pixabayResponse.errors);
  }

  if (unsplashResponse.status === "rejected") {
    console.log(unsplashResponse.errors);
  }

  const pixabayImages =
    pixabayResponse.status === "fulfilled" ? pixabayResponse.value.data : [];

  const unsplashImages =
    unsplashResponse.status === "fulfilled" ? unsplashResponse.value.data : [];

  return {
    unsplashImages: convertUnsplashImagesToSchema(unsplashImages),
    pixabayImages: convertPixabayImagesToSchema(pixabayImages),
  };
}

module.exports = fetchDataFromTwoAPIs;
