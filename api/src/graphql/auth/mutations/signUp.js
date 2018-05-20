const userSignUpOutputType = require('../types/user/userSignUpOutputType');
const userSignUpInputType = require('../types/user/userSignUpInputType');
const { saveUser } = require('../db/queries');

module.exports = {
  signUp: {
    type: userSignUpOutputType,
    args: {
      user: {
        type: userSignUpInputType
      }
    },
    resolve: async (
      _,
      { user: { firstName, lastName, email, password } },
      { models: { User } }
    ) => {
      const { id, result } = await saveUser({ firstName, lastName, email, password, User });
      return {
        id,
        result
      };
    }
  }
};
