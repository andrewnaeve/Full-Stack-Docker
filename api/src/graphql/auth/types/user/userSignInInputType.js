const { InputObjectType, string, NonNull } = require('../../../utilities/type-utilities');

const userSignInInputType = InputObjectType({
  name: 'userSignInInputType',
  fields: () => ({
    email: { type: NonNull(string) },
    password: { type: NonNull(string) }
  })
});

module.exports = userSignInInputType;
