import client from '../../client';

export default {
  Mutation: {
    newCat: async (_, { userId }) => {
      try {
        const catExist = await client.cat.findFirst({
          where: { userId },
        });

        if (catExist) {
          return {
            ok: false,
            error: '고양이가 이미 존재함',
            catExist: Boolean(catExist),
          };
        }

        await client.cat.create({
          data: {
            userId,
          },
        });
        return { ok: true };
      } catch (error) {
        return { ok: true, error };
      }
    },
  },
};
