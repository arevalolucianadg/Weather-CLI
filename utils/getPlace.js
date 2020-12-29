const axios = require("axios");
const dotenv = require("dotenv").config();

const getPlace = async (city) => {
  const encodedCity = encodeURI(city);
  const apiKey = process.env.OWM_API_KEY;

  const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appId=${apiKey}&units=metric`,
  });

  const { data } = await instance.get();

  if (data.cod !== 200) {
    throw new Error(`No hay resultados para: ${city}.`);
  }

  const cityName = `${data.name} ${data.sys.country}`;
  const lat = data.coord.lat;
  const long = data.coord.lon;
  const temp = data.main.temp;

  return {
    cityName,
    lat,
    long,
    temp,
  };
};

module.exports = {
  getPlace,
};
