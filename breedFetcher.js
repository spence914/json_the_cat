const request = require('request');
const URL = "https://api.thecatapi.com/v1/breeds/search?q=sib"

request(URL, (error, response, body) => {
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});