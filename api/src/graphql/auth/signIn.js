import { gql } from 'apollo-server';
import { validateUser } from './db/validateUser';

export const typeDefs = gql`
  type SignInOutputType {
    id: ID
  }

  extend type Mutation {
    signIn(email: String!, password: String!): SignInOutputType
  }
`;

export const resolvers = {
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
