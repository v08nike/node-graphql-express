const convertImagesWithSchema = (images, source, mapImage) => {
  if (!images) return [];

  return images.map(image => ({ ...mapImage(image), source }));
};

const mapUnsplashImage = ({ id, urls, alt_description }) => ({
  image_ID: id,
  thumbnails: urls.thumb,
  preview: urls.regular,
  title: alt_description,
  tags: alt_description ? alt_description.split(" ") : null,
});

const mapPixabayImage = ({ id, previewURL, largeImageURL, tags }) => ({
  image_ID: id,
  thumbnails: previewURL,
  preview: largeImageURL,
  title: null,
  tags: tags ? tags.split(", ") : null,
});

const convertUnsplashImagesWithSchema = (images) => 
  convertImagesWithSchema(images, "Unsplash", mapUnsplashImage);

const convertPixabayImagesWithSchema = (images) => 
  convertImagesWithSchema(images, "Pixabay", mapPixabayImage);

module.exports = {
  convertUnsplashImagesWithSchema,
  convertPixabayImagesWithSchema,
};