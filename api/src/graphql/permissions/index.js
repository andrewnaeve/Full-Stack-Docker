const { shield, and, or, not } = require('graphql-shield');
const { isAuthenticated } = require('./rules');

module.exports = shield({
  Query: {
    listAllUsers: isAuthenticated
  }
});

// Mutation: {
//   SignIn: isAuthenticated,
//   SignUp: isAuthenticated,
//   Charge: isAuthenticated,
//   CreateCustomer: isAuthenticated
// }
