const convertUnsplashImagesWithSchema = (images) => {
  if (!images) return [];

  return images.map(({ id, urls, alt_description }) => ({
    image_ID: id,
    thumbnails: urls.thumb,
    preview: urls.regular,
    title: alt_description,
    source: "Unsplash",
    tags: alt_description ? alt_description.split(" ") : null,
  }));
};

const convertPixabayImagesWithSchema = (images) => {
  if (!images) return [];

  return images.map(({ id, previewURL, largeImageURL, tags }) => ({
    image_ID: id,
    thumbnails: previewURL,
    preview: largeImageURL,
    title: null,
    source: "Pixabay",
    tags: tags ? tags.split(", ") : null,
  }));
};

module.exports = {
  convertUnsplashImagesWithSchema,
  convertPixabayImagesWithSchema,
};
