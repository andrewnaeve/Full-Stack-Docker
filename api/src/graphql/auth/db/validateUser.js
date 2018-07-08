export const validateUser = async ({ email, password, User }) => {
  const user = await User.query()
    .first()
    .where('email', email);

  if (!user) {
    return {
      id: null
    };
  }

  const passwordValid = await user.verifyPassword(password);
  return {
    id: user.id
  };
};
