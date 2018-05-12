const {
  Schema,
  ObjectType,
  StringType
} = require('./utilities/GraphQLTypeUtilities');

const schema = Schema({
  query: ObjectType({
    name: 'RootQuery'
  })
});

module.exports = schema;
