const config = require('./config');

module.exports = {
  development: {
    client: 'pg',
    seeds: {
      directory: './seeds/dev'
    },
    connection: config('/dbConnection'),
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'pg',
    seeds: {
      directory: './seeds/prod'
    },
    connection: config('/dbConnection'),
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    seeds: {
      directory: './seeds/prod'
    },
    connection: config('/dbConnection'),
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
