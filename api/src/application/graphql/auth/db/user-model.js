const Model = require('../../../../lib/objection');
const bcrypt = require('bcrypt');
const { Password } = require('./password-extension');
class User extends Password(Model) {
  static get tableName() {
    return 'users';
  }
}

module.exports = User;
