const { Password } = require('../lib/password-extension');
const guid = require('objection-guid')();
const Model = require('../lib/objection');

class User extends guid(Password(Model)) {
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

module.exports = User;
