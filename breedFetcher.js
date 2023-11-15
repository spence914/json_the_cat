const request = require('request');
const breedToSearch = process.argv[2];
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedToSearch}`;

request(URL, (error, response, body) => {
  if (error) {
    console.log('Error Occurred:', error);
  }


  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Invalid Breed, try again");
  } else
    console.log(data[0].description);
});