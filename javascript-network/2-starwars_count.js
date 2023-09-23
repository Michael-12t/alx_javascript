const axios = require('axios');

async function countFilms() {
  try {
    const response = await axios.get('https://swapi-api.alx-tools.com/api/films');
    const films = response.data.results;
    const count = films.length;
    console.log(count);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

countFilms();