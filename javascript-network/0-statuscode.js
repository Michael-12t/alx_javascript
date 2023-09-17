const request = require('request');

const url = process.argv[2]; // Retrieve the URL from command line arguments

request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('code:', response.statusCode);
  }
});