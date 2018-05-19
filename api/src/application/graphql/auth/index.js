const { signUp } = require('./mutations/signUp');

const { signIn } = require('./queries/signIn');
const { listAllUsers } = require('./queries/listAllUsers');

exports.authMutations = { signUp };
exports.authQueries = { listAllUsers, signIn };
