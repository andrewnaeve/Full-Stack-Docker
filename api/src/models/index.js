// export models to be consumed by context
const User = require('./user-model');
const StripeCustomer = require('./stripe-customer-model');

exports.models = { User, StripeCustomer };
