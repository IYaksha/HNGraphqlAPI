const itemSchema = require("../item/types");
const userSchema = require("../user/types");
const searchSchema = require("../search/types");
const { gql } = require("apollo-server");

const rootSchema = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;

const schemaArray = [rootSchema, itemSchema, userSchema, searchSchema];

module.exports = schemaArray;
