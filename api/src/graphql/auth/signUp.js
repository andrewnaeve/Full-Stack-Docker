import { gql } from 'apollo-server';
import { saveUser } from './db/saveUser';

export const typeDefs = gql`
  type SignUpOutput {
    id: ID
  }

  extend type Mutation {
    signUp(firstName: String!, lastName: String!, email: String!, password: String!): SignUpOutput
  }
`;

export const resolvers = {
  Mutation: {
    signUp: async (_, { firstName, lastName, email, password }, { models: { User } }) => {
      const { id, result } = await saveUser({ firstName, lastName, email, password, User });
      return {
        id
      };
    }
  }
};
