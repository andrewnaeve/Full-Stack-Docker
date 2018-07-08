import { shield, and, or, not } from 'graphql-shield';
import { isAuthenticated } from './rules';

export default shield({
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
