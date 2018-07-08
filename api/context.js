import knex from './src/lib/knex';
import { models } from './src/models';

export const context = {
  knex,
  models
};
