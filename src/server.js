import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './schema';

/*
*const http = require('http');
*const cron = require('node-cron');
import { getLoggedInUser } from './users/users.utils';
cron.schedule('*/ /*20 23,0-14 * * *', function () {
  console.log('node-cron');
  http.get('http://Youthable-back.herokuapp.com/');
});
context: async ({ req }) => {
    return { loggedInUser: await getLoggedInUser(req.headers.authorization) };
  },

*/

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
