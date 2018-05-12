require('dotenv').config();
const Glue = require('glue');
const { manifest } = require('./manifest');

const options = {
  relativeTo: __dirname
};

const startServer = async function() {
  try {
    const server = await Glue.compose(manifest, options);
    await server.start();
    console.log('hapi days!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
