const knex = require('./src/lib/knex');
const { models } = require('./src/application/models');

exports.context = {
  knex,
  models
};
