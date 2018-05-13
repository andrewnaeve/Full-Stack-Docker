const {
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLEnumType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLID,
  GraphQLBoolean
} = require('graphql');

exports.Schema = schema => {
  return new GraphQLSchema(schema);
};
exports.NonNull = type => {
  return new GraphQLNonNull(type);
};
exports.ObjectType = object => {
  return new GraphQLObjectType(object);
};
exports.InputObjectType = object => {
  return new GraphQLInputObjectType(object);
};
exports.InterfaceType = interfaceType => {
  return new GraphQLInterfaceType(interfaceType);
};
exports.ListType = list => {
  return new GraphQLList(list);
};
exports.EnumType = enumType => {
  return new GraphQLEnumType(enumType);
};

exports.string = GraphQLString;
exports.int = GraphQLInt;
exports.float = GraphQLFloat;
exports.id = GraphQLID;
exports.bool = GraphQLBoolean;
