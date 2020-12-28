const argv = require("yargs")
  .options({
    city: {
      alias: "C",
      description: "Ciudad para obtener el clima",
      demand: true,
    },
  })
  .help().argv;

module.exports = {
  argv,
};
