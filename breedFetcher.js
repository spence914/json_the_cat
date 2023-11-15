const request = require('request');
let baseURL = `https://api.thecatapi.com/v1/breeds/search?q=`;


const fetchBreedDescription = function (breedName, callback) {
  let URL = baseURL + breedName;
  request(URL, (error, response, body) => {
    if (error) {
      return callback('Request Failed', null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback('Breed not found', null);
    }
    callback(null, data[0].description);

  });
};

module.exports = { fetchBreedDescription };
