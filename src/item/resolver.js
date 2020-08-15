module.exports = {
  Query: {
    item: (_, { itemId }, { dataSources }) => {
      return dataSources.itemAPI.getItem(itemId);
    },
  },
};
