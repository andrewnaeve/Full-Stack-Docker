const { InputObjectType, string, NonNull } = require('../../utilities/GraphQLTypeUtilities');

const userSignInInputType = InputObjectType({
  name: 'userSignInInputType',
  fields: {
    email: { type: NonNull(string) },
    password: { type: NonNull(string) }
  }
});

module.exports = userSignInInputType;
