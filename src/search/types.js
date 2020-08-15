const { gql } = require("apollo-server");

module.exports = gql`
  type Hits {
    hits: [HitOutput]
    page: Int
    nbHits: Int
    nbPages: Int
    hitsPerPage: Int
    processingTimeMS: Int
    query: String
    params: String
  }

  type HitOutput {
    title: String
    url: String
    author: String
    points: Int
    _tags: [String]
    num_comments: Int
  }

  extend type Query {
    search(query: String, tags: String, page: Int!): Hits
    searchByDate(query: String, tags: String, page: Int!): Hits
  }
`;
