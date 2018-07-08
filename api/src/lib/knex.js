const config = require('../../config');

const knex = require('knex')({
  debug: false, // process.env.DEBUG,
  client: 'pg',
  connection: config('/dbConnection')
});

module.exports = knex;
