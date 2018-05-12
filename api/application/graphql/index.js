const {
  Schema,
  ObjectType,
  StringType
} = require('./utilities/GraphQLTypeUtilities');

const schema = Schema({
  query: ObjectType({
    name: 'User',
    fields: {
      firstName: { type: StringType },
      lastName: { type: StringType },
      email: { type: StringType }
    }
  })
});

module.exports = schema;
