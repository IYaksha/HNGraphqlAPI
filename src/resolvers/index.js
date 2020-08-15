const itemResolver = require("../item/resolver");
const userResolver = require("../user/resolver");
const searchResolver = require("../search/resolver");

module.exports = {
  Query: {
    ...itemResolver.Query,
    ...userResolver.Query,
    ...searchResolver.Query,
  },
};
