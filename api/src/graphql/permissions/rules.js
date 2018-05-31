const { rule } = require('graphql-shield');

exports.isAuthenticated = rule()(async (parent, args, ctx, info) => {
  // return ctx.user !== null;
  return true;
});

exports.isAdmin = rule()(async (parent, args, ctx, info) => {
  // return ctx.user.role === 'admin';
});
