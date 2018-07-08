export const getAllUsers = ({ User }) => {
  return User.query().then(users => {
    return users.map(attr => ({
      id: attr.id,
      first_name: attr.first_name,
      last_name: attr.last_name,
      email: attr.email
    }));
  });
};
