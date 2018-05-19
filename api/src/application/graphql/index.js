const { Schema, ObjectType, string } = require('./utilities/type-utilities');
const { authMutations, authQueries } = require('./auth');

const schema = Schema({
  query: ObjectType({
    name: 'RootQueryType',
    fields: () => ({
      ...authQueries
    })
  }),
  mutation: ObjectType({
    name: 'RootMutationType',
    fields: () => ({
      ...authMutations
    })
  })
});

module.exports = schema;
