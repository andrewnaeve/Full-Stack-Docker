const { gql } = require('apollo-server');
const { getAllUsers } = require('./db/getAllUsers');

exports.typeDefs = gql`
  type User {
    id: ID
    first_name: String
    last_name: String
    email: String
  }

  extend type Query {
    listAllUsers: [User]
  }
`;

exports.resolvers = {
  Query: {
    listAllUsers: async (_, __, { models: { User } }) => {
      return getAllUsers({ User });
    }
  }
};
