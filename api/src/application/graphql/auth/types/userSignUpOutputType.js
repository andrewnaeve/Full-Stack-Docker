const { ObjectType, bool, id } = require('../../utilities/GraphQLTypeUtilities');

const userSignUpOutputType = ObjectType({
  name: 'userSignUpOutputType',
  fields: {
    id: { type: id },
    result: { type: bool }
  }
});

module.exports = userSignUpOutputType;
