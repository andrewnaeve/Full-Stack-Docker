const {
  Schema,
  ObjectType,
  string
} = require('./utilities/GraphQLTypeUtilities');

const schema = Schema({
  query: ObjectType({
    name: 'RootQueryType',
    fields: {
      example: { type: string }
    }
  }),
  mutation: ObjectType({
    name: 'RootMutationType',
    fields: {
      example: { type: string }
    }
  })
});

module.exports = schema;
