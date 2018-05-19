const { InputObjectType, string, NonNull } = require('../../utilities/GraphQLTypeUtilities');

const userSignUpInputType = InputObjectType({
  name: 'userSignUpInputType',
  fields: {
    firstName: { type: NonNull(string) },
    lastName: { type: NonNull(string) },
    email: { type: NonNull(string) },
    password: { type: NonNull(string) }
  }
});

module.exports = userSignUpInputType;
