const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    username: String!
    about: String!
    karma: Int
  }

  extend type Query {
    user(username: String): User
  }
`;
