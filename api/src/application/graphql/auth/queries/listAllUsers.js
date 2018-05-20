const { ListType } = require('../../utilities/type-utilities');
const userListType = require('../types/user/userListType');
const { getAllUsers } = require('../db/queries');

module.exports = {
  listAllUsers: {
    type: ListType(userListType),
    resolve: async (_, __, { models: { User } }) => {
      const allUsers = await getAllUsers({ User });
      return allUsers;
    }
  }
};
