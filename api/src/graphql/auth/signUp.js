const { gql } = require('apollo-server');
const { saveUser } = require('./db/saveUser');

exports.typeDefs = gql`
  type SignUpOutput {
    id: ID
  }

  extend type Mutation {
    signUp(firstName: String!, lastName: String!, email: String!, password: String!): SignUpOutput
  }
`;

exports.resolvers = {
  Mutation: {
    signUp: async (_, { firstName, lastName, email, password }, { models: { User } }) => {
      const { id, result } = await saveUser({ firstName, lastName, email, password, User });
      return {
        id
      };
    }
  }
};
