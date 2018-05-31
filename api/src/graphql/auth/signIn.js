const { gql } = require('apollo-server');
const { validateUser } = require('./db/validateUser');

exports.typeDefs = gql`
  type SignInOutputType {
    id: ID
  }

  extend type Mutation {
    signIn(email: String!, password: String!): SignInOutputType
  }
`;

exports.resolvers = {
  Mutation: {
    signIn: async (_, { email, password }, { models: { User } }) => {
      const { id, result, reason } = await validateUser({ email, password, User });
      return {
        id,
        result,
        reason
      };
    }
  }
};
