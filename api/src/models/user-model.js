import { Password } from '../lib/password-extension';
import Model from '../lib/objection';
import guid from 'objection-guid';

class User extends guid()(Password(Model)) {
  static get tableName() {
    return 'users';
  }
  static get relationMappings() {
    return {
      stripeCustomer: {
        relation: Model.HasOneRelation,
        modelClass: __dirname + '/stripe-customer-model',
        join: {
          from: 'users.id',
          to: 'stripe_customers.user_id'
        }
      }
    };
  }
}

export default User;
