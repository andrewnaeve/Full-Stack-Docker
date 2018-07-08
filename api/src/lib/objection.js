import { Model } from 'objection';
import knex from './knex';
Model.knex(knex);

export default Model;
