const request = require('request');

const movieId = process.argv[2]; // Retrieve the movie ID from command line arguments
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    if (response.statusCode === 200) {
      const movie = JSON.parse(body);
      console.log(movie.title);
    } else {
      console.error('Error:', response.statusCode);
    }
  }
});