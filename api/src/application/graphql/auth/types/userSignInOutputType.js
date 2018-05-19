const { ObjectType, id, NonNull, bool } = require('../../utilities/GraphQLTypeUtilities');

const userSignInOutputType = ObjectType({
  name: 'userSignInOutputType',
  fields: {
    result: { type: bool },
    id: { type: id }
  }
});

module.exports = userSignInOutputType;
