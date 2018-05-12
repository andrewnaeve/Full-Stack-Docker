const {
  Schema,
  ObjectType,
  String
} = require('./utilities/GraphQLTypeUtilities');
const { GraphQLString, GraphQLObjectType } = require('graphql');

const schema = Schema({
  query: new GraphQLObjectType({
    name: 'User',
    fields: {
      firstName: { type: GraphQLString }
    }
  })
});

module.exports = schema;
