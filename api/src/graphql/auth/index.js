const merge = require('lodash.merge');
const { typeDefs: ListAllUsersTypes, resolvers: listAllUsersResolver } = require('./listAllUsers');
const { typeDefs: SignUpTypes, resolvers: SignUpResolver } = require('./signUp');
const { typeDefs: SignInTypes, resolvers: SignInResolver } = require('./signIn');

const typeDefs = `
  ${ListAllUsersTypes}
  ${SignUpTypes}
  ${SignInTypes}
`;

const resolvers = merge(listAllUsersResolver, SignUpResolver, SignInResolver);

module.exports = {
  typeDefs,
  resolvers
};
