const request = require('request');

function getCharacter(url) {
  request(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error('Request failed with status code:', response.statusCode);
      return;
    }

    const character = JSON.parse(body);
    console.log(character.name);
    console.log(character.films.length);
    console.log(character.species);
    console.log(character.homeworld);
  });
}

// Usage: node 5-starwars_characters.js 3
const characterId = process.argv[2];
const url = `http://swapi-api.hbtn.io/api/people/${characterId}/`;
getCharacter(url);