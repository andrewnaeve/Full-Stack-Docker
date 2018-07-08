import merge from 'lodash.merge';
import { typeDefs as ListAllUsersTypes, resolvers as listAllUsersResolver } from './listAllUsers';
import { typeDefs as SignUpTypes, resolvers as SignUpResolver } from './signUp';
import { typeDefs as SignInTypes, resolvers as SignInResolver } from './signIn';

export const typeDefs = `
  ${ListAllUsersTypes}
  ${SignUpTypes}
  ${SignInTypes}
`;

export const resolvers = merge(listAllUsersResolver, SignUpResolver, SignInResolver);
