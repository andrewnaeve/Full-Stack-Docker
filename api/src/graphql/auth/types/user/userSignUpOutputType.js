const { ObjectType, bool, id } = require('../../../utilities/type-utilities');

const userSignUpOutputType = ObjectType({
  name: 'userSignUpOutputType',
  fields: () => ({
    id: { type: id },
    result: { type: bool }
  })
});

module.exports = userSignUpOutputType;
