const bcrypt = require('bcrypt');
const { Password } = require('../lib/password-extension');
const Model = require('../lib/objection');

class User extends Password(Model) {
  static get tableName() {
    return 'users';
  }
}

module.exports = User;
