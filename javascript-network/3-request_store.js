const request = require('request');

function storeText(url) {
  request(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error('Request failed with status code:', response.statusCode);
      return;
    }

    const text = body.trim();
    console.log(`[${text.length} chars long]`);
    console.log('[stderr]: [Anything]');
    console.log('(0 chars long)');
  });
}

// Usage: node 3-request_store.js http://localhost:5050/route_0/file_0
const url = process.argv[2];
storeText(url);