const axios = require("axios");
const { unsplashAPIInfo, pixabayAPIInfo } = require("./config");
const {
  convertUnsplashImagesWithSchema,
  convertPixabayImagesWithSchema,
} = require("./convertImagesWithSchema");

async function fetchDataFromAPIs(keyword) {
  const [unsplashPromise, pixabayPromise] = [
    axios.get(
      `${unsplashAPIInfo.serverAPI}/?page=1&query=${keyword}&client_id=${unsplashAPIInfo.accessKey}`,
    ),
    axios.get(
      `${pixabayAPIInfo.serverAPI}/?&q=${keyword}&image_type=photo&key=${pixabayAPIInfo.accessKey}`
    ),
  ];

  const [pixabayResponse, unsplashResponse] = await Promise.allSettled([
    pixabayPromise,
    unsplashPromise,
  ]);

  if (pixabayResponse.status === "rejected") {
    console.log(pixabayResponse.reason);
  }

  if (unsplashResponse.status === "rejected") {
    console.log(unsplashResponse.reason);
  }

  const pixabayImages =
    pixabayResponse.status === "fulfilled"
      ? pixabayResponse.value.data.hits
      : [];

  const unsplashImages =
    unsplashResponse.status === "fulfilled"
      ? unsplashResponse.value.data.results
      : [];

  return {
    unsplashImages: convertUnsplashImagesWithSchema(unsplashImages),
    pixabayImages: convertPixabayImagesWithSchema(pixabayImages),
  };
}

module.exports = fetchDataFromAPIs;
