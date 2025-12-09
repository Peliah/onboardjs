import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

// Query to get all users
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('users').collect();
  },
});

// Query to get a user by email
export const getByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('users')
      .withIndex('by_email', (q) => q.eq('email', args.email))
      .first();
  },
});

// Mutation to create a new user
export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await ctx.db.insert('users', {
      name: args.name,
      email: args.email,
      createdAt: Date.now(),
    });
    return userId;
  },
});
