const knex = require('./src/lib/knex');
const { models } = require('./src/models');

exports.context = {
  knex,
  models
};
