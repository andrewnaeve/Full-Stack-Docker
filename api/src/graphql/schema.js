const { gql } = require('apollo-server');
const merge = require('lodash.merge');
const { makeExecutableSchema } = require('graphql-tools');
const { applyMiddleware } = require('graphql-middleware');
const permissions = require('./permissions');
const { typeDefs: AuthTypes, resolvers: authResolvers } = require('./auth');
const { typeDefs: StripeTypes, resolvers: stripeResolvers } = require('./stripe');

const Query = `
  type Query {
    _empty: String
  }
`;

const Mutation = `
  type Mutation {
    _empty: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [Query, Mutation, AuthTypes, StripeTypes],
  resolvers: merge(authResolvers, stripeResolvers)
});

const schemaWithMiddleware = applyMiddleware(schema, permissions);

module.exports = schemaWithMiddleware;
