const convertUnsplashImagesToSchema = (images) => {
  return images.map(({ id, urls, alt_description }) => ({
    image_ID: id,
    thumbnails: urls.thumb,
    preview: urls.regular,
    title: alt_description,
    source: "Unsplash",
    tags: alt_description.split(" "),
  }));
};

const convertPixabayImagesToSchema = (images) => {
  return images.map(({ id, previewURL, largeImageURL, tags }) => ({
    image_ID: id,
    thumbnails: previewURL,
    preview: largeImageURL,
    title: null,
    source: "Pixabay",
    tags,
  }));
};

module.exports = {
  convertUnsplashImagesToSchema,
  convertPixabayImagesToSchema,
};
