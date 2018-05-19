const Boom = require('boom');
const { string } = require('../../utilities/GraphQLTypeUtilities');
const userSignInInputType = require('../types/userSignInInputType');
const userSignInOutputType = require('../types/userSignInOutputType');
const { validateUser } = require('../db/queries');

module.exports = {
  signIn: {
    type: userSignInOutputType,
    args: {
      user: {
        type: userSignInInputType
      }
    },
    resolve: async (_, { user: { email, password } }) => {
      const { id, result } = await validateUser({ email, password });
      return {
        id,
        result
      };
    }
  }
};
