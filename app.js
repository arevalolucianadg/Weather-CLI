const argv = require("./config/yargs").argv;

const { getPlace } = require("./utils/getPlace");

const getInfo = async (city) => {
  try {
    const { cityName, temp } = await getPlace(city);
    return `La temperatura en la ciudad de ${cityName} es de ${temp}°C.`;
  } catch (error) {
    return `No hay resultados para ${city}.`;
  }
};

getInfo(argv.city).then(console.log).catch(console.log);
