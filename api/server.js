import { ApolloServer } from 'apollo-server';
import { context } from './context';
import schema from './src/graphql/schema';
import cluster from 'cluster';
const numCPUs = require('os').cpus().length;

const startServer = () => {
  const server = new ApolloServer({ schema, context });
  server.listen({ port: 8000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};
if (process.env.NODE_ENV === 'production') {
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
} else {
  startServer();
}
