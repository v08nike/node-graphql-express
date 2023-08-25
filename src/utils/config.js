const unsplashAPIInfo = {
  serverAPI: "https://api.unsplash.com/search/photos",
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
};

const pixabayAPIInfo = {
  serverAPI: "https://pixabay.com/api",
  accessKey: process.env.PIXABAY_ACCESS_KEY,
};

module.exports = { unsplashAPIInfo, pixabayAPIInfo };
