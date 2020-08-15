module.exports = {
  Query: {
    search: (_, { query, tags, page }, { dataSources }) => {
      return dataSources.searchAPI.basicSearch(query, tags, page);
    },
    searchByDate: (_, { query, tags, page }, { dataSources }) => {
      return dataSources.searchAPI.dateSearch(query, tags, page);
    },
  },
};
