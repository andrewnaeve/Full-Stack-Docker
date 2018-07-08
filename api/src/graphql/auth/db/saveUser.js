export const saveUser = async ({ firstName, lastName, email, password, User }) => {
  const newUser = await User.query().insert({
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password
  });
  if (!newUser) {
    return {
      id: null
    };
  }
  return {
    id: newUser.id
  };
};
