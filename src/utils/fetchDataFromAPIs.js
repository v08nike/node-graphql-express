const axios = require("axios");
const { unsplashAPIInfo, pixabayAPIInfo } = require("./config");
const {
  convertUnsplashImagesWithSchema,
  convertPixabayImagesWithSchema,
} = require("./convertImagesWithSchema");

async function fetchFromUnsplash(keyword) {
  try {
    const response = await axios.get(
      `${unsplashAPIInfo.serverAPI}/?page=1&query=${keyword}&client_id=${unsplashAPIInfo.accessKey}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function fetchFromPixabay(keyword) {
  try {
    const response = await axios.get(
      `${pixabayAPIInfo.serverAPI}/?&q=${keyword}&image_type=photo&key=${pixabayAPIInfo.accessKey}`
    );
    return response.data.hits;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function fetchDataFromAPIs(keyword) {
  const [unsplashImages, pixabayImages] = await Promise.all([
    fetchFromUnsplash(keyword),
    fetchFromPixabay(keyword),
  ]);

  return {
    unsplashImages: convertUnsplashImagesWithSchema(unsplashImages),
    pixabayImages: convertPixabayImagesWithSchema(pixabayImages),
  };
}

module.exports = fetchDataFromAPIs;
