const { gql } = require("apollo-server");

module.exports = gql`
  type Item {
    id: ID!
    title: String
    author: String
    url: String
    createdAt: String
    children: [ItemChildren]
  }

  type ItemChildren {
    id: ID!
    text: String
    author: String
    children: [ItemChildren]
  }

  extend type Query {
    item(itemId: String!): Item
  }
`;
