const { ApolloServer } = require('apollo-server');
const { context } = require('./context');
const schema = require('./src/graphql/schema');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const startServer = () => {
  const server = new ApolloServer({ schema, context });
  server.listen({ http: { port: 8000 } }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  startServer();
}
