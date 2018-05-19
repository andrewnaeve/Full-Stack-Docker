const { ListType } = require('../../utilities/GraphQLTypeUtilities');
const userListType = require('../types/userListType');
const { getAllUsers } = require('../db/queries');

module.exports = {
  listAllUsers: {
    type: ListType(userListType),
    resolve: async () => {
      const allUsers = await getAllUsers();
      return allUsers;
    }
  }
};
