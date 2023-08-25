# Question Two Back End

## Available Scripts
You are tasked with creating a simple API following the requirements handed to you. This
task is not meant to be strict, if you find yourself having to make decision, just choose
whatever you think benefits you the most.
As a final note, remember that this is more about showcasing your knowledge than about
solving a problem.
Requirements
This task is about building an image search API based on user’s input. You’ll have to get
images from a few 3rd party services, compile the results and then return to the user. Here’s
the details for you App:
- You’ll need to create a route(it can be Post or Get) for the API call, and there’ll have
an input for the user to key in the search term (String) to search images.
- Assume that we plan to have 3 3rd party image libraries(Unsplash, Pixabay,
Storyblocks) as our image source, you’ll have to register a free account for each
image library, get the api key, and then integrate the library service in the app, make
sure we'll be able to get images from all the image library.
- Assume that you’re able to get images from all the images library that you've
integrated in the app based on the user input, then we’re expecting you to compile
the results together before you return to the user. The results will be object in array,
here’s the details of the object as below:
```
{
  image_ID: String, the ID of the image
  thumbnails: String, thumbnails url of the image
  preview: String, preview url of the image
  title: String, preview url from the image
  source: String, which image library you get this image from? [Unsplash,
  Storyblocks, Pixabay]
  tags: Array the tag/keywords of the images (if any)
}
```
## Optional task
● You’re able to build an authentication feature, which includes Registration,
Login/Logout, and only allow registered users to access your image API (eg. only
registered user with valid token can access your API) Level: intermediate
● For the web services part, you use Graphql instead of REST. Level: Hard
● You’re able to build a proper infrastructure for you application, and deploy to cloud
server(AWS/Google Cloud/Azure…). Level: Challenging
● Your application can handle > 1000s req/s without breaking a sweat(Please provide
us your load test method.) Level: Insane

## Implementation
● Use `apollo-server-express` for graphql server
● Currently, I integrated with only Unsplash and Pixabay. Storyblocks is not free.
● Deployed project to render.com cloud server

## Backend
https://node-graphql-express.onrender.com/graphql

## Frontend for testing
https://frabjous-salamander-91a95f.netlify.app
