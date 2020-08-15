module.exports = {
  Query: {
    user: (_, { username }, { dataSources }) => {
      return dataSources.userAPI.getUser(username);
    },
  },
};
