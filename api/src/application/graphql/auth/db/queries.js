const Boom = require('boom');
const User = require('./user-model');
const bcrypt = require('bcrypt');

const hashPassword = plainText => {
  const saltRounds = 10;
  return bcrypt.hash(plainText, saltRounds);
};

exports.saveUser = async ({ firstName, lastName, email, password }) => {
  const hash = await hashPassword(password);
  const newUser = await User.query().insert({
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: hash
  });
  if (!newUser) {
    return {
      result: false
    };
  }
  return {
    id: newUser.id,
    result: true
  };
};

exports.validateUser = async ({ email, password }) => {
  const user = await User.query().where('email', email);
  const hash = user[0].password;
  const id = user[0].id;

  const match = await bcrypt.compare(password, hash);
  if (!match) {
    return {
      result: false
    };
  }
  return {
    id: id,
    result: true
  };
};

exports.getAllUsers = () => {
  return User.query().then(users => {
    return users.map(attr => ({
      id: attr.id,
      first_name: attr.first_name,
      last_name: attr.last_name,
      email: attr.email
    }));
  });
};
