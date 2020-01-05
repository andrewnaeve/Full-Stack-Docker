import merge from 'lodash.merge';
import { gql } from 'apollo-server';
import { typeDefs as ListAllUsersTypes, resolvers as listAllUsersResolver } from './listAllUsers';
import { typeDefs as SignUpTypes, resolvers as SignUpResolver } from './signUp';
import { typeDefs as SignInTypes, resolvers as SignInResolver } from './signIn';

export const typeDefs = gql`
  ${ListAllUsersTypes}
  ${SignUpTypes}
  ${SignInTypes}
`;

export const resolvers = merge(listAllUsersResolver, SignUpResolver, SignInResolver);
