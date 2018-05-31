const Model = require('../lib/objection');

class StripeCustomer extends Model {
  static get tableName() {
    return 'stripe_customers';
  }
  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/user-model',
        join: {
          from: 'stripe_customers.user_id',
          to: 'users.id'
        }
      }
    };
  }
}

module.exports = StripeCustomer;
