import { gql } from 'apollo-server';
import merge from 'lodash.merge';
import { makeExecutableSchema } from 'graphql-tools';
import { applyMiddleware } from 'graphql-middleware';
import permissions from './permissions';
import { typeDefs as AuthTypes, resolvers as authResolvers } from './auth';

const Query = gql`
  type Query {
    _empty: String
  }
`;

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [Query, Mutation, AuthTypes],
  resolvers: merge(authResolvers)
});

const schemaWithMiddleware = applyMiddleware(schema, permissions);

export default schemaWithMiddleware;
