import { gql } from 'apollo-server';
import { getAllUsers } from './db/getAllUsers';

export const typeDefs = gql`
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

export const resolvers = {
  Query: {
    listAllUsers: async (_, __, { models: { User } }) => {
      return getAllUsers({ User });
    }
  }
};
