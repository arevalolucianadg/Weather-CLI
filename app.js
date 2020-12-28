const axios = require("axios");
const dotenv = require("dotenv").config();

const argv = require("./config/yargs").argv;

const encodedCity = encodeURI(argv.city);
const apiKey = process.env.OWM_API_KEY;

const instance = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appId=${apiKey}`,
});

instance
  .get()
  .then((resp) => console.log(resp.data))
  .catch((err) => console.log(err));
