exports.saveUser = async ({ firstName, lastName, email, password, User }) => {
  const newUser = await User.query().insert({
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password
  });
  return {
    id: newUser.id
  };
};

exports.validateUser = async ({ email, password, User }) => {
  const user = await User.query()
    .first()
    .where('email', email);
  const passwordValid = await user.verifyPassword(password);
  return {
    id: user.id,
    result: passwordValid
  };
};

exports.getAllUsers = ({ User }) => {
  return User.query().then(users => {
    return users.map(attr => ({
      id: attr.id,
      first_name: attr.first_name,
      last_name: attr.last_name,
      email: attr.email
    }));
  });
};
