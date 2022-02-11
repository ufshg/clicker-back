import client from '../../client';

export default {
  Mutation: {
    newUser: async _ => {
      await client.user.create;
      return { ok: true };
    },
  },
};
