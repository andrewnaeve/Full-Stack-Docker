const Confidence = require('confidence');

const config = {
  $filter: 'env',
  $base: {
    dbConnection: {
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT
    }
  },
  development: {
    frontend: 'https://localhost:3000/'
  },
  staging: {},
  production: {}
};

module.exports = (path, criteria) => {
  const store = new Confidence.Store();
  criteria = criteria || {};
  criteria.env = process.env.NODE_ENV || 'development';
  store.load(config);
  return store.get(path, criteria);
};
