const { graphiqlHapi } = require('apollo-server-hapi');
const { graphqlHapi } = require('apollo-server-hapi');
const schema = require('./src/application/graphql');

const goodOptions = {
  ops: {
    interval: 1000
  },
  reporters: {
    myConsoleReporter: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ log: '*', response: '*' }]
      },
      {
        module: 'good-console'
      },
      'stdout'
    ]
  }
};

exports.serverOptions = {
  relativeTo: __dirname
};

exports.manifest = {
  server: {
    port: 8000
  },
  register: {
    plugins: [
      {
        plugin: require('good'),
        goodOptions
      },
      {
        plugin: graphqlHapi,
        options: {
          path: '/graphql',
          graphqlOptions: {
            schema: schema
          },
          route: {
            cors: true
          }
        }
      },
      {
        plugin: graphiqlHapi,
        options: {
          path: '/graphiql',
          graphiqlOptions: {
            endpointURL: '/graphql'
          }
        }
      }
    ]
  }
};
