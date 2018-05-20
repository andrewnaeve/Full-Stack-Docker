const Boom = require('boom');
const { string } = require('../../utilities/type-utilities');
const userSignInInputType = require('../types/user/userSignInInputType');
const userSignInOutputType = require('../types/user/userSignInOutputType');
const { validateUser } = require('../db/queries');

module.exports = {
  signIn: {
    type: userSignInOutputType,
    args: {
      user: {
        type: userSignInInputType
      }
    },
    resolve: async (_, { user: { email, password } }, { models: User }) => {
      const { id, result } = await validateUser({ email, password });
      return {
        id,
        result
      };
    }
  }
};
