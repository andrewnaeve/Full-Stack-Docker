exports.saveUser = async ({ firstName, lastName, email, password, User }) => {
  try {
    const newUser = await User.query().insert({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    });
    return {
      id: newUser.id
    };
  } catch (error) {
    if (error.code === '23505') {
      throw new Error('This email is already in use');
    } else {
      throw new Error(error);
    }
  }
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
