const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./src/typedefs");
const resolvers = require("./src/resolvers");
const dataSources = require("./src/dataSources");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
