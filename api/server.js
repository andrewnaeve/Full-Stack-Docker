require('dotenv').config();
const Glue = require('glue');
const { manifest, serverOptions } = require('./manifest');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const startServer = async function() {
  try {
    const server = await Glue.compose(manifest, serverOptions);
    await server.start();
    console.log(`Worker ${process.pid} running on port ${server.info.port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  startServer();
}
