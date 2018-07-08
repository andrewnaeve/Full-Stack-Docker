import { rule } from 'graphql-shield';

export const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  // return ctx.user !== null;
  return true;
});

export const isAdmin = rule()(async (parent, args, ctx, info) => {
  // return ctx.user.role === 'admin';
});
