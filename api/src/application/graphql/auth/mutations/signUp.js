const Boom = require('boom');
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
    resolve: async (_, { user: { firstName, lastName, email, password } }) => {
      const { id, result } = await saveUser({ firstName, lastName, email, password });
      return {
        id,
        result
      };
    }
  }
};
